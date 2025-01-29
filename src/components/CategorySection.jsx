import { Smartphone, Monitor, Watch, Camera, Headphones, Gamepad, ChevronLeft, ChevronRight } from "lucide-react"
import styles from "./CategorySection.module.css"

const categories = [
  { icon: <Smartphone size={32} />, name: "Phones" },
  { icon: <Monitor size={32} />, name: "Computers" },
  { icon: <Watch size={32} />, name: "SmartWatch" },
  { icon: <Camera size={32} />, name: "Camera" },
  { icon: <Headphones size={32} />, name: "HeadPhones" },
  { icon: <Gamepad size={32} />, name: "Gaming" },
]

export default function CategorySection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <div className={styles.indicator}></div>
          <h2>Categories</h2>
        </div>
        <h1>Browse By Category</h1>
        <div className={styles.navigation}>
          <button className={styles.navButton}>
            <ChevronLeft size={24} />
          </button>
          <button className={styles.navButton}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className={styles.categoryGrid}>
        {categories.map((category, index) => (
          <div key={category.name} className={`${styles.categoryCard} ${index === 3 ? styles.active : ""}`}>
            <div className={styles.iconWrapper}>{category.icon}</div>
            <span>{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

