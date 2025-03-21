import { useState } from "react";
import styles from "./SideBar.module.scss";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({
    women: false,
    men: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div className={styles.sidebar}>
      <ul className={styles.menu}>
        <li
          className={styles.menuItem}
          onClick={() => toggleMenu("women")}
        >
          Woman’s Fashion
          {openMenus.women ? <FaAngleDown /> : <FaAngleRight />}
        </li>
        {openMenus.women && (
          <ul className={styles.subMenu}>
            <li>Clothing</li>
            <li>Footwear</li>
            <li>Accessories</li>
          </ul>
        )}

        <li
          className={styles.menuItem}
          onClick={() => toggleMenu("men")}
        >
          Men’s Fashion
          {openMenus.men ? <FaAngleDown /> : <FaAngleRight />}
        </li>
        {openMenus.men && (
          <ul className={styles.subMenu}>
            <li>Clothing</li>
            <li>Footwear</li>
            <li>Accessories</li>
          </ul>
        )}

        <li className={styles.menuItem}>Electronics</li>
        <li className={styles.menuItem}>Home & Lifestyle</li>
        <li className={styles.menuItem}>Medicine</li>
        <li className={styles.menuItem}>Sports & Outdoor</li>
        <li className={styles.menuItem}>Baby’s & Toys</li>
        <li className={styles.menuItem}>Groceries & Pets</li>
        <li className={styles.menuItem}>Health & Beauty</li>
      </ul>
    </div>
  );
};

export default Sidebar;
