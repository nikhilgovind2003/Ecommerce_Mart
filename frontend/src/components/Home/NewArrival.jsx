import React from "react";
import styles from "./NewArrival.module.scss"; // Import SCSS for styling
import image1 from "../../assets/ps5-slim-goedkope-playstation_large 1.png"
import image2 from "../../assets/attractive-woman-wearing-hat-posing-black-background 1.png"
import image3 from "../../assets/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png"
import image4 from "../../assets/652e82cd70aa6522dd785109a455904c.png"
const NewArrival = () => {
    return (
        <div className={styles.newArrival}>
            
            {/* Section Header */}
            <div className={styles.header}>
                <span className={styles.featuredTag}>Featured</span>
                <h2>New Arrival</h2>
            </div>

            <div className={styles.gridContainer}>
                {/* Large PlayStation Card */}
                <div className={styles.largeCard}>
                    <img src={image1} alt="PlayStation 5" />
                    <div className={styles.cardContent}>
                        <h3>PlayStation 5</h3>
                        <p>Black and White version of the PS5 coming out on sale.</p>
                        <a href="#">Shop Now</a>
                    </div>
                </div>

                {/* Smaller Cards */}
                <div className={styles.smallCards}>
                    <div className={styles.card}>
                        <img src={image2} alt="Women's Collections" />
                        <div className={styles.cardContent}>
                            <h4>Women's Collections</h4>
                            <p>Featured women collections that give you another vibe.</p>
                            <a href="#">Shop Now</a>
                        </div>
                    </div>
                    <div className={styles.verysmallcontainer}>
                    </div>
                    <div className={styles.card}>
                        <img src={image3} alt="Speakers" />
                        <div className={styles.cardContent}>
                            <h4>Speakers</h4>
                            <p>Amazon wireless speakers</p>
                            <a href="#">Shop Now</a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src={image4} alt="Perfume" />
                        <div className={styles.cardContent}>
                            <h4>Perfume</h4>
                            <p>GUCCI INTENSE OUD EDP</p>
                            <a href="#">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArrival;
