import React from "react";
import Slider from "react-slick";

const companyData = [
  { id: 1, name: "Company A", description: "Description of Company A" },
  { id: 2, name: "Company B", description: "Description of Company B" },
  { id: 3, name: "Company C", description: "Description of Company C" },
];

export default function CompanySlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {companyData.map((company) => (
        <div key={company.id}>
          <h3>{company.name}</h3>
          <p>{company.description}</p>
        </div>
      ))}
    </Slider>
  );
}
