import React, { useState, useEffect, useCallback } from 'react';
import Taro from '@tarojs/taro';
import { View, Text, Image, Button, ScrollView } from '@tarojs/components';
import { familiesApi, FamilyManager, API_BASE_URL } from '../../services/api';
import { useUserStore } from '../../stores/user.store';
import { safeName } from '../../utils/date';
import type { FamilyMember } from '../../types/api';
import NavBar from '../../components/nav-bar';
import './family-manage.scss';

interface MemberDisplay {
  userId: number;
  nickname: string;
  avatarUrl: string;
  role: string;
  formattedJoinTime: string;
}

const FamilyManage: React.FC = () => {
  const { currentFamily, setCurrentFamily } = useUserStore();

  const [family, setFamily] = useState<any>(null);
  const [members, setMembers] = useState<MemberDisplay[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showInviteDialog, setShowInviteDialog] = useState(false);
  const [inviteCode, setInviteCode] = useState('');
  const [inviteCodeExpiresAt, setInviteCodeExpiresAt] = useState('');
  const [statusBarHeight, setStatusBarHeight] = useState(0);

  const formatDateTime = (dateStr: string): string => {
    if (!dateStr) return '';
    try {
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) return '';
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    } catch {
      return '';
    }
  };

  useEffect(() => {
    Taro.getSystemInfo({
      success: (res) => {
        setStatusBarHeight(res.statusBarHeight || 0);
      },
    });

    const fam = FamilyManager.getCurrentFamily();
    if (!fam || !fam.id) {
      Taro.showToast({ title: '请先选择家庭', icon: 'none' });
      setTimeout(() => {
        Taro.navigateBack();
      }, 1500);
      return;
    }

    setFamily(fam);
    setIsAdmin(fam.role === 'admin');
    loadFamilyDetail();
    loadMembers();
  }, []);

  const loadFamilyDetail = useCallback(async () => {
    const fam = FamilyManager.getCurrentFamily();
    if (!fam || !fam.id) return;

    try {
      const res = await familiesApi.getDetail(String(fam.id));
      if (res.code === 0) {
        const detail = res.data;
        setFamily((prev: any) => ({ ...prev, ...detail }));
        setInviteCode(detail.inviteCode || '');
        setInviteCodeExpiresAt(detail.inviteCodeExpiresAt || '');
      }
    } catch {
      Taro.showToast({ title: '加载家庭详情失败', icon: 'none' });
    }
  }, []);

  const loadMembers = useCallback(async () => {
    setLoading(true);
    const fam = FamilyManager.getCurrentFamily();
    if (!fam || !fam.id) {
      setLoading(false);
      return;
    }

    try {
      const res = await familiesApi.getMembers(String(fam.id));
      if (res.code === 0) {
        const rawMembers: FamilyMember[] = Array.isArray(res.data) ? res.data : [];
        const processedMembers: MemberDisplay[] = rawMembers
          .filter(Boolean)
          .map((member) => {
            const memberNickname = member.nickname || (member as any).user?.nickname || '';
            const memberPhone = member.phone || (member as any).user?.phone || '';
            const displayName = safeName(memberNickname || (memberPhone ? memberPhone.slice(-4) + '用户' : member.relationship), '未知');
            let avatarUrl = member.avatarUrl || (member as any).user?.avatarUrl || '';
            if (avatarUrl) {
              const serverBaseUrl = API_BASE_URL.replace('/api', '');
              if (avatarUrl.startsWith('/uploads/') || avatarUrl.startsWith('uploads/')) {
                avatarUrl = avatarUrl.startsWith('/') ? avatarUrl : '/' + avatarUrl;
                avatarUrl = serverBaseUrl + avatarUrl;
              } else if (!avatarUrl.startsWith('http://') && !avatarUrl.startsWith('https://')) {
                avatarUrl = serverBaseUrl + '/' + avatarUrl;
              }
            }
            return {
              userId: member.userId,
              nickname: displayName,
              avatarUrl,
              role: member.role,
              formattedJoinTime: formatDateTime(member.joinedAt || ''),
            };
          });
        setMembers(processedMembers);
      }
    } catch {
      Taro.showToast({ title: '加载失败', icon: 'none' });
    }
    setLoading(false);
  }, []);

  const showInviteDialogFn = () => {
    if (!isAdmin) {
      Taro.showToast({ title: '仅管理员可操作', icon: 'none' });
      return;
    }
    setShowInviteDialog(true);
  };

  const hideInviteDialog = () => {
    setShowInviteDialog(false);
  };

  const onGenerateInviteCode = async () => {
    const fam = FamilyManager.getCurrentFamily();
    if (!fam || !fam.id) return;

    Taro.showLoading({ title: '生成中...', mask: true });

    try {
      const res = await familiesApi.generateInviteCode(String(fam.id));
      Taro.hideLoading();

      if (res.code === 0) {
        const result: any = res.data;
        setInviteCode(result.inviteCode || result.invite_code || '');
        setInviteCodeExpiresAt(result.expiresAt || result.expires_at || '');
        Taro.showToast({ title: '生成成功', icon: 'success' });
      }
    } catch (error: any) {
      Taro.hideLoading();
      Taro.showToast({ title: error.message || '生成失败', icon: 'none' });
    }
  };

  const onCopyInviteCode = () => {
    Taro.setClipboardData({
      data: inviteCode,
      success: () => {
        Taro.showToast({ title: '已复制', icon: 'success' });
      },
    });
  };

  const onMemberTap = (member: MemberDisplay) => {
    if (!isAdmin) return;

    const fam = FamilyManager.getCurrentFamily();
    if (fam && fam.creatorId && member.userId === fam.creatorId) {
      Taro.showToast({ title: '不能操作创建者', icon: 'none' });
      return;
    }

    const actions = [
      member.role === 'admin' ? '设为普通成员' : '设为管理员',
      '移除成员',
    ];

    Taro.showActionSheet({
      itemList: actions,
      success: (res) => {
        if (res.tapIndex === 0) {
          changeMemberRole(member);
        } else if (res.tapIndex === 1) {
          removeMember(member);
        }
      },
    });
  };

  const changeMemberRole = async (member: MemberDisplay) => {
    const newRole = member.role === 'admin' ? 'member' : 'admin';
    const fam = FamilyManager.getCurrentFamily();
    if (!fam || !fam.id) return;

    Taro.showLoading({ title: '修改中...', mask: true });

    try {
      await familiesApi.updateMemberRole(String(fam.id), String(member.userId), newRole);
      Taro.hideLoading();
      Taro.showToast({ title: '修改成功', icon: 'success' });
      loadMembers();
    } catch (error: any) {
      Taro.hideLoading();
      Taro.showToast({ title: error.message || '修改失败', icon: 'none' });
    }
  };

  const removeMember = (member: MemberDisplay) => {
    const fam = FamilyManager.getCurrentFamily();
    if (!fam || !fam.id) return;

    Taro.showModal({
      title: '确认移除',
      content: `确定要移除成员"${member.nickname}"吗？`,
      success: async (res) => {
        if (res.confirm) {
          Taro.showLoading({ title: '移除中...', mask: true });

          try {
            await familiesApi.removeMember(String(fam.id), String(member.userId));
            Taro.hideLoading();
            Taro.showToast({ title: '移除成功', icon: 'success' });
            loadMembers();
          } catch (error: any) {
            Taro.hideLoading();
            Taro.showToast({ title: error.message || '移除失败', icon: 'none' });
          }
        }
      },
    });
  };

  const onLeaveFamily = () => {
    const fam = FamilyManager.getCurrentFamily();
    if (!fam || !fam.id) return;

    Taro.showModal({
      title: '确认退出',
      content: '退出后将无法访问该家庭的数据，确定要退出吗？',
      success: async (res) => {
        if (res.confirm) {
          Taro.showLoading({ title: '退出中...', mask: true });

          try {
            await familiesApi.leaveFamily(String(fam.id));
            Taro.hideLoading();
            Taro.showToast({ title: '已退出', icon: 'success' });

            setTimeout(() => {
              Taro.redirectTo({ url: '/pages/family-select/family-select' });
            }, 1500);
          } catch (error: any) {
            Taro.hideLoading();
            Taro.showToast({ title: error.message || '退出失败', icon: 'none' });
          }
        }
      },
    });
  };

  const onDeleteFamily = () => {
    const fam = FamilyManager.getCurrentFamily();
    if (!fam || !fam.id) return;

    Taro.showModal({
      title: '确认删除',
      content: '删除家庭后，所有成员将失去访问权限，家庭相关的药品、计划、记录等数据也将被删除，此操作不可恢复！',
      confirmText: '确认删除',
      confirmColor: '#e74c3c',
      success: async (res) => {
        if (res.confirm) {
          Taro.showLoading({ title: '删除中...', mask: true });

          try {
            await familiesApi.delete(String(fam.id));
            Taro.hideLoading();
            Taro.showToast({ title: '已删除', icon: 'success' });

            setTimeout(() => {
              Taro.redirectTo({ url: '/pages/family-select/family-select' });
            }, 1500);
          } catch (error: any) {
            Taro.hideLoading();
            Taro.showToast({ title: error.message || '删除失败', icon: 'none' });
          }
        }
      },
    });
  };

  const onSwitchFamily = () => {
    Taro.navigateTo({ url: '/pages/family-select/family-select' });
  };

  const onEditFamilyName = () => {
    if (!isAdmin) {
      Taro.showToast({ title: '仅管理员可操作', icon: 'none' });
      return;
    }

    Taro.showModal({
      title: '修改家庭名称',
      content: '',
      editable: true,
      placeholderText: '请输入新的家庭名称',
      success: async (res) => {
        if (res.confirm && res.content && res.content.trim()) {
          const newName = res.content.trim();
          const fam = FamilyManager.getCurrentFamily();
          if (!fam || !fam.id) return;

          if (newName === fam.name) return;

          Taro.showLoading({ title: '修改中...', mask: true });

          try {
            await familiesApi.update(String(fam.id), newName);
            Taro.hideLoading();
            Taro.showToast({ title: '修改成功', icon: 'success' });

            const updatedFamily = { ...family, name: newName };
            setFamily(updatedFamily);
            FamilyManager.setCurrentFamily(updatedFamily);
            setCurrentFamily(updatedFamily);
          } catch (error: any) {
            Taro.hideLoading();
            Taro.showToast({ title: error.message || '修改失败', icon: 'none' });
          }
        }
      },
    });
  };

  return (
    <View className="container" style={{ paddingTop: `calc(${statusBarHeight}px + 44px + 32rpx)` }}>
      <NavBar title="家庭管理" showBack />

      <View className="content">
        {/* Family info */}
        <View className="section">
          <View className="family-header">
            <Text className="family-name">{family ? `🏠${family.name}` : ''}</Text>
            {isAdmin && (
              <Text className="edit-icon" onClick={onEditFamilyName}>...</Text>
            )}
          </View>
        </View>

        {/* Invite code (admin only) */}
        {isAdmin && (
          <View className="section">
            <View className="section-title">邀请码</View>
            <View className="invite-card">
              {inviteCode ? (
                <View className="invite-content">
                  <View className="invite-code">{inviteCode}</View>
                  <View className="invite-tips">有效期至 {inviteCodeExpiresAt}</View>
                  <View className="invite-actions">
                    <Button size="mini" className="invite-btn primary" onClick={onCopyInviteCode}>
                      复制邀请码
                    </Button>
                    <Button size="mini" className="invite-btn plain" onClick={onGenerateInviteCode}>
                      重新生成
                    </Button>
                  </View>
                </View>
              ) : (
                <View className="invite-empty">
                  <Button className="invite-btn primary block" onClick={onGenerateInviteCode}>
                    生成邀请码
                  </Button>
                </View>
              )}
            </View>
          </View>
        )}

        {/* Members list */}
        <View className="section">
          <View className="section-title">
            <Text>成员列表</Text>
            <Text className="member-count">({members.length}人)</Text>
          </View>

          {loading ? (
            <View className="loading-container">
              <Text>加载中...</Text>
            </View>
          ) : (
            <View className="member-list">
              {members.map((member) => (
                <View key={member.userId} className="member-item">
                  <View className="member-avatar">
                    {member.avatarUrl ? (
                      <Image src={member.avatarUrl} mode="aspectFill" className="avatar-img" />
                    ) : (
                      <View className="avatar-placeholder">
                        {member.nickname ? member.nickname.substring(0, 1) : '?'}
                      </View>
                    )}
                  </View>
                  <View className="member-info">
                    <View className="member-top">
                      <Text className="member-name">{safeName(member.nickname)}</Text>
                      <Text
                        className={`role-tag ${member.role} ${isAdmin && family && family.creatorId && member.userId !== family.creatorId ? 'clickable' : ''}`}
                        onClick={() => onMemberTap(member)}
                      >
                        {member.role === 'admin' ? '管理员' : '成员'}
                      </Text>
                    </View>
                    <Text className="join-time">{member.formattedJoinTime}</Text>
                  </View>
                </View>
              ))}
            </View>
          )}
        </View>

        {/* Action buttons */}
        <View className="action-section">
          <Button className="action-btn-main" onClick={onSwitchFamily}>
            切换家庭
          </Button>
          {!isAdmin ? (
            <Button className="action-btn-danger" onClick={onLeaveFamily}>
              退出家庭
            </Button>
          ) : (
            <Button className="action-btn-danger" onClick={onDeleteFamily}>
              删除家庭
            </Button>
          )}
        </View>
      </View>
    </View>
  );
};

export default FamilyManage;
