import {useState} from 'react';
import styles from './hamburgerMenu.module.scss';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import {display} from './DropdownMenu/utils';
import hamburgerIcon from 'assets/icons/hamburgerIcon.svg';

const HamburgerMenu = () => {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  const showDropdownMenuHandler = () => {
    setShowDropdownMenu((state) => !state);
  };

  return (
    <div className={styles.hamburgerMenu}>
      <button className={styles.hamburgerBtn} onClick={showDropdownMenuHandler}>
        <img src={hamburgerIcon} alt="ikona hamburger menu" />
      </button>

      <DropdownMenu display={showDropdownMenu ? display.SHOW : display.HIDE} />
    </div>
  );
};

export default HamburgerMenu;
