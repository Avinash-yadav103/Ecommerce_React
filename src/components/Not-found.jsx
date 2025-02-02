import Link from "next/link"
import "./not-found.css"

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <span>404 Error</span>
      </div>

      <div className="content">
        <h1>404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <Link href="/" className="home-button">
          Back to home page
        </Link>
      </div>
    </div>
  )
}

