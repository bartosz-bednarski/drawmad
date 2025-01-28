import React from 'react';
import styles from './dropdownMenu.module.scss';
import {display} from './utils';
import getDropdownMenu from './utils/getDropdownMenu';
import {observer} from 'mobx-react';
import useStores from 'store/useStores';

interface DropdownMenuProps {
  display: display;
}

const DropdownMenu = ({display}: DropdownMenuProps) => {
  const {canvasStore} = useStores();

  const saveCanvasStateHandler = () => {
    canvasStore.saveCanvasState();
  };
  const loadCanvasStateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    canvasStore.loadCanvasState(e);
  };
  const DROPDOWN_LIST = getDropdownMenu({
    saveCanvasStateHandler,
    loadCanvasStateHandler,
  });
  return (
    <ul
      data-testid="dropdownMenu"
      className={styles.dropdownMenu}
      style={{display: display}}
    >
      {DROPDOWN_LIST.map((listItem, index) => (
        <React.Fragment key={index}>{listItem}</React.Fragment>
      ))}
    </ul>
  );
};

export default observer(DropdownMenu);
