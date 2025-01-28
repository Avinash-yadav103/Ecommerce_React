import { Link } from "react-router-dom"

function Navigation() {
    return (
      <div>
        <div className="announcement-bar">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link to="#">ShopNow</Link>
          </p>
        </div>
  
        <header className="header">
          <div className="container nav-container">
            <Link to="/" className="logo">
              Exclusive
            </Link>
  
            <nav className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/about">About</Link>
              <Link to="/sign-up">Sign Up</Link>
            </nav>
  
            <div className="search-cart">
              <div className="search-box">
                <input type="search" placeholder="What are you looking for?" className="search-input" />
              </div>
  
              <button className="icon-button">♥</button>
              <button className="icon-button">🛒</button>
              <button className="icon-button">👤</button>
            </div>
          </div>
        </header>
      </div>
    )
  }
  
export default Navigation