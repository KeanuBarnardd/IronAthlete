import React from "react";

import "./Contact.scss";
import { images } from "../../Assets/Images";

export default function Contact() {
  return (
    <div className="app__flex">
      <div className="app__container app__container-width">
        <div className="row" style={{ width: "100%" }}>
          <div className="col contact__details" style={{ width: "100%" }}>
            <h1>Contact Us</h1>

            <div className="col">
              <h2>Hoppers Crossing </h2>
              <ul>
                <li className="p-text">0419 886 743</li>
                <li className="p-text">ironAthelete@info.com.au</li>
                <li className="p-text bold">123 Cranwell St Braybrook, 3019, Melbourne</li>
              </ul>
            </div>
            <div className="col">
              <h2>Melbourne CBD </h2>
              <ul>
                <li className="p-text">0419 886 743</li>
                <li className="p-text">ironAthelete@info.com.au</li>
                <li className="p-text bold">123 Cranwell St Braybrook, 3019, Melbourne</li>
              </ul>
            </div>
            <div className="col">
              <h2>Hoppers Crossing </h2>
              <ul>
                <li className="p-text">0419 886 743</li>
                <li className="p-text">ironAthelete@info.com.au</li>
                <li className="p-text bold">123 Cranwell St Braybrook, 3019, Melbourne</li>
              </ul>
            </div>
            <div className="row">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-instagram"></i>
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
