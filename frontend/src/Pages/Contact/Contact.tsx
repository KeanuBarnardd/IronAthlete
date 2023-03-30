import React from "react";

import "./Contact.scss";
import { images } from "../../Assets/Images";

export default function Contact() {
  return (
    <div className="app__flex">
      <div className="app__container app__container-width">
        <div className="row contact__container" style={{ width: "100%" }}>
          <div className="col contact__details" style={{ width: "100%" }}>
            <div className="col" style={{ gap: "10px" }}>
              <h1>Contact Us</h1>
              <p className="p-text" style={{ maxWidth: "500px" }}>
                Thank you for your interest in our gym ecommerce store! If you have any questions or
                concerns about our products, shipping, or anything else, please don't hesitate to
                get in touch with us. You can reach us through the contact form below, or email us
                at iroanAthelete@info.com.au. Thank you for your support!
              </p>
              <div className="row">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-youtube"></i>
              </div>
            </div>

            <div className="col">
              <h2>Sydney </h2>
              <ul>
                <li className="p-text">+61 2 8765 4321</li>
                <li className="p-text">ironAthelete@info.com.au</li>
                <li className="p-text bold"> 456 George Street, Sydney NSW 2000</li>
              </ul>
            </div>
            <div className="col">
              <h2>Melbourne </h2>
              <ul>
                <li className="p-text"> +61 3 9876 5432</li>
                <li className="p-text">ironAthelete@info.com.au</li>
                <li className="p-text bold">123 Smith Street, Richmond VIC 3121</li>
              </ul>
            </div>
          </div>
          <form action="">
            <div className="col">
              <div className="input__container">
                <p className="p-text">Name*</p>
                <input type="text" />
              </div>
              <div className="input__container">
                <p className="p-text">Email*</p>
                <input type="text" />
              </div>
              <div className="input__container">
                <p className="p-text">Phone*</p>
                <input type="number" />
              </div>
              <div className="input__container">
                <p className="p-text">Best time for us to contact you*</p>
                <input type="text" />
              </div>
              <div className="input__container">
                <p className="p-text">Message*</p>
                <textarea></textarea>
              </div>
              <button className="btn btn__accent">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
