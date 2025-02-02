import { useState } from "react"
import {Link} from "react-router-dom"
import "./Checkout.css"
import Navigation from "./Navigation"

const cartItems = [
  {
    id: 1,
    name: "LCD Monitor",
    price: 650,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "H1 Gamepad",
    price: 1100,
    image: "/placeholder.svg?height=60&width=60",
  },
]

export default function Checkout() {
  const [formData, setFormData] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    townCity: "",
    phoneNumber: "",
    emailAddress: "",
    saveInfo: false,
  })

  const [paymentMethod, setPaymentMethod] = useState("bank")
  const [couponCode, setCouponCode] = useState("")

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    console.log("Payment method:", paymentMethod)
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)
  const total = subtotal // Add shipping cost if needed

  const handleApplyCoupon = (e) => {
    e.preventDefault()
    alert("Coupon applied: " + couponCode)
  }

  return (
    <>
    <Navigation />
    <div className="checkout-container">
      <div className="breadcrumb">
        <a href="/account">Account</a>
        <span>/</span>
        <a href="/account">My Account</a>
        <span>/</span>
        <a href="/product">Product</a>
        <span>/</span>
        <a href="/cart">View Cart</a>
        <span>/</span>
        <span>Checkout</span>
      </div>

      <div className="checkout-content">
        <div className="billing-section">
          <h2>Billing Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="streetAddress"
                placeholder="Street Address*"
                value={formData.streetAddress}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="apartment"
                placeholder="Apartment, floor, etc. (optional)"
                value={formData.apartment}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="townCity"
                placeholder="Town/City*"
                value={formData.townCity}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number*"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="emailAddress"
                placeholder="Email Address*"
                value={formData.emailAddress}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group checkbox">
              <input
                type="checkbox"
                id="saveInfo"
                name="saveInfo"
                checked={formData.saveInfo}
                onChange={handleInputChange}
              />
              <label htmlFor="saveInfo">Save this information for faster check-out next time</label>
            </div>
          </form>
        </div>

        <div className="order-summary">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="item-image" />
                <span className="item-name">{item.name}</span>
                <span className="item-price">${item.price}</span>
              </div>
            ))}
          </div>

          <div className="totals">
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
              <span>${total}</span>
            </div>
          </div>

          <div className="payment-methods">
            <div className="payment-option">
              <input
                type="radio"
                id="bank"
                name="payment"
                value="bank"
                checked={paymentMethod === "bank"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="bank">Bank</label>
              <div className="payment-icons">
                <img src="/placeholder.svg?height=30&width=40" alt="Bank 1" />
                <img src="/placeholder.svg?height=30&width=40" alt="Bank 2" />
                <img src="/placeholder.svg?height=30&width=40" alt="Bank 3" />
              </div>
            </div>

            <div className="payment-option">
              <input
                type="radio"
                id="cash"
                name="payment"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="cash">Cash on delivery</label>
            </div>
          </div>

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

          <button className="place-order" onClick={handleSubmit}>
            Place Order
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

