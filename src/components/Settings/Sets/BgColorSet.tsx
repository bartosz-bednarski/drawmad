import React from 'react';
import stylesSettings from '../settingsBox.module.scss';
import {observer} from 'mobx-react';
import useStores from 'store/useStores';
import getBgColorSet from './utils/getBgColorSet';

const BgColorSet = () => {
  const {canvasStore} = useStores();

  const changeBgColorHandler = (color: string) => {
    canvasStore.changeCanvasBgColor(color);
  };

  const setColorInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    canvasStore.changeCanvasBgColor(e.target.value);
  };

  const BG_COLOR_SET = getBgColorSet({
    changeBgColorHandler,
    setColorInputHandler,
  });

  return (
    <div className={stylesSettings.box}>
      {BG_COLOR_SET.map((set, index) => (
        <React.Fragment key={index}>
          <label className={stylesSettings.title}>{set.label}</label>
          <div className={stylesSettings.rowBox}>
            {set.content.map((contentItem) => (
              <React.Fragment key={contentItem.key}>
                {contentItem}
              </React.Fragment>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default observer(BgColorSet);
