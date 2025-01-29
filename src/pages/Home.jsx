import Navigation from "../components/Navigation"
import Sidebar from "../components/Sidebar"
import HomeSlider from "../components/HomeSlider"
import ProductSection from '../components/ProductSection';
import CategorySection from '../components/CategorySection';

function Home() {
  return (
    <div>
      <Navigation />

      <main className="container">
        <div style={{ display: "flex" }}>
          <Sidebar />

          <div style={{ flex: 1 }}>
            <div className="hero-section">
              <div className="hero-content">
                <HomeSlider />
              </div>
            </div>

            <div className="flash-sales">
              <div className="flash-header">
                <div>
                  <h3 style={{ color: "#ff4444", fontWeight: 600, marginBottom: 4 }}>Today's</h3>
                  <h2 style={{ fontSize: 24, fontWeight: "bold" }}>Flash Sales</h2>
                </div>
                <div className="timer">
                  <div className="timer-unit">
                    <span>03</span>
                    <span className="timer-label">Days</span>
                  </div>
                  <span>:</span>
                  <div className="timer-unit">
                    <span>23</span>
                    <span className="timer-label">Hours</span>
                  </div>
                  <span>:</span>
                  <div className="timer-unit">
                    <span>19</span>
                    <span className="timer-label">Minutes</span>
                  </div>
                  <span>:</span>
                  <div className="timer-unit">
                    <span>56</span>
                    <span className="timer-label">Seconds</span>
                  </div>
                </div>
              </div>

              <div className="products-grid">
                <div className="product-card">
                  <div className="product-image">
                    <img
                      src="/product-image.jpg"
                      alt="HAVIT HV-G92 Gamepad"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <span className="discount-badge">-40%</span>
                  </div>
                  <div style={{ marginTop: 16 }}>
                    <h3 style={{ fontWeight: 500 }}>HAVIT HV-G92 Gamepad</h3>
                    <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                      <span style={{ color: "#ff4444" }}>$120</span>
                      <span style={{ color: "#666", textDecoration: "line-through" }}>$160</span>
                    </div>
                  </div>
                </div>
                {/* More product cards */}
              </div>
            </div>



            <CategorySection />
            <ProductSection />

          </div>
        </div>
      </main>
    </div>
  )
}

export default Home