import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"


const sliderData = [
  {
    id: 1,
    logo: "/placeholder.svg?height=50&width=50",
    title: "iPhone 14 Series",
    offer: "Up to 10% off Voucher",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-P25Knk8AHDx9gQzdPznkLFiqW7kJBM.png",
  },
  {
    id: 2,
    logo: "/placeholder.svg?height=50&width=50",
    title: "Samsung Galaxy S23",
    offer: "Special Launch Offer 15% Off",
    image: "/placeholder.svg?height=600&width=600",
  },
  {
    id: 3,
    logo: "/placeholder.svg?height=50&width=50",
    title: "MacBook Pro M2",
    offer: "Student Discount Available",
    image: "/placeholder.svg?height=600&width=600",
  },
  {
    id: 4,
    logo: "/placeholder.svg?height=50&width=50",
    title: "iPad Pro 2023",
    offer: "Free Apple Pencil Included",
    image: "/placeholder.svg?height=600&width=600",
  },
  {
    id: 5,
    logo: "/placeholder.svg?height=50&width=50",
    title: "AirPods Pro",
    offer: "20% Off Limited Time",
    image: "/placeholder.svg?height=600&width=600",
  },
]

function HomeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="slider-container">
      {sliderData.map((slide, index) => (
        <div key={slide.id} className={`slide ${index === currentSlide ? "active" : ""}`}>
          <div className="content">
            <div className="logo-container">
              <Image src={slide.logo || "/placeholder.svg"} alt="Brand Logo" width={50} height={50} className="logo" />
              <p className="series">{slide.title}</p>
            </div>
            <h1 className="offer">{slide.offer}</h1>
            <button className="shop-now">
              Shop Now <ChevronRight className="arrow" />
            </button>
          </div>
          <div className="image-container">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              width={600}
              height={600}
              className="product-image"
            />
          </div>
        </div>
      ))}

      <div className="dots">
        {sliderData.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        .slider-container {
          position: relative;
          width: 100%;
          height: 500px;
          background: #000;
          overflow: hidden;
          border-radius: 8px;
        }

        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
        }

        .slide.active {
          opacity: 1;
        }

        .content {
          color: white;
          max-width: 50%;
          z-index: 2;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .series {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        .offer {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 32px;
          line-height: 1.2;
        }

        .shop-now {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: white;
          background: none;
          border: none;
          font-size: 1rem;
          cursor: pointer;
          padding-bottom: 4px;
          border-bottom: 2px solid white;
        }

        .image-container {
          position: relative;
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .product-image {
          max-width: 100%;
          height: auto;
          object-fit: contain;
        }

        .dots {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 3;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          padding: 0;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: #DB4444;
        }

        @media (max-width: 768px) {
          .slide {
            flex-direction: column;
            padding: 20px;
          }

          .content {
            max-width: 100%;
            text-align: center;
            margin-bottom: 20px;
          }

          .offer {
            font-size: 2rem;
          }

          .image-container {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}

export default HomeSlider