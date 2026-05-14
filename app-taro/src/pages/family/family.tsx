import React, { useState, useEffect, useCallback } from 'react';
import Taro from '@tarojs/taro';
import { View, Text, Image, Input, Button, ScrollView } from '@tarojs/components';
import { familiesApi, FamilyManager, API_BASE_URL } from '../../services/api';
import { useUserStore } from '../../stores/user.store';
import { safeName } from '../../utils/date';
import type { FamilyMember, RelationshipRule } from '../../types/api';
import NavBar from '../../components/nav-bar';
import './family.scss';

interface DisplayMember {
  id: number;
  name: string;
  avatar: string;
  relation: string;
  relationshipKey: string;
  phone: string;
  role: string;
}

const relationMap: Record<string, string> = {
  self: '本人',
  spouse: '配偶',
  father: '父亲',
  mother: '母亲',
  son: '儿子',
  daughter: '女儿',
  grandfather_paternal: '爷爷',
  grandmother_paternal: '奶奶',
  grandfather_maternal: '外公',
  grandmother_maternal: '外婆',
  other: '其他',
  member: '成员',
};

const relationMapReverse: Record<string, string> = {
  '本人': 'self',
  '配偶': 'spouse',
  '父亲': 'father',
  '母亲': 'mother',
  '儿子': 'son',
  '女儿': 'daughter',
  '爷爷': 'grandfather_paternal',
  '奶奶': 'grandmother_paternal',
  '外公': 'grandfather_maternal',
  '外婆': 'grandmother_maternal',
  '其他': 'other',
};

const Family: React.FC = () => {
  const { isLoggedIn, isGuestMode, loadFromStorage } = useUserStore();

  const [isAdmin, setIsAdmin] = useState(false);
  const [statusBarHeight, setStatusBarHeight] = useState(0);
  const [members, setMembers] = useState<DisplayMember[]>([]);
  const [relationshipRules, setRelationshipRules] = useState<RelationshipRule[]>([]);

  const [showAddDialog, setShowAddDialog] = useState(false);
  const [editingMember, setEditingMember] = useState<DisplayMember | null>(null);

  const [formData, setFormData] = useState({
    phone: '',
    relationship: '本人',
  });

  const [showRelationPicker, setShowRelationPicker] = useState(false);
  const [selectedRelation, setSelectedRelation] = useState('');

  const [relationOptions, setRelationOptions] = useState<{ text: string; value: string }[]>([]);
  const [fullRelationMapReverse, setFullRelationMapReverse] = useState<Record<string, string>>({ ...relationMapReverse });

  useEffect(() => {
    Taro.getSystemInfo({
      success: (res) => {
        setStatusBarHeight(res.statusBarHeight || 0);
      },
    });
    loadFromStorage();
    checkAdminStatus();
    loadRelationshipRules();
    loadMembers();
  }, []);

  const checkAdminStatus = () => {
    setIsAdmin(FamilyManager.isAdmin());
  };

  const loadRelationshipRules = useCallback(() => {
    const state = useUserStore.getState();
    if (state.isGuestMode) return;

    familiesApi.getRelationshipRules().then((res) => {
      if (res.code === 0) {
        const rules: RelationshipRule[] = res.data || [];
        setRelationshipRules(rules);

        const options = rules.map((rule) => {
          const textCn = relationMap[rule.relationship] || rule.relationship;
          const limit = rule.maxCount ? ` (限${rule.maxCount}个)` : '';
          return { text: textCn + limit, value: textCn };
        });
        setRelationOptions(options);

        const newReverseMap: Record<string, string> = { ...relationMapReverse };
        rules.forEach((rule) => {
          const textCn = relationMap[rule.relationship];
          if (textCn) {
            newReverseMap[textCn] = rule.relationship;
          }
        });
        setFullRelationMapReverse(newReverseMap);
      }
    }).catch(() => {
      // ignore
    });
  }, []);

  const loadMembers = useCallback(() => {
    const state = useUserStore.getState();

    if (state.isGuestMode) {
      setMembers([
        { id: 1, name: '妈妈', avatar: '妈', relation: '母亲', relationshipKey: 'mother', phone: '', role: 'member' },
        { id: 2, name: '爸爸', avatar: '爸', relation: '父亲', relationshipKey: 'father', phone: '', role: 'member' },
        { id: 3, name: '爷爷', avatar: '爷', relation: '父亲', relationshipKey: 'father', phone: '', role: 'member' },
        { id: 4, name: '奶奶', avatar: '奶', relation: '母亲', relationshipKey: 'mother', phone: '', role: 'member' },
      ]);
      return;
    }

    const familyId = FamilyManager.getCurrentFamilyId();
    if (!familyId) {
      Taro.showToast({ title: '请先选择家庭', icon: 'none' });
      return;
    }

    Taro.showLoading({ title: '加载中...', mask: true });

    familiesApi.getMembers(familyId).then((res) => {
      Taro.hideLoading();

      if (res.code === 0) {
        const rawMembers: FamilyMember[] = res.data || [];
        const formattedMembers: DisplayMember[] = rawMembers.map((member) => {
          const relationshipKey = member.relationship || 'member';
          const relationCn = relationMap[relationshipKey] || '成员';

          const memberNickname = member.nickname || (member as any).user?.nickname || '';
          const memberPhone = member.phone || (member as any).user?.phone || '';
          const displayName = safeName(memberNickname || (memberPhone ? memberPhone.slice(-4) + '用户' : member.relationship));
          let avatarText = '用';
          if (relationCn && relationCn.length > 0) {
            avatarText = relationCn.charAt(0);
          } else if (displayName && displayName !== '未设置昵称') {
            avatarText = displayName.charAt(0);
          }

          const rawAvatarPath = member.avatarUrl || (member as any).avatar || (member as any).user?.avatarUrl || '';
          const serverBaseUrl = API_BASE_URL.replace('/api', '');
          let avatarUrl = '';
          if (rawAvatarPath) {
            if (rawAvatarPath.startsWith('/uploads/') || rawAvatarPath.startsWith('uploads/')) {
              const path = rawAvatarPath.startsWith('/') ? rawAvatarPath : '/' + rawAvatarPath;
              avatarUrl = serverBaseUrl + path;
            } else if (!rawAvatarPath.startsWith('http://') && !rawAvatarPath.startsWith('https://')) {
              avatarUrl = serverBaseUrl + '/' + rawAvatarPath;
            } else {
              avatarUrl = rawAvatarPath;
            }
          }
          const avatar = avatarUrl || avatarText;

          return {
            id: member.userId,
            name: displayName,
            avatar,
            relation: relationCn,
            relationshipKey,
            phone: member.phone || (member as any).user?.phone || '',
            role: member.role,
          };
        });

        setMembers(formattedMembers);
      }
    }).catch(() => {
      Taro.hideLoading();
      Taro.showToast({ title: '加载失败', icon: 'none' });
    });
  }, []);

  const onAddMember = () => {
    const state = useUserStore.getState();
    if (state.isGuestMode) {
      Taro.showModal({
        title: '登录提示',
        content: '需要登录才能添加家庭成员',
        showCancel: true,
        confirmText: '去登录',
        success: (res) => {
          if (res.confirm) {
            Taro.navigateTo({ url: '/pages/login/login' });
          }
        },
      });
      return;
    }

    if (!isAdmin) {
      Taro.showToast({ title: '仅管理员可操作', icon: 'none' });
      return;
    }

    setShowAddDialog(true);
    setEditingMember(null);
    setFormData({ phone: '', relationship: '本人' });
  };

  const onEditMember = (member: DisplayMember) => {
    const state = useUserStore.getState();
    if (state.isGuestMode) {
      Taro.showModal({
        title: '登录提示',
        content: '需要登录才能编辑家庭成员',
        showCancel: true,
        confirmText: '去登录',
        success: (res) => {
          if (res.confirm) {
            Taro.navigateTo({ url: '/pages/login/login' });
          }
        },
      });
      return;
    }

    if (!isAdmin) {
      Taro.showToast({ title: '仅管理员可操作', icon: 'none' });
      return;
    }

    setEditingMember(member);
    setShowAddDialog(true);
    setFormData({
      phone: member.phone || '',
      relationship: member.relation || '本人',
    });
  };

  const onDeleteMember = (member: DisplayMember) => {
    const state = useUserStore.getState();
    if (state.isGuestMode) {
      Taro.showModal({
        title: '登录提示',
        content: '需要登录才能删除家庭成员',
        showCancel: true,
        confirmText: '去登录',
        success: (res) => {
          if (res.confirm) {
            Taro.navigateTo({ url: '/pages/login/login' });
          }
        },
      });
      return;
    }

    if (!isAdmin) {
      Taro.showToast({ title: '仅管理员可操作', icon: 'none' });
      return;
    }

    const familyId = FamilyManager.getCurrentFamilyId();

    Taro.showModal({
      title: '确认移除',
      content: `确定要移除"${member.name}"吗？`,
      confirmText: '移除',
      confirmColor: '#e74c3c',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          familiesApi.removeMember(familyId, String(member.id)).then(() => {
            Taro.showToast({ title: '移除成功', icon: 'success' });
            loadMembers();
          }).catch((error: any) => {
            Taro.showToast({ title: error.message || '移除失败', icon: 'none' });
          });
        }
      },
    });
  };

  const onPhoneInput = (e: any) => {
    let val = '';
    if (e && e.detail) {
      if (e.detail.value !== undefined) {
        val = e.detail.value;
      } else if (e.detail !== undefined) {
        val = e.detail;
      }
    }
    setFormData((prev) => ({ ...prev, phone: val }));
  };

  const showRelationPickerFn = () => {
    setShowRelationPicker(true);
    setSelectedRelation(formData.relationship);
  };

  const onCloseRelationPicker = () => {
    setShowRelationPicker(false);
  };

  const onRelationItemClick = (value: string) => {
    setSelectedRelation(value);
  };

  const onRelationConfirm = () => {
    if (selectedRelation) {
      setFormData((prev) => ({ ...prev, relationship: selectedRelation }));
      setShowRelationPicker(false);
    }
  };

  const onSubmit = () => {
    const { phone, relationship } = formData;
    const familyId = FamilyManager.getCurrentFamilyId();
    const relationshipEn = fullRelationMapReverse[relationship] || relationship;

    // Edit mode: only change relationship
    if (editingMember) {
      Taro.showLoading({ title: '保存中...', mask: true });

      familiesApi.updateMemberRelationship(familyId, String(editingMember.id), relationshipEn)
        .then(() => {
          Taro.hideLoading();
          Taro.showToast({ title: '修改成功', icon: 'success' });
          onCloseDialog();
          loadMembers();
        })
        .catch((error: any) => {
          Taro.hideLoading();
          Taro.showToast({ title: error.message || '修改失败', icon: 'none' });
        });
      return;
    }

    // Add mode
    if (!phone.trim()) {
      Taro.showToast({ title: '请输入手机号', icon: 'none' });
      return;
    }

    const phoneRegex = /^1[3-9]\d{9}$/;
    if (!phoneRegex.test(phone.trim())) {
      Taro.showToast({ title: '手机号格式不正确', icon: 'none' });
      return;
    }

    Taro.showLoading({ title: '添加中...', mask: true });

    familiesApi.addMemberByPhone(familyId, phone.trim(), relationshipEn)
      .then(() => {
        Taro.hideLoading();
        Taro.showToast({ title: '添加成功', icon: 'success' });
        onCloseDialog();
        loadMembers();
      })
      .catch((error: any) => {
        Taro.hideLoading();

        const rawMessage =
          (error && error.message) ||
          (error && error.data && error.data.message) ||
          '';

        let friendlyMessage = '添加失败：请确认该手机号已在本小程序注册，且该成员在当前家庭中没有重复的关系。';

        if (/未注册/.test(rawMessage) || /not\s*registered/i.test(rawMessage) || error.code === 'USER_NOT_REGISTERED') {
          friendlyMessage = '该手机号对应的用户尚未注册，请提醒对方先在小程序完成注册';
        }

        if (/关系已存在/.test(rawMessage) || /已加入该家庭/.test(rawMessage) || /already\s*exists/i.test(rawMessage) || error.code === 'RELATIONSHIP_EXISTS') {
          friendlyMessage = '该成员在当前家庭中已存在该关系，请确认是否重复添加';
        }

        Taro.showToast({ title: friendlyMessage, icon: 'none', duration: 3000 });
      });
  };

  const onCloseDialog = () => {
    setShowAddDialog(false);
    setEditingMember(null);
    setShowRelationPicker(false);
    setFormData({ phone: '', relationship: '本人' });
  };

  return (
    <View
      className="family-container"
      style={{ paddingTop: `calc(${statusBarHeight}px + 44px + 32rpx)` }}
    >
      <NavBar title="家庭成员" showBack />
      <ScrollView className="member-list" scrollY>
        {members.map((item) => (
          <View
            key={item.id}
            className="member-item"
            onClick={isAdmin ? () => onEditMember(item) : undefined}
          >
            <View className="member-avatar">
              <View className="avatar-container">
                {!item.avatar || (item.avatar.length === 1 && /[一-龥]/.test(item.avatar)) ? (
                  <View className="avatar-text">{item.avatar}</View>
                ) : item.avatar.startsWith('http') || item.avatar.startsWith('/') ? (
                  <Image className="avatar-image" src={item.avatar} mode="aspectFill" />
                ) : (
                  <View className="avatar-text">{item.avatar}</View>
                )}
              </View>
            </View>

            <View className="member-info">
              <View className="member-name">{item.name}</View>
              <View className="member-relation">{item.relation}</View>
              {item.phone && <View className="member-phone">{item.phone}</View>}
            </View>

            {isAdmin && (
              <View className="member-actions">
                <View
                  className="action-btn edit-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onEditMember(item);
                  }}
                >
                  <Text className="action-icon">✏️</Text>
                </View>
                <View
                  className="action-btn delete-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteMember(item);
                  }}
                >
                  <Text className="action-icon">🗑️</Text>
                </View>
              </View>
            )}
          </View>
        ))}

        {members.length === 0 && (
          <View className="empty-state">
            <Text>暂无家庭成员</Text>
          </View>
        )}
      </ScrollView>

      {isAdmin && (
        <View className="add-button">
          <Button onClick={onAddMember}>+ 添加成员</Button>
        </View>
      )}

      {/* Add/Edit Dialog */}
      {showAddDialog && (
        <View className="dialog-overlay" onClick={onCloseDialog}>
          <View className="dialog-panel" onClick={(e) => e.stopPropagation()}>
            <View className="dialog-header">
              <Text className="dialog-title">{editingMember ? '编辑成员' : '添加成员'}</Text>
            </View>

            <View className="dialog-content">
              <View className="dialog-body">
                {!editingMember && (
                  <View className="dialog-field">
                    <Text className="dialog-label">手机号</Text>
                    <Input
                      className="dialog-input"
                      type="number"
                      placeholder="请输入对方手机号"
                      value={formData.phone}
                      onInput={onPhoneInput}
                    />
                  </View>
                )}

                {editingMember && (
                  <View className="dialog-field">
                    <Text className="dialog-label">手机号</Text>
                    <Input
                      className="dialog-input disabled"
                      value={formData.phone}
                      disabled
                    />
                  </View>
                )}

                <View className="dialog-field" onClick={showRelationPickerFn}>
                  <Text className="dialog-label">关系</Text>
                  <View className="dialog-input picker-value">
                    <Text>{formData.relationship || '请选择关系'}</Text>
                    <Text className="picker-arrow">></Text>
                  </View>
                </View>

                {!editingMember && (
                  <View className="dialog-tips">
                    <Text>添加已注册用户，对方将自动加入该家庭</Text>
                  </View>
                )}
              </View>
            </View>

            <View className="dialog-footer">
              <Button className="dialog-btn cancel-btn" onClick={onCloseDialog}>取消</Button>
              <Button className="dialog-btn confirm-btn" onClick={onSubmit}>保存</Button>
            </View>
          </View>
        </View>
      )}

      {/* Relation Picker */}
      {showRelationPicker && (
        <View className="dialog-overlay" onClick={onCloseRelationPicker}>
          <View
            className="picker-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <View className="picker-header">
              <Text className="picker-cancel" onClick={onCloseRelationPicker}>取消</Text>
              <Text className="picker-title">选择关系</Text>
              <Text className="picker-confirm" onClick={onRelationConfirm}>确认</Text>
            </View>
            <View className="picker-content">
              {relationOptions.map((item) => (
                <View
                  key={item.value}
                  className={`picker-item ${selectedRelation === item.value ? 'selected' : ''}`}
                  onClick={() => onRelationItemClick(item.value)}
                >
                  <Text className="picker-item-text">{item.text}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default Family;
