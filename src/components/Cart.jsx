import { useState } from "react"
import { X, ChevronUp, ChevronDown } from "lucide-react"
import {Link} from "react-router-dom"
import "./Cart.css"
import Footer from "./Footer"
import Navigation from "./Navigation"

const initialCartItems = [
  {
    id: 1,
    name: "LCD Monitor",
    price: 650,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "H1 Gamepad",
    price: 550,
    quantity: 2,
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [couponCode, setCouponCode] = useState("")

  const updateQuantity = (id, change) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item)),
    )
  }

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }

  const handleApplyCoupon = (e) => {
    e.preventDefault()
    // Add coupon logic here
    alert("Coupon applied: " + couponCode)
  }

  const subtotal = calculateSubtotal()

  return (
    <>
    <Navigation />
    <div className="cart-container">
      <div className="breadcrumb">
        <a href="/">Home</a>
        <span>/</span>
        <span>Cart</span>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          <div className="cart-header">
            <div className="product-col">Product</div>
            <div className="price-col">Price</div>
            <div className="quantity-col">Quantity</div>
            <div className="subtotal-col">Subtotal</div>
          </div>

          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="product-col">
                <button className="remove-button" onClick={() => removeItem(item.id)}>
                  <X size={16} />
                </button>
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="product-image" />
                <span className="product-name">{item.name}</span>
              </div>
              <div className="price-col">${item.price}</div>
              <div className="quantity-col">
                <div className="quantity-selector">
                  <input type="text" value={item.quantity} readOnly />
                  <div className="quantity-buttons">
                    <button onClick={() => updateQuantity(item.id, 1)}>
                      <ChevronUp size={16} />
                    </button>
                    <button onClick={() => updateQuantity(item.id, -1)}>
                      <ChevronDown size={16} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="subtotal-col">${item.price * item.quantity}</div>
            </div>
          ))}

          <div className="cart-actions">
            <button className="return-button">Return To Shop</button>
            <button className="update-button">Update Cart</button>
          </div>
        </div>

        <div className="cart-summary">
          <div className="coupon-section">
            <form onSubmit={handleApplyCoupon}>
              <input
                type="text"
                placeholder="Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button type="submit">Apply Coupon</button>
            </form>
          </div>

          <div className="cart-total">
            <h2>Cart Total</h2>
            <div className="total-row">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <div className="total-row">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="total-row total">
              <span>Total:</span>
              <span>${subtotal}</span>
            </div>
            <Link to='/cart/checkout'><button className="checkout-button">Process to checkout</button></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

