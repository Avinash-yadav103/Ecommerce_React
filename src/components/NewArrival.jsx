import { Truck, HeadphonesIcon, ShieldCheck } from "lucide-react"
import styles from "./NewArrival.module.css"

function NewArrival() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <div className={styles.indicator}></div>
          <h2>Featured</h2>
        </div>
        <h1>New Arrival</h1>
      </div>

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
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1pYtj3AcKkZMOBnjDW5p4BbGVKlaSW.png"
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

      <div className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <Truck size={40} />
          </div>
          <h4>FREE AND FAST DELIVERY</h4>
          <p>Free delivery for all orders over $140</p>
        </div>

        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <HeadphonesIcon size={40} />
          </div>
          <h4>24/7 CUSTOMER SERVICE</h4>
          <p>Friendly 24/7 customer support</p>
        </div>

        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <ShieldCheck size={40} />
          </div>
          <h4>MONEY BACK GUARANTEE</h4>
          <p>We return money within 30 days</p>
        </div>
      </div>
    </section>
  )
}

export default NewArrival