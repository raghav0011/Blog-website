import React from "react";
import "../styles/TeamContainer.css";

const TeamContainer = ({image,name,title,location}) => {
  return (
    <div className="team-container__col">
      <div className="team-one__single">
        <div className="team-one__img">
          {/* <img src={image} alt="" /> */}
          <img
            style={{ width: "300px", height: "300px" }}
            alt="Team Image"
            src={image}
          />
          <div className="team-one__hover-content">
            <h3 className="team-one__name">{name}</h3>
            <p className="team-one__title">{title}</p>
            <p className="team-one__title" style={{ color: "white" }}>
              {location}
            </p>
          </div>
          <div className="team-one__bottom">
            <div className="team-one__btn-box">
              {/* <Link
                to={`/about-team#${name.toLowerCase().replace(" ", "-")}`}
                className="team-one__btn">
                ABOUT ME
              </Link> */}
              <a
                href={"/TeamDetails"}
                // to={`/about-team#${name.toLowerCase().replace(" ", "-")}`}
                className="team-one__btn">
                ABOUT ME
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamContainer;
