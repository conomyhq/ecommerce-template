import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
// import { useGetImage } from "../../hooks/useGetImage";

const HeroSliderOneSingle = ({ data, sliderClassName }) => {
  // const imageR = useGetImage()

  return (
    <div
      className={`single-slider slider-height-1 bg-purple ${
        sliderClassName ? sliderClassName : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
            <div className="slider-content slider-animated-1">
              <h3 className="animated">{data.title}</h3>
              <h1 className="animated">{data.subtitle}</h1>
              <div className="slider-btn btn-hover">
                <Link
                  className="animated"
                  to={process.env.PUBLIC_URL + data.url}
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
            <div className="">
              <img
                className="animated"
                width='740px'
                height='724px'
                src={process.env.PUBLIC_URL + data.image}
                // src={imageR}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderOneSingle.propTypes = {
  data: PropTypes.object,
  sliderClassName: PropTypes.string
};

export default HeroSliderOneSingle;
