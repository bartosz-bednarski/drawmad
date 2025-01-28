import React from 'react';
import useStores from 'store/useStores';
import stylesSettings from '../settingsBox.module.scss';
import {FontSizeType, FontStyleType, FontWeightType} from 'store/CanvasStore';
import getTextSet from './utils/getTextSet';

const TextSet = () => {
  const {canvasStore} = useStores();

  const changeTextColorHandler = (color: string) => {
    canvasStore.changeTextColor(color);
  };

  const setColorInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    canvasStore.changeTextColor(e.target.value);
  };

  const setFontStyleHandler = (fontStyle: FontStyleType) => {
    canvasStore.changeFontStyle(fontStyle);
  };

  const setFontWeightHandler = (fontWeight: FontWeightType) => {
    canvasStore.changeFontWeight(fontWeight);
  };

  const setFontSizeHandler = (fontSize: FontSizeType) => {
    canvasStore.changeFontSize(fontSize);
  };

  const deleteActiveObjectHandler = () => {
    canvasStore.deleteActiveObject();
  };

  const TEXT_SET = getTextSet({
    changeTextColorHandler,
    setColorInputHandler,
    setFontStyleHandler,
    setFontWeightHandler,
    setFontSizeHandler,
    deleteActiveObjectHandler,
  });

  return (
    <div className={stylesSettings.box}>
      {TEXT_SET.map((set, index) => (
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

export default TextSet;
