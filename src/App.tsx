import {Provider} from 'mobx-react';
import styles from './App.module.scss';
import {MenuTop, CanvasMain} from './components';
import RootStore from 'store/RootStore';
import SettingsBox from 'components/Settings/SettingsBox';

const rootStore = new RootStore();

function App() {
  return (
    <Provider rootStore={rootStore} {...rootStore.getAllStores()}>
      <div className={styles.container}>
        <MenuTop />
        <CanvasMain />
        <SettingsBox />
      </div>
    </Provider>
  );
}

export default App;
