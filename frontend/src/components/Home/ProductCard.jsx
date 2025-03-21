import { FaHeart, FaEye } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {


  return (
    <div className={styles.card}>
   
      {/* Image Section */}
      <div className={styles.imageContainer}>
           {/* Discount Badge */}
      {product.price && (
        <span className={styles.discountBadge}>-{product.price}%</span>
      )}

        <img src={product?.imageUrl} alt={product?.title} />
        <div className={styles.actions}>
          <button className={styles.iconBtn}>
            <FaHeart />
          </button>
          <button className={styles.iconBtn}>
            <FaEye />
          </button>
        </div>
        <button className={styles.addtocart}>Add To Cart</button>
      </div>

      {/* Product Info */}
      <div className={styles.info}>
        <h3>{product.title}</h3>
        <div className={styles?.price}>
          <span className={styles.salePrice}>
            ${product.price - product.price * 0.4}
          </span>
          <span className={styles.originalPrice}>${product.price}</span>
        </div>

        {/* Rating Section */}
        <div className={styles.rating}>
          {[...Array(5)].map((_, i) => (
            <AiFillStar key={i} color="#f39c12" />
          ))}
          <span className={styles.reviews}>({product.price - product.price*0.5})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
