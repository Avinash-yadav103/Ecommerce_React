import Navigation from "../components/Navigation"

function Login() {
  return (
    <div>
      <Navigation />

      <main className="container">
        <div className="auth-container">
          <div className="auth-image">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nxQUpSs86AAP90uy7m1Qsckf9t4IlU.png"
              alt="Shopping Illustration"
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          <div className="auth-form">
            <h1 style={{ fontSize: 32, fontWeight: "bold", marginBottom: 16 }}>Log in to Exclusive</h1>
            <p style={{ color: "#666", marginBottom: 32 }}>Enter your details below</p>

            <form>
              <input type="email" placeholder="Email or Phone Number" className="input-field" />
              <input type="password" placeholder="Password" className="input-field" />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <button className="button button-primary">Log in</button>
                <Link to="/forgot-password" style={{ color: "#ff4444" }}>
                  Forget Password?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Login