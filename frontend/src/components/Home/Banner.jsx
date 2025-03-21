import styles from "./Banner.module.scss";
import phone from "../../assets/hero_endframe__cvklg0xk3w6e_large 2.png";
import applePhone from "../../assets/1200px-Apple_gray_logo 1.png";
import { FaArrowRightLong } from "react-icons/fa6";
import JBL from "../../assets/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png";
import { useState, useEffect } from "react";

const Banner = ({ heading, title }) => {
  // Countdown Timer State
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 23,
    minutes: 59,
    seconds: 35,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.banner}>
      {heading === "Categories" ? (
        <div className={styles.categoriesContent}>
          <h3 className={styles.categoryHeading}>Categories</h3>
          <h1>Enhance Your Music Experience</h1>
          {/* Countdown Timer */}
          <div className={styles.timer}>
            <div>
              <p>{String(timeLeft.hours).padStart(2, "0")}</p>
              <span>Hours</span>
            </div>
            <div>
              <p>{String(timeLeft.days).padStart(2, "0")}</p>
              <span>Days</span>
            </div>
            <div>
              <p>{String(timeLeft.minutes).padStart(2, "0")}</p>
              <span>Minutes</span>
            </div>
            <div>
              <p>{String(timeLeft.seconds).padStart(2, "0")}</p>
              <span>Seconds</span>
            </div>
          </div>

          {/* Buy Now Button */}
          <button className={styles.buyNowBtn}>Buy Now!</button>
        </div>
      ) : (
        <div className={styles.content}>
          <div className={styles.text}>
            <img
              src={applePhone}
              alt="Music Speaker"
              className={styles.bannerImage}
            />
            <h3>I Phone 14 Series</h3>
          </div>
          <h1>Up to 10% off Voucher</h1>
          <div className={styles.buttons}>
            <button className={styles.shopBtn}>
              Shop Now <FaArrowRightLong />
            </button>
            <div className={styles.icons}>
              <i className="fa-brands fa-apple"></i>
              <i className="fa-brands fa-android"></i>
            </div>
          </div>
        </div>
      )}

      <div className={styles.imageContainer}>
        <img
          src={heading === "Categories" ? JBL : phone}
          alt="Music Speaker"
          className={styles.bannerImage}
        />
      </div>
    </div>
  );
};

export default Banner;
