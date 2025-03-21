import { useState } from "react";
import styles from "./Navbar.module.scss";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { CiSearch, CiHeart } from "react-icons/ci";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.navbarContainer}>
      {/* Top Info Bar */}
      <div className={styles.infoBar}>
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className={styles.shopNow}>ShopNow</span>
        </p>
        <div className={styles.language}>
          <span>English</span>
          <FaAngleDown />
        </div>
      </div>

      {/* Main Navbar */}
      <div className={styles.navbar}>
        <div className={styles.logo}>Exclusive</div>

        {/* Menu Toggle Button */}
        <div className={styles.navbarRight}>


          <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>
          </ul>

          <div className={styles.searchCart}>
            <div className={styles.search}>
              <input type="text" placeholder="What are you looking for?" />
              <CiSearch className={styles.icon} />
            </div>

            <CiHeart className={styles.icon} />
            <HiOutlineShoppingCart className={styles.icon} />
          </div>

          <div className={styles.menuToggle} onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
