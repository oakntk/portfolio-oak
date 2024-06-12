import React from "react";

const WorkItems = ({ item }) => {
  const isZoomable = [6, 7, 8].includes(item.id);
  let link = "#";
  if (item.id === 6) {
    link = "https://app-v2.terminusfleet.com/";
  } else if (item.id === 7) {
    link = "https://passenger-dev.cloudtime.cloud/auth/login";
  } else if (item.id === 8) {
    link = "https://linesupport.terminusfleet.com/";
  }

  return (
    <div
      className={`work__card ${isZoomable ? "zoom" : ""}`}
      style={{ cursor: isZoomable ? "pointer" : "default" }}
    >
      {isZoomable ? (
        <a href={link} className="work__link">
          <img src={item.image} alt={item.title} className="work__img" />
          <h3 className="work__title">{item.title}</h3>
          <p className="work__description">{item.description}</p>
        </a>
      ) : (
        <>
          <img src={item.image} alt={item.title} className="work__img" />
          <h3 className="work__title">{item.title}</h3>
          <p className="work__description">{item.description}</p>
        </>
      )}
    </div>
  );
};

export default WorkItems;
