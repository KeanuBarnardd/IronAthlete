import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { images } from "../../../../Assets/Images";
import "./Header.scss";
import { useNavigate } from "react-router";

const slideImages = [
  {
    image: images.headerImg1,
    headText: "Unleash Your Inner Athlete with Our Fitness Store",
    subTitle:
      "From cross-training shoes to compression gear, we have everything you need to perform at your best and look good doing it.",
    btn1: {
      btnText: "Shop Now",
      btnIcon: "bi bi-box-arrow-in-up-right",
      btnUrl: "/store",
    },
  },
  {
    image: images.headerImg2,
    headText: "Get Stronger, Faster, and Healthier with Our Fitness ",
    subTitle:
      "Our range of supplements, including protein powders, pre-workouts, and post-workouts, will help you reach your fitness goals and recover faster.",
    btn1: {
      btnText: "Register",
      btnIcon: "",
      btnUrl: "/register",
    },
    btn2: {
      btnText: "Login",
      btnIcon: "",
      btnUrl: "/login",
    },
  },
  {
    image: images.headerImg3,
    headText: "Your One-Stop Shop for Gym Equipment and Nutrition",
    subTitle:
      "Shop the best brands in fitness and nutrition and take your training to the next level with our expert advice and support.",
    btn1: {
      btnText: "Contact Us",
      btnIcon: "",
      btnUrl: "/contact",
    },
  },
];

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="slide-container">
      <Slide duration={6000} autoplay={true} transitionDuration={250} easing={"ease"} arrows={true}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <header
              className="app__flex"
              style={{
                backgroundImage: ` linear-gradient(to bottom, var(--black-color), rgba(253, 200, 253, 0)),
                url(${slideImage.image})`,
              }}
            >
              <div className="app__container-width col header__content">
                <h1 className="head-text">{slideImage.headText}</h1>
                <p>{slideImage.subTitle}</p>
                <div className="row">
                  <button
                    onClick={() => navigate(slideImage.btn1?.btnUrl)}
                    className="btn btn__accent"
                  >
                    {slideImage.btn1?.btnText} <i className={slideImage.btn1?.btnIcon}></i>
                  </button>
                  {typeof slideImage.btn2 != "undefined" ? (
                    <button className="btn btn__outline-white"> {slideImage.btn2.btnText} </button>
                  ) : null}
                </div>
              </div>
            </header>
          </div>
        ))}
      </Slide>
    </div>
  );
}
