import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div>
      <div className="touch">
        <h1 className="touchText">Get in Touch</h1>
        <p className="pragraph">
          I'm a web developer specializing in React. I have a strong foundation
          in building dynamic, responsive, and user-friendly web applications
          using React. In addition to React, I'm proficient in HTML5,
          JavaScript, and other front-end technologies like Angular. I have
          experience working on social apps, and I love creating innovative,
          scalable solutions
        </p>
      </div>
      <div className="contact">
        <div className="contact-text">
          <div className="contactText">
            <div className="Address">
              <h3>Address</h3>
              <div className="map">
                <p>Butwal-11, Kalikanagar, horizon chowk, Rupendehi, Nepal</p>
                <iframe
                  title="Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.3822769064063!2d83.45133098072318!3d27.680145514826638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39968759cc236025%3A0x94ca2e8dc06f2127!2sHorizan%20chok%20davinagar%20line!5e1!3m2!1sen!2snp!4v1725679799878!5m2!1sen!2snp"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="Address">
              <h3>Phone Number</h3>
              <p>+977 9827374202</p>
            </div>
            <div className="Address">
              <h3>Email</h3>
              <p>shreekrishnaprajapati5@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contact-text">
          <form action="">
            <h1>Send Message</h1>
            <input type="text" placeholder="Full Name" />
            <br />
            <input type="text" placeholder="Email" />
            <br />
            <textarea name="" id="" placeholder="Type your Message"></textarea>
            <br />
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
