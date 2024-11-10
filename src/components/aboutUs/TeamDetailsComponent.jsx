import React from "react";
import "../../styles/AboutTeam.css";
import { IoCheckmark } from "react-icons/io5";
import "../../styles/AboutUs/OurTeam.css";
import "../../styles/TeamContainer.css";
import { TeamImage } from "../../constants/images";

const TeamDetailsInfo = () => {
  return (
    <section className="services-details">
      <div className="container" style={{ margin: "auto" }}>
        <div className="row" style={{ margin: "auto" }}>
          <div className="our_team_bottom" style={{ margin: "auto" }}>
            <div id="sohil-shrestha" className="services-details__left pb-5">
              <div className="services-details__planning">
                <div className="services-details__planning-img">
                  <img
                    style={{ width: "35em" }}
                    src={TeamImage.TeamImage2}
                    alt=""
                  />
                </div>
                <div className="services-details__planning-content">
                  <h2
                    className="services-details__planning-title"
                    style={{ marginBottom: "10px" }}>
                    Sohil Shrestha
                  </h2>
                  <h5 style={{ marginBottom: "10px" }}>
                    <b style={{ color: "#04b0b6" }}>
                      Global Business Development Director
                    </b>
                  </h5>
                  <h5 style={{ marginBottom: "20px" }}>Kathmandu, Nepal</h5>
                  <ul className="list-unstyled services-details__planning-list">
                    <li>
                      <div className="icon">
                        <span className="icon-tick">
                          <IoCheckmark />
                        </span>
                      </div>
                      <div className="text">
                        <p>Graduation & MBA in Marketing.</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-tick">
                          <IoCheckmark />
                        </span>
                      </div>
                      <div className="text">
                        <p>MD at Trade Engine Pvt. Ltd.</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-tick">
                          <IoCheckmark />
                        </span>
                      </div>
                      <div className="text">
                        <p>
                          Experience in Marketing sector for more than 7 Years.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-tick">
                          <IoCheckmark />
                        </span>
                      </div>
                      <div className="text">
                        <p>
                          Lecturer since 12+ years in different Universities of
                          Nepal.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-tick">
                          <IoCheckmark />
                        </span>
                      </div>
                      <div className="text">
                        <p>
                          Proficiency of online /offline marketing for different
                          (AUTO, ELECTRONICS, F&B, MEDICAL, SECURITY, RETAIL,
                          NGOs, PIPE, COLLEGE ) industries.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-tick">
                          <IoCheckmark />
                        </span>
                      </div>
                      <div className="text">
                        <p>Entrepreneur</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="sanjay-udas" className="services-details__left pb-5">
              <div className="services-details__planning">
                <div className="services-details__planning-img">
                  <img
                    style={{ width: "30em" }}
                    src={TeamImage?.TeamImage3}
                    alt=""
                  />
                </div>
                <div className="services-details__planning-content">
                  <h2
                    className="services-details__planning-title"
                    style={{ marginBottom: "10px" }}>
                    SANJAY UDAS
                  </h2>
                  <h5 style={{ marginBottom: "10px" }}>
                    <b style={{ color: "#04b0b6" }}>
                      MD & Head of Digital Branding
                    </b>
                  </h5>
                  <h5 style={{ marginBottom: "20px" }}>Kathmandu, Nepal</h5>
                  <p
                    className="services-details__planning-text"
                    style={{ textAlign: "justify" }}>
                    Hello! Since 1998, I have been in media fraternity as
                    Digital and Graphic Head in plathora of reputed media houses
                    like Image Channel, Sagarmatha, Bodhi TV etc
                  </p>
                </div>
              </div>
            </div>
            <div id="sujan-maharjan" className="services-details__left pb-5">
              <div className="services-details__planning">
                <div className="services-details__planning-img">
                  <img
                    style={{ width: "50em" }}
                    src={TeamImage?.TeamImage4}
                    alt=""
                  />
                </div>
                <div className="services-details__planning-content">
                  <h2
                    className="services-details__planning-title"
                    style={{ marginBottom: "10px" }}>
                    SUJAN MAHARJAN
                  </h2>
                  <h5 style={{ marginBottom: "10px" }}>
                    <b style={{ color: "#04b0b6" }}>
                      Culinary Incharge & Consultant
                    </b>
                  </h5>
                  <h5 style={{ marginBottom: "20px" }}>Kritipur, Nepal</h5>
                  <p
                    className="services-details__planning-text"
                    style={{ textAlign: "justify" }}>
                    Namaste, in 2012, I graduted BHM and joined the kitchen of
                    Crown & Champa in Maldives. I spent more than 6 years in
                    several property in Maldives like Komandoo Island Resort,
                    Hurawalhi Island Resort, Kudadoo Private Island Resport etc
                    as a Chef de Partie and culinary instructor.
                  </p>
                </div>
              </div>
            </div>
            <div id="shikar-sjb" className="services-details__left pb-5">
              <div className="services-details__planning">
                <div className="services-details__planning-img">
                  <img
                    style={{ width: "50em" }}
                    src={TeamImage?.TeamImage5}
                    alt=""
                  />
                </div>
                <div className="services-details__planning-content">
                  <h2
                    className="services-details__planning-title"
                    style={{ marginBottom: "10px" }}>
                    SHIKHAR SJB RANA
                  </h2>
                  <h5 style={{ marginBottom: "10px" }}>
                    <b style={{ color: "#04b0b6" }}>F&B Head, Entrepreneur</b>
                  </h5>
                  <h5 style={{ marginBottom: "20px" }}>Kathmandu, Nepal</h5>
                  <p
                    className="services-details__planning-text"
                    style={{ textAlign: "justify" }}>
                    Hello, I studied Hospitality Management from the University
                    of Singapore in 2002 and have worked in the finest stars
                    property in Nepal like Hotel Yak & Yeti, Hotel Shangri~la ,
                    Hotel Aakama etc as a Food and Beverage Manager carrying
                    more than a decades of experience in the hospitality sector.
                  </p>
                </div>
              </div>
            </div>
            <div id="ibharim-imad" className="services-details__left pb-5">
              <div className="services-details__planning">
                <div className="services-details__planning-img">
                  <img
                    style={{ width: "22em" }}
                    src={TeamImage?.TeamImage6}
                    alt=""
                  />
                </div>
                <div className="services-details__planning-content">
                  <h2
                    className="services-details__planning-title"
                    style={{ marginBottom: "10px" }}>
                    IBHARIM IMAD
                  </h2>
                  <h5 style={{ marginBottom: "10px" }}>
                    <b style={{ color: "#04b0b6" }}>
                      Advisor & Hospitality Expertise
                    </b>
                  </h5>
                  <h5 style={{ marginBottom: "20px" }}>Maldives</h5>
                  <ul className="list-unstyled services-details__planning-list">
                    <li>
                      <div className="icon">
                        <span className="icon-tick">
                          <IoCheckmark />
                        </span>
                      </div>
                      <div className="text">
                        <p>MD of ZH Aluminium</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-tick">
                          <IoCheckmark />
                        </span>
                      </div>
                      <div className="text">
                        <p>
                          Graduation & MBA on Hospitality & Tourism from
                          Maldives University in 2000
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-tick">
                          <IoCheckmark />
                        </span>
                      </div>
                      <div className="text">
                        <p>
                          20+ years of experience in Hospitality fraternity in
                          Maldives
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-tick">
                          <IoCheckmark />
                        </span>
                      </div>
                      <div className="text">
                        <p>Entrepreneur</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="mohamed-riyaz" className="services-details__left pb-5">
              <div className="services-details__planning">
                <div className="services-details__planning-img">
                  <img
                    style={{ width: "22em" }}
                    src={TeamImage?.TeamImage7}
                    alt=""
                  />
                </div>
                <div className="services-details__planning-content">
                  <h2
                    className="services-details__planning-title"
                    style={{ marginBottom: "10px" }}>
                    MOHAMED RIYAZ
                  </h2>
                  <h5 style={{ marginBottom: "10px" }}>
                    <b style={{ color: "#04b0b6" }}>BDH & Culinary Director</b>
                  </h5>
                  <h5 style={{ marginBottom: "20px" }}>Maldives</h5>
                  <ul className="list-unstyled services-details__planning-list">
                    <li>
                      <div className="icon">
                        <span className="icon-tick">
                          <IoCheckmark />
                        </span>
                      </div>
                      <div className="text">
                        <p>
                          Graduation on Hospitality & Tourism from International
                          Universities
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-tick">
                          <IoCheckmark />
                        </span>
                      </div>
                      <div className="text">
                        <p>
                          28 years of experience in culinary, beverages and
                          management levels of hospitality sector in Maldives.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-tick">
                          <IoCheckmark />
                        </span>
                      </div>
                      <div className="text">
                        <p>Expertise in F&B operations, Kitchen Operations</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-tick">
                          <IoCheckmark />
                        </span>
                      </div>
                      <div className="text">
                        <p>
                          Worked as Head of Operations in various star
                          properties of Maldives.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-tick">
                          <IoCheckmark />
                        </span>
                      </div>
                      <div className="text">
                        <p>Entrepreneur</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetailsInfo;
