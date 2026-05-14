import { View, Image, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useUserStore } from '../stores/user.store';
import './index.scss';

const normalList = [
  { pagePath: '/pages/index/index', text: '首页', icon: '/assets/images/tab/tab_home_normal.png', activeIcon: '/assets/images/tab/tab_home_active.png' },
  { pagePath: '/pages/plan/plan', text: '计划', icon: '/assets/images/tab/tab_plan_normal.png', activeIcon: '/assets/images/tab/tab_plan_active.png' },
  { pagePath: '/pages/medicine/medicine', text: '药品库', icon: '/assets/images/tab/tab_med_normal.png', activeIcon: '/assets/images/tab/tab_med_active.png' },
  { pagePath: '/pages/mine/mine', text: '我的', icon: '/assets/images/tab/tab_mine_normal.png', activeIcon: '/assets/images/tab/tab_mine_active.png' },
];

const seniorList = [
  { pagePath: '/pages/index/index', text: '首页', icon: '/assets/images/tab/tab_home_normal.png', activeIcon: '/assets/images/tab/tab_home_active.png' },
  { pagePath: '/pages/mine/mine', text: '我的', icon: '/assets/images/tab/tab_mine_normal.png', activeIcon: '/assets/images/tab/tab_mine_active.png' },
];

export default function CustomTabBar() {
  const { isSeniorMode, seniorTheme } = useUserStore();

  const list = isSeniorMode ? seniorList : normalList;
  const currentPage = Taro.getCurrentInstance().router?.path || '';

  const getSelected = () => {
    if (isSeniorMode) {
      return currentPage.includes('pages/mine/mine') ? 1 : 0;
    }
    if (currentPage.includes('pages/index/index')) return 0;
    if (currentPage.includes('pages/plan/plan')) return 1;
    if (currentPage.includes('pages/medicine/medicine')) return 2;
    if (currentPage.includes('pages/mine/mine')) return 3;
    return 0;
  };

  const selected = getSelected();

  const switchTab = (path: string) => {
    Taro.switchTab({ url: path });
  };

  const cls = isSeniorMode
    ? `tab-bar senior-mode ${seniorTheme === 'yellow' ? 'theme-yellow' : ''}`
    : 'tab-bar';

  return (
    <View className={cls}>
      {list.map((item, index) => (
        <View
          key={item.text}
          className={`tab-bar-item ${selected === index ? 'active' : ''}`}
          onClick={() => switchTab(item.pagePath)}
        >
          <Image
            className='tab-icon'
            src={selected === index ? item.activeIcon : item.icon}
          />
          <Text className='tab-text'>{item.text}</Text>
        </View>
      ))}
    </View>
  );
}
