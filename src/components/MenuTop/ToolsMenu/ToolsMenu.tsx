import React from 'react';
import styles from './toolsMenu.module.scss';
import useStores from 'store/useStores';
import {CursorType, SettingsSetType} from 'store/CanvasStore';
import getToolsMenu from './utils/getToolsMenu';
import {observer} from 'mobx-react';

const ToolsMenu = () => {
  const {canvasStore} = useStores();

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    canvasStore.addImage(e);
  };

  const listItemOnClickHandler = (
    settingsSet: SettingsSetType,
    cursor: CursorType
  ) => {
    canvasStore.setSettingsSet(settingsSet);
    canvasStore.setCursor(cursor);
  };

  const undoFncHandler = () => {
    canvasStore.undoFnc();
  };

  const TOOLS_MENU = getToolsMenu({
    listItemOnClickHandler,
    handleImage,
    undoFncHandler,
  });

  return (
    <div className={styles.list}>
      {TOOLS_MENU.map((menuItem, index) => (
        <React.Fragment key={index}>{menuItem}</React.Fragment>
      ))}
    </div>
  );
};

export default observer(ToolsMenu);
