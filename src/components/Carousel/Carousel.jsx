
import { Link } from "react-router-dom";
import "./Carousel.css";
const Slider = () => {
  return (
    <>
      <div className="banner">
        <div className="container p-0">
          <div className="row">
            <div className="col-lg-9">
              {/* Carousel */}
              <div id="demo" className="carousel slide" data-bs-ride="carousel">
                {/* The slideshow/carousel */}
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="assets/img/Banner/1.png" alt />
                  </div>
                  <div className="carousel-item">
                    <img src="assets/img/Banner/1.png" alt />
                  </div>
                  <div className="carousel-item">
                    <img src="assets/img/Banner/1.png" alt />
                  </div>
                </div>
                {/* Left and right controls/icons */}
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" />
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                  <span className="carousel-control-next-icon" />
                </button>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="login-button">
                <Link to="/client-login">Login</Link>
                <Link to="/">Forgot Password</Link>
                <Link to="/create-account">Create Account</Link>
              </div>
              <div className="banner-ad">
                <a href>
                  <video width height autoPlay loop muted>
                    <source src="assets/img/ad-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Slider;
