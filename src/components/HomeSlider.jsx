import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import "./HomeSlider.css";

const sliderData = [
  {
    id: 1,
    logo: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=50&h=50",
    title: "iPhone 14 Series",
    offer: "Up to 10% off Voucher",
    image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a",
  },
  {
    id: 2,
    logo: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=50&h=50",
    title: "Samsung Galaxy S23",
    offer: "Special Launch Offer 15% Off",
    image: "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00",
  },
  {
    id: 3,
    logo: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?w=50&h=50",
    title: "MacBook Pro M2",
    offer: "Student Discount Available",
    image: "https://images.unsplash.com/photo-1511385348-a52b4a160dc2",
  },
  {
    id: 4,
    logo: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=50&h=50",
    title: "iPad Pro 2023",
    offer: "Free Apple Pencil Included",
    image: "https://images.unsplash.com/photo-1589739900879-927faea521f1",
  }
];

function HomeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-container">
      {sliderData.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >
          <div className="content">
            <div className="logo-container">
              <img
                src={slide.logo}
                alt="Brand Logo"
                width={50}
                height={50}
                className="logo"
              />
              <p className="series">{slide.title}</p>
            </div>
            <h1 className="offer">{slide.offer}</h1>
            <button className="shop-now">
              Shop Now <ChevronRight className="arrow" />
            </button>
          </div>
          <div className="image-container">
            <img
              src={slide.image}
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
    </div>
  );
}

export default HomeSlider;
