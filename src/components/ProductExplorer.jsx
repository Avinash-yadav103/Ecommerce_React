'use client'

import { useState } from 'react'
import { Heart, Eye, ChevronLeft, ChevronRight } from 'lucide-react'
import styles from './ProductExplorer.module.css'

const products = [
	{
		id: 1,
		name: 'Breed Dry Dog Food',
		price: 100,
		rating: 4,
		reviews: 35,
		image: 'https://images.unsplash.com/photo-1601758174114-e711c0cbaa69',
		isNew: false
	},
	{
		id: 2,
		name: 'CANON EOS 1500D DSR Camera',
		price: 360,
		rating: 5,
		reviews: 95,
		image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd',
		isNew: false
	},
	{
		id: 3,
		name: 'ASUS FHD Gaming Laptop',
		price: 700,
		rating: 4,
		reviews: 325,
		image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302',
		isNew: false
	},
	{
		id: 4,
		name: 'Curology Product Set',
		price: 500,
		rating: 4,
		reviews: 145,
		image: 'https://images.unsplash.com/photo-1556229010-aa3f7ff66b24',
		isNew: false
	},
	{
		id: 5,
		name: 'Kids Electric Car',
		price: 960,
		rating: 5,
		reviews: 65,
		image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f',
		isNew: true,
		colors: ['#FF0000', '#000000']
	},
	{
		id: 6,
		name: 'Jr. Zoom Soccer Cleats',
		price: 1160,
		rating: 5,
		reviews: 35,
		image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
		colors: ['#000000', '#FF0000']
	},
	{
		id: 7,
		name: 'GP11 Shooter USB Gamepad',
		price: 660,
		rating: 4,
		reviews: 55,
		image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb',
		colors: ['#006400', '#FF0000']
	},
	{
		id: 8,
		name: 'Quilted Satin Jacket',
		price: 660,
		rating: 4,
		reviews: 55,
		image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea',
		colors: ['#006400', '#FF0000']
	}
]
function ProductExplorer() {
	const [hoveredProduct, setHoveredProduct] = useState(null)

	return (
		<section className={styles.section}>
			<div className={styles.header}>
				<div className={styles.titleWrapper}>
					<div className={styles.indicator}></div>
					<h2>Our Products</h2>
				</div>
				<div className={styles.headerContent}>
					<h1>Explore Our Products</h1>
					<div className={styles.navigation}>
						<button className={styles.navButton}>
							<ChevronLeft size={24} />
						</button>
						<button className={styles.navButton}>
							<ChevronRight size={24} />
						</button>
					</div>
				</div>
			</div>

			<div className={styles.productGrid}>
				{products.map((product) => (
					<div
						key={product.id}
						className={`${styles.productCard} ${
							hoveredProduct === product.id ? styles.hovered : ''
						}`}
						onMouseEnter={() => setHoveredProduct(product.id)}
						onMouseLeave={() => setHoveredProduct(null)}
					>
						<div className={styles.imageContainer}>
							{product.isNew && <span className={styles.newTag}>New</span>}
							<div className={styles.overlay}>
								<button className={styles.wishlist}>
									<Heart size={20} />
								</button>
								<button className={styles.quickView}>
									<Eye size={20} />
								</button>
							</div>
							<img
								src={product.image || '/placeholder.svg'}
								alt={product.name}
								className={styles.productImage}
								loading="lazy"
								width="200"
								height="200"
							/>
						</div>
						<div className={styles.details}>
							<h3>{product.name}</h3>
							<div className={styles.priceRating}>
								<span className={styles.price}>${product.price}</span>
								<div className={styles.rating}>
									{'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
									<span className={styles.reviews}>
										({product.reviews})
									</span>
								</div>
							</div>
							{product.colors && (
								<div className={styles.colors}>
									{product.colors.map((color, index) => (
										<button
											key={index}
											className={styles.colorOption}
											style={{ backgroundColor: color }}
											aria-label={`Select color ${color}`}
										/>
									))}
								</div>
							)}
						</div>
					</div>
				))}
			</div>

			<div className={styles.viewAllContainer}>
				<button className={styles.viewAll}>View All Products</button>
			</div>
		</section>
	)
}

export default ProductExplorer
