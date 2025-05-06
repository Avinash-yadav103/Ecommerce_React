import Navigation from "../components/Navigation"

function Account() {
  return (
    <div>
      <Navigation />

      <main className="container">
        <div style={{ display: "flex", gap: 8, fontSize: 14, color: "#666", marginBottom: 32 }}>
          <Link to="/">Home</Link>
          <span>/</span>
          <span>My Account</span>
        </div>

        <div className="account-container">
          <div className="account-sidebar">
            <h2 style={{ fontWeight: 500, marginBottom: 16 }}>Manage My Account</h2>
            <nav style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Link to="/account" style={{ color: "#ff4444" }}>
                My Profile
              </Link>
              <Link to="/account/address">Address Book</Link>
              <Link to="/account/payment">My Payment Options</Link>
            </nav>

            <h2 style={{ fontWeight: 500, marginTop: 32, marginBottom: 16 }}>My Orders</h2>
            <nav style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Link to="/account/returns">My Returns</Link>
              <Link to="/account/cancellations">My Cancellations</Link>
            </nav>

            <h2 style={{ fontWeight: 500, marginTop: 32, marginBottom: 16 }}>My WishList</h2>
          </div>

          <div className="account-content">
            <h1 style={{ fontSize: 24, fontWeight: "bold", marginBottom: 32 }}>Edit Your Profile</h1>

            <form>
              <div className="form-row">
                <div className="form-group">
                  <label style={{ display: "block", fontSize: 14, marginBottom: 8 }}>First Name</label>
                  <input type="text" defaultValue="Md" className="input-field" />
                </div>
                <div className="form-group">
                  <label style={{ display: "block", fontSize: 14, marginBottom: 8 }}>Last Name</label>
                  <input type="text" defaultValue="Rimel" className="input-field" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label style={{ display: "block", fontSize: 14, marginBottom: 8 }}>Email</label>
                  <input type="email" defaultValue="rimel1111@gmail.com" className="input-field" />
                </div>
                <div className="form-group">
                  <label style={{ display: "block", fontSize: 14, marginBottom: 8 }}>Address</label>
                  <input type="text" defaultValue="Kingston, 5236, United State" className="input-field" />
                </div>
              </div>

              <div style={{ marginTop: 32 }}>
                <h2 style={{ fontWeight: 500, marginBottom: 16 }}>Password Changes</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <input type="password" placeholder="Current Password" className="input-field" />
                  <input type="password" placeholder="New Password" className="input-field" />
                  <input type="password" placeholder="Confirm New Password" className="input-field" />
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: 16, marginTop: 32 }}>
                <button className="button button-outline">Cancel</button>
                <button className="button button-primary">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Account