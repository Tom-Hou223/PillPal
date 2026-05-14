import { useState, useEffect, useCallback } from 'react';
import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.scss';

export interface MemberItem {
  id: number;
  name: string;
  role?: string;
}

interface MemberSelectorProps {
  members: MemberItem[];
  selectedId?: number | null;
  isAdmin?: boolean;
  selectedRole?: string;
  onChange?: (data: { memberId: number; memberName: string }) => void;
}

interface MemberListItem extends MemberItem {
  isSelected: boolean;
}

export default function MemberSelector({
  members = [],
  selectedId = null,
  isAdmin = false,
  selectedRole = '',
  onChange,
}: MemberSelectorProps) {
  const [showSelector, setShowSelector] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const [roleTagText, setRoleTagText] = useState('成员');
  const [roleTagType, setRoleTagType] = useState('default');
  const [memberList, setMemberList] = useState<MemberListItem[]>([]);

  const refreshMembers = useCallback(() => {
    if (!members || members.length === 0) {
      setMemberList([]);
      return;
    }
    const selId = selectedId != null ? String(selectedId) : '';
    const list: MemberListItem[] = members.map((m) => ({
      id: m.id,
      name: m.name,
      role: m.role || 'member',
      isSelected: selId !== '' && String(m.id) === selId,
    }));
    setMemberList(list);
  }, [members, selectedId]);

  const updateDisplayName = useCallback(() => {
    const membersList = members || [];
    if (selectedId == null || selectedId === '') {
      const first = membersList[0];
      setDisplayName(first ? first.name : '');
    } else {
      const found = membersList.find(
        (m) => String(m.id) === String(selectedId)
      );
      setDisplayName(found ? found.name : '');
    }
  }, [members, selectedId]);

  const updateRoleTag = useCallback(() => {
    if (selectedId == null || selectedId === '') {
      const membersList = members || [];
      const first = membersList[0];
      const firstRole = first ? first.role : '';
      setRoleTagText(firstRole === 'admin' ? '管理员' : '成员');
      setRoleTagType(firstRole === 'admin' ? 'success' : 'default');
    } else {
      const isSelectedAdmin = selectedRole === 'admin';
      setRoleTagText(isSelectedAdmin ? '管理员' : '成员');
      setRoleTagType(isSelectedAdmin ? 'success' : 'default');
    }
  }, [members, selectedId, selectedRole]);

  useEffect(() => {
    refreshMembers();
    updateDisplayName();
    updateRoleTag();
  }, [refreshMembers, updateDisplayName, updateRoleTag]);

  const onToggleSelector = () => {
    if (!isAdmin) return;
    setShowSelector(!showSelector);
  };

  const onCloseSelector = () => {
    setShowSelector(false);
  };

  const onSelectMember = (member: MemberListItem) => {
    const newList = memberList.map((m) => ({
      ...m,
      isSelected: String(m.id) === String(member.id),
    }));
    setDisplayName(member.name);
    setShowSelector(false);
    setMemberList(newList);
    onChange?.({ memberId: member.id, memberName: member.name });
  };

  return (
    <View className="member-selector-wrapper">
      <View
        className={`member-selector-card ${isAdmin ? 'clickable' : ''}`}
        onClick={onToggleSelector}
      >
        <View className="selector-header">
          <Text className="selector-title">查看成员</Text>
          <View className="selector-icon user-icon" />
        </View>
        <View className="selector-body">
          <View className="selector-display">
            <Text className="selector-name">{displayName}</Text>
            {isAdmin && (
              <View className="selector-icon arrow-down" />
            )}
          </View>
          {isAdmin && (
            <View className={`role-tag role-tag--${roleTagType}`}>
              <Text className="role-tag-text">{roleTagText}</Text>
            </View>
          )}
        </View>
      </View>

      {showSelector && (
        <View className="selector-overlay" onClick={onCloseSelector}>
          <View
            className="selector-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <View className="popup-header">
              <Text className="popup-title">选择查看成员</Text>
              <Text className="popup-close" onClick={onCloseSelector}>
                ✕
              </Text>
            </View>

            <View className="popup-list">
              {memberList.map((item) => (
                <View
                  key={item.id}
                  className={`member-item ${item.isSelected ? 'selected' : 'unselected'}`}
                  onClick={() => onSelectMember(item)}
                >
                  <View className="member-item-left">
                    <View
                      className={`selector-icon-small ${item.isSelected ? 'icon-selected' : 'icon-unselected'}`}
                    />
                    <Text className="member-item-name">{item.name}</Text>
                  </View>
                  {item.isSelected && (
                    <View className="selector-icon-small icon-success" />
                  )}
                </View>
              ))}
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
