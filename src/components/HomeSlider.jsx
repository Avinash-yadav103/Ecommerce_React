import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import "./HomeSlider.css";

const sliderData = [
  {
    id: 1,
    logo: "../assets/placeholder.svg",
    title: "iPhone 14 Series",
    offer: "Up to 10% off Voucher",
    image: "../assets/product1.png",
  },
  {
    id: 2,
    logo: "../assets/placeholder.svg",
    title: "Samsung Galaxy S23",
    offer: "Special Launch Offer 15% Off",
    image: "../assets/product2.png",
  },
  {
    id: 3,
    logo: "../assets/placeholder.svg",
    title: "MacBook Pro M2",
    offer: "Student Discount Available",
    image: "../assets/product3.png",
  },
  {
    id: 4,
    logo: "../assets/placeholder.svg",
    title: "iPad Pro 2023",
    offer: "Free Apple Pencil Included",
    image: "../assets/product4.png",
  },
  {
    id: 5,
    logo: "../assets/placeholder.svg",
    title: "AirPods Pro",
    offer: "20% Off Limited Time",
    image: "../assets/product1.png",
  },
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
