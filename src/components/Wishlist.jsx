import { Trash2, Eye, ShoppingCart, Star } from "lucide-react"
import "./Wishlist.css"
import Navigation from "./Navigation"

const wishlistItems = [
  {
    id: 1,
    name: "Gucci duffle bag",
    price: 960,
    originalPrice: 1160,
    discount: 35,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "RGB liquid CPU Cooler",
    price: 1960,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "GP11 Shooter USB Gamepad",
    price: 550,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Quilted Satin Jacket",
    price: 750,
    image: "/placeholder.svg?height=200&width=200",
  },
]

const recommendedItems = [
  {
    id: 5,
    name: "ASUS FHD Gaming Laptop",
    price: 960,
    originalPrice: 1160,
    discount: 35,
    rating: 5,
    reviews: 65,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 6,
    name: "IPS LCD Gaming Monitor",
    price: 1160,
    rating: 5,
    reviews: 65,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 7,
    name: "HAVIT HV-G92 Gamepad",
    price: 560,
    rating: 5,
    reviews: 65,
    isNew: true,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 8,
    name: "AK-900 Wired Keyboard",
    price: 200,
    rating: 4,
    reviews: 65,
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function Wishlist() {
  return (
    <>
    <Navigation />
    <div className="wishlist-container">
      {/* Wishlist Section */}
      <div className="wishlist-header">
        <h2>Wishlist ({wishlistItems.length})</h2>
        <button className="move-all-btn">Move All To Bag</button>
      </div>

      <div className="products-grid">
        {wishlistItems.map((item) => (
          <div key={item.id} className="product-card">
            <div className="product-image-container">
              {item.discount && <span className="discount-badge">-{item.discount}%</span>}
              <button className="remove-btn">
                <Trash2 size={20} />
              </button>
              <img src={item.image || "/placeholder.svg"} alt={item.name} className="product-image" />
            </div>
            <div className="product-details">
              <h3>{item.name}</h3>
              <div className="price-container">
                <span className="current-price">${item.price}</span>
                {item.originalPrice && <span className="original-price">${item.originalPrice}</span>}
              </div>
            </div>
            <button className="add-to-cart-btn">
              <ShoppingCart size={20} />
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      {/* Just For You Section */}
      <div className="section-header">
        <div className="title-wrapper">
          <div className="indicator"></div>
          <h2>Just For You</h2>
        </div>
        <button className="see-all-btn">See All</button>
      </div>

      <div className="products-grid">
        {recommendedItems.map((item) => (
          <div key={item.id} className="product-card">
            <div className="product-image-container">
              {item.discount && <span className="discount-badge">-{item.discount}%</span>}
              {item.isNew && <span className="new-badge">New</span>}
              <button className="quick-view-btn">
                <Eye size={20} />
              </button>
              <img src={item.image || "/placeholder.svg"} alt={item.name} className="product-image" />
            </div>
            <div className="product-details">
              <h3>{item.name}</h3>
              <div className="price-container">
                <span className="current-price">${item.price}</span>
                {item.originalPrice && <span className="original-price">${item.originalPrice}</span>}
              </div>
              {item.rating && (
                <div className="rating">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={16} className={index < item.rating ? "star-filled" : "star-empty"} />
                  ))}
                  <span className="reviews">({item.reviews})</span>
                </div>
              )}
            </div>
            <button className="add-to-cart-btn">
              <ShoppingCart size={20} />
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

