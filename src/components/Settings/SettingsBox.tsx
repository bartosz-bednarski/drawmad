import React from 'react';
import useStores from 'store/useStores';
import styles from './settingsBox.module.scss';
import {observer} from 'mobx-react';
import BgColorSet from './Sets/BgColorSet';
import TextSet from './Sets/TextSet';
import ImageSet from './Sets/ImageSet';

const SETTINGS_SETS = [
  {type: 'bgColor', component: <BgColorSet />},
  {type: 'text', component: <TextSet />},
  {type: 'image', component: <ImageSet />},
];

const SettingsBox = () => {
  const {canvasStore} = useStores();

  if (!canvasStore.settingsSet) return null;

  const setToDisplay = SETTINGS_SETS.map((set, index) => {
    if (set.type !== canvasStore.settingsSet) return null;
    return <React.Fragment key={index}>{set.component}</React.Fragment>;
  });

  return <div className={styles.box}  data-testid="settings-box">{setToDisplay}</div>;
};

export default observer(SettingsBox);
