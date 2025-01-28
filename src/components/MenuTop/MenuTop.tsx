import styles from './menuTop.module.scss';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import ToolsMenu from './ToolsMenu/ToolsMenu';

const MenuTop = () => {
  return (
    <div className={styles.menuTop}>
      <HamburgerMenu />
      <ToolsMenu />
    </div>
  );
};

export default MenuTop;
