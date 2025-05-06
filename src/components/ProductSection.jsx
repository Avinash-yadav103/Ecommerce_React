import { Heart, Eye } from "lucide-react";
import styles from "./ProjectSection.module.css";

const products = [
  {
    id: 1,
    name: "The north coat",
    image: "/placeholder.svg",
    price: 260,
    originalPrice: 365,
    rating: 5,
    reviews: 65,
  },
  {
    id: 2,
    name: "Gucci duffle bag",
    image: "/placeholder.svg",
    price: 960,
    originalPrice: 1160,
    rating: 4,
    reviews: 65,
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    image: "/placeholder.svg",
    price: 160,
    originalPrice: 170,
    rating: 4,
    reviews: 65,
  },
  {
    id: 4,
    name: "Small BookSelf",
    image: "/placeholder.svg",
    price: 360,
    originalPrice: null,
    rating: 5,
    reviews: 65,
  },
];

export default function ProductSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <div className={styles.indicator}></div>
          <h2>This Month</h2>
        </div>
        <div className={styles.headerContent}>
          <h1>Best Selling Products</h1>
          <button className={styles.viewAll}>View All</button>
        </div>
      </div>

      <div className={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.imageContainer}>
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width="250"
                height="250"
                className={styles.productImage}
              />
              <div className={styles.overlay}>
                <button className={styles.wishlist}>
                  <Heart size={20} />
                </button>
                <button className={styles.quickView}>
                  <Eye size={20} />
                </button>
              </div>
            </div>
            <div className={styles.details}>
              <h3>{product.name}</h3>
              <div className={styles.pricing}>
                <span className={styles.price}>${product.price}</span>
                {product.originalPrice && (
                  <span className={styles.originalPrice}>${product.originalPrice}</span>
                )}
              </div>
              <div className={styles.rating}>
                {"★".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
                <span className={styles.reviews}>({product.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
