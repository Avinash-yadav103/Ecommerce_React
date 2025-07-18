import { useState, useEffect } from "react"
import { Heart, Minus, Plus, Truck, RotateCcw } from "lucide-react"
import { useParams, Link } from "react-router-dom"
import "./css/ProductDetail.css"

const thumbnails = [
  "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=100&h=100",
  "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=100&h=100",
  "https://images.unsplash.com/photo-1591104196282-1563019071db?w=100&h=100",
  "https://images.unsplash.com/photo-1554213352-5ffe6534af08?w=100&h=100",
]

const sizes = ["XS", "S", "M", "L", "XL"]
const colors = ["#FFFFFF", "#DB4444", "#000000"]

export default function ProductDetail() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedSize, setSelectedSize] = useState("M")
  const [quantity, setQuantity] = useState(2)

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change
    if (newQuantity >= 1) {
      setQuantity(newQuantity)
    }
  }

  return (
    <div className="product-detail-container">
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/gaming">Gaming</Link>
        <span>/</span>
        <span>Havic HV G-92 Gamepad</span>
      </div>

      <div className="product-content">
        <div className="product-gallery">
          <div className="thumbnails">
            {thumbnails.map((thumb, index) => (
              <button
                key={index}
                className={`thumbnail ${selectedImage === index ? "active" : ""}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={thumb} alt={`Product view ${index + 1}`} />
              </button>
            ))}
          </div>
          <div className="main-image">
            <img
              src={thumbnails[selectedImage]}
              alt="Havic HV G-92 Gamepad"
            />
          </div>
        </div>

        <div className="product-info">
          <h1>Havic HV G-92 Gamepad</h1>

          <div className="rating">
            {"★".repeat(4)}
            {"☆".repeat(1)}
            <span className="reviews">(150 Reviews)</span>
            <span className="stock">|</span>
            <span className="in-stock">In Stock</span>
          </div>

          <div className="price">$192.00</div>

          <p className="description">
            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install &
            mess free removal Pressure sensitive.
          </p>

          <div className="options">
            <div className="option-group">
              <label>Colours:</label>
              <div className="color-options">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    className={`color-option ${selectedColor === index ? "active" : ""}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(index)}
                  />
                ))}
              </div>
            </div>

            <div className="option-group">
              <label>Size:</label>
              <div className="size-options">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-option ${selectedSize === size ? "active" : ""}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="quantity-section">
              <div className="quantity-selector">
                <button onClick={() => handleQuantityChange(-1)}>
                  <Minus size={20} />
                </button>
                <span>{quantity}</span>
                <button onClick={() => handleQuantityChange(1)}>
                  <Plus size={20} />
                </button>
              </div>
              <button className="buy-now">Buy Now</button>
              <button className="wishlist">
                <Heart size={20} />
              </button>
            </div>
          </div>

          <div className="delivery-info">
            <div className="delivery-option">
              <Truck size={24} />
              <div>
                <h3>Free Delivery</h3>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>

            <div className="delivery-option">
              <RotateCcw size={24} />
              <div>
                <h3>Return Delivery</h3>
                <p>
                  Free 30 Days Delivery Returns. <a href="#">Details</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

