import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"

export default function Footer() {
  return (
    <>
   <footer className="bg-light text-center text-white">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a className="btn text-white btn-floating m-1" style={{backgroundColor: '#3b5998'}} href="https://web.facebook.com/hamed.makled" role="button"><i className="fab fa-facebook-f" /></a>
            <a className="btn text-white btn-floating m-1" style={{backgroundColor: '#55acee'}} href="#!" role="button"><i className="fab fa-twitter" /></a>
            <a className="btn text-white btn-floating m-1" style={{backgroundColor: '#dd4b39'}} href="https://myaccount.google.com/?hl=en&utm_source=OGB&utm_medium=act" role="button"><i className="fab fa-google" /></a>
            <a className="btn text-white btn-floating m-1" style={{backgroundColor: '#ac2bac'}} href="#!" role="button"><i className="fab fa-instagram" /></a>
            <a className="btn text-white btn-floating m-1" style={{backgroundColor: '#0082ca'}} href="https://www.linkedin.com/in/hamed-maklad-b8b907220/" role="button"><i className="fab fa-linkedin-in" /></a>
            <a className="btn text-white btn-floating m-1" style={{backgroundColor: '#333333'}} href="https://github.com/hamed-moataz" role="button"><i className="fab fa-github" /></a>
          </section>
        </div>

        <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
          <h3>Design: Hamed Moataz </h3>
        </div>
      </footer>
    </>
  );
}
