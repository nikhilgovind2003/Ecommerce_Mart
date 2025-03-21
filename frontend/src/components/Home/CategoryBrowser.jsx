import React, { useRef, useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./CategoryBrowser.module.scss";

const categories = [
    { id: 1, name: "Phones", icon: "📱" },
    { id: 2, name: "Computers", icon: "💻" },
    { id: 3, name: "SmartWatch", icon: "⌚" },
    { id: 4, name: "Camera", icon: "📷" },
    { id: 5, name: "HeadPhones", icon: "🎧" },
    { id: 6, name: "Gaming", icon: "🎮" },
];

const CategoryBrowser = () => {
    const [active, setActive] = useState(4); // Initially set to "Camera"
    const containerRef = useRef(null);

    const infiniteCategories = [...categories, ...categories];

    useEffect(() => {
        const container = containerRef.current;

        const scrollInterval = setInterval(() => {
            if (container) {
                container.scrollLeft += 2; // Smooth scrolling
                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft = 0; // Reset to create infinite effect
                }
            }
        }, 30);

        return () => clearInterval(scrollInterval);
    }, []);

    const handleScroll = (direction) => {
        const container = containerRef.current;
        const scrollAmount = 250;

        if (direction === "left") {
            container.scrollLeft -= scrollAmount;
        } else {
            container.scrollLeft += scrollAmount;
        }
    };

    return (
        <div className={styles.categoryBrowser}>
            {/* Header */}
            <div className={styles.header}>
                <div className={styles.title}>
                    <span className={styles.redBar}></span>
                    <p>Categories</p>
                </div>
                <h2>Browse By Category</h2>

                <div className={styles.navButtons}>
                    {/* Left Arrow */}
                    <button
                        className={`${styles.arrowBtn} ${styles.leftArrow}`}
                        onClick={() => handleScroll("left")}
                    >
                        <FaArrowLeft />
                    </button>
                    {/* Right Arrow */}
                    <button
                        className={`${styles.arrowBtn} ${styles.rightArrow}`}
                        onClick={() => handleScroll("right")}
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>

  
        </div>
    );
};

export default CategoryBrowser;
