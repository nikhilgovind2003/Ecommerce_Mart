import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/productSlice";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import styles from "./FlashSales.module.scss";  // Import SCSS styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";  // Navigation icons



// icons
import { IoIosPhonePortrait } from "react-icons/io";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera, CiHeadphones } from "react-icons/ci";
import { IoGameControllerOutline } from "react-icons/io5";


// Dummy categories (move it outside the component for better performance)
const categories = [
    { id: 1, name: "Phones", icon: <IoIosPhonePortrait /> },
    { id: 2, name: "Computers", icon: <HiOutlineComputerDesktop /> },
    { id: 3, name: "SmartWatch", icon: <BsSmartwatch /> },
    { id: 4, name: "Camera", icon: <CiCamera /> },
    { id: 5, name: "HeadPhones", icon: <CiHeadphones /> },
    { id: 6, name: "Gaming", icon: <IoGameControllerOutline /> },
];

const FlashSales = ({ heading, title }) => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);

    const sliderRef = useRef(null);  // Reference for slider navigation

    // Countdown Timer State
    const [timeLeft, setTimeLeft] = useState({
        days: 3,
        hours: 23,
        minutes: 19,
        seconds: 56,
    });

    useEffect(() => {
        dispatch(fetchProducts());

        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                const newTime = { ...prev };

                if (newTime.seconds > 0) {
                    newTime.seconds--;
                } else {
                    newTime.seconds = 59;
                    if (newTime.minutes > 0) {
                        newTime.minutes--;
                    } else {
                        newTime.minutes = 59;
                        if (newTime.hours > 0) {
                            newTime.hours--;
                        } else {
                            newTime.hours = 23;
                            if (newTime.days > 0) {
                                newTime.days--;
                            }
                        }
                    }
                }

                return newTime;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [dispatch]);

    if (loading) return <p>Loading flash sales...</p>;
    if (error) return <p>Error: {error}</p>;

    // Slider settings
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false, // Disable default arrows
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className={styles.sliderContainer}>

            {/* Section Header */}
            <div className={styles.head}>
                <div className={styles.headBlock}></div>
                <p>{heading}</p>
            </div>

            <div className={styles.header}>
                <div className={styles.leftHeader}>
                    <h2 className={styles.heading}>{title}</h2>

                    {/* Countdown Timer */}
                    {title === "Flash Sales" && (
                        <div className={styles.timer}>
                            <div>
                                <p>{String(timeLeft.days).padStart(2, "0")}</p>
                                <span>Days</span>
                            </div>
                            <span>:</span>
                            <div>
                                <p>{String(timeLeft.hours).padStart(2, "0")}</p>
                                <span>Hours</span>
                            </div>
                            <span>:</span>
                            <div>
                                <p>{String(timeLeft.minutes).padStart(2, "0")}</p>
                                <span>Minutes</span>
                            </div>
                            <span>:</span>
                            <div>
                                <p>{String(timeLeft.seconds).padStart(2, "0")}</p>
                                <span>Seconds</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Custom Navigation Buttons */}
                {title === "Best Selling Products" ? (
                    <div className={styles.viewAll}>
                        <button>View All Products</button>
                    </div>
                ) : (
                    <div className={styles.navButtons}>
                        <button
                            className={styles.prevButton}
                            onClick={() => sliderRef.current.slickPrev()}
                        >
                            <FaArrowLeft />
                        </button>

                        <button
                            className={styles.nextButton}
                            onClick={() => sliderRef.current.slickNext()}
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                )}
            </div>

            {/* Conditional Rendering */}
            {heading === "Categories" ? (
                <div className={styles.container}>
                    <div className={styles.categories}>
                        {categories.map((category) => (
                            <div key={category.id} className={styles.category}>
                                <div className={styles.icon}>{category.icon}</div>
                                <p>{category.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <>
                    {/* Product Slider */}
                    <Slider ref={sliderRef} {...settings}>
                        {products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </Slider>
                    {
                        title == "Explore Our Products" && (
                            <Slider ref={sliderRef} {...settings}>
                                {products.map((product) => (
                                    <ProductCard key={product._id} product={product} />
                                ))}
                            </Slider>
                        )
                    }


                    {/* View All Products Button */}
                    <div className={styles.viewAll}>
                        <button>View All Products</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default FlashSales;
