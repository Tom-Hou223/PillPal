import { Component, PropsWithChildren } from 'react';
import { useUserStore } from './stores/user.store';
import { connectSocket, disconnectSocket } from './services/socket';
import './app.scss';

class App extends Component<PropsWithChildren> {
  componentDidMount() {
    const { loadFromStorage, isLoggedIn } = useUserStore.getState();
    loadFromStorage();

    // 如果已登录，连接WebSocket
    useUserStore.subscribe((state) => {
      if (state.isLoggedIn && state.currentFamily) {
        connectSocket();
      } else {
        disconnectSocket();
      }
    });

    if (isLoggedIn) {
      connectSocket();
    }
  }

  componentWillUnmount() {
    disconnectSocket();
  }

  render() {
    return this.props.children;
  }
}

export default App;
