import { Truck, HeadphonesIcon, ShieldCheck } from "lucide-react"
import styles from "./NewArrival.module.css"

function NewArrival() {
  return (
    <section className={styles.section}>
      {/* Section header */}
      
      <div className={styles.grid}>
        <div className={`${styles.gridItem} ${styles.playstation}`}>
          <div className={styles.content}>
            <h3>PlayStation 5</h3>
            <p>Black and White version of the PS5 coming out on sale.</p>
            <a href="#" className={styles.shopNow}>
              Shop Now
            </a>
          </div>
          <img
            src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3"
            alt="PlayStation 5 Black and White versions"
            className={styles.psImage}
          />
        </div>

        <div className={`${styles.gridItem} ${styles.women}`}>
          <div className={styles.content}>
            <h3>Women's Collections</h3>
            <p>Featured woman collections that give you another vibe.</p>
            <a href="#" className={styles.shopNow}>
              Shop Now
            </a>
          </div>
        </div>

        <div className={`${styles.gridItem} ${styles.speakers}`}>
          <div className={styles.content}>
            <h3>Speakers</h3>
            <p>Amazon wireless speakers</p>
            <a href="#" className={styles.shopNow}>
              Shop Now
            </a>
          </div>
        </div>

        <div className={`${styles.gridItem} ${styles.perfume}`}>
          <div className={styles.content}>
            <h3>Perfume</h3>
            <p>GUCCI INTENSE OUD EDP</p>
            <a href="#" className={styles.shopNow}>
              Shop Now
            </a>
          </div>
        </div>
      </div>
      
      {/* Features section */}
    </section>
  )
}

export default NewArrival