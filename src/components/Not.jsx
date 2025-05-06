import {Link} from 'react-router-dom'
import "./css/not-found.css"
import Navigation from "./Navigation"

export default function Not () {
  return (
   <>
   <Navigation />

    <div className="not-found-container">
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <span>404 Error</span>
      </div>

      <div className="content">
        <h1>404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <Link to="/" className="home-button">
          Back to home page
        </Link>
      </div>
    </div>
    </>
  )
}

