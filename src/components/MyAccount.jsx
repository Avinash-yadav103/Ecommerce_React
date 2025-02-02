import { useState } from 'react'
import './css/MyAccount.css'
import Navigation from './Navigation'

export default function MyAccount() {
  const [activeSection, setActiveSection] = useState('profile')
  const [formData, setFormData] = useState({
    firstName: 'Md',
    lastName: 'Rimel',
    email: 'rimel111@gmail.com',
    address: 'Kingston, 5236, United State',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Saving changes:', formData)
  }

  const handleCancel = () => {
    // Reset form or navigate away
    console.log('Cancelled changes')
  }

  return (
    <>
    <Navigation />
    <div className="account-container">
      <div className="account-header">
        <div className="breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <span>My Account</span>
        </div>
        <div className="welcome-message">
          Welcome! <span className="user-name">Md Rimel</span>
        </div>
      </div>

      <div className="account-content">
        <aside className="sidebar">
          <div className="sidebar-section">
            <h3>Manage My Account</h3>
            <ul>
              <li className={activeSection === 'profile' ? 'active' : ''}>
                <button onClick={() => setActiveSection('profile')}>
                  My Profile
                </button>
              </li>
              <li className={activeSection === 'address' ? 'active' : ''}>
                <button onClick={() => setActiveSection('address')}>
                  Address Book
                </button>
              </li>
              <li className={activeSection === 'payment' ? 'active' : ''}>
                <button onClick={() => setActiveSection('payment')}>
                  My Payment Options
                </button>
              </li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>My Orders</h3>
            <ul>
              <li className={activeSection === 'returns' ? 'active' : ''}>
                <button onClick={() => setActiveSection('returns')}>
                  My Returns
                </button>
              </li>
              <li className={activeSection === 'cancellations' ? 'active' : ''}>
                <button onClick={() => setActiveSection('cancellations')}>
                  My Cancellations
                </button>
              </li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>My Wishlist</h3>
            <ul>
              <li className={activeSection === 'wishlist' ? 'active' : ''}>
                <button onClick={() => setActiveSection('wishlist')}>
                  My Wishlist
                </button>
              </li>
            </ul>
          </div>
        </aside>

        <main className="main-content">
          <div className="profile-section">
            <h2>Edit Your Profile</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>

              <div className="password-section">
                <h3>Password Changes</h3>
                <div className="form-group">
                  <input
                    type="password"
                    name="currentPassword"
                    placeholder="Current Password"
                    value={formData.currentPassword}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="newPassword"
                    placeholder="New Password"
                    value={formData.newPassword}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm New Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={handleCancel}>
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
    </>
  )
}
