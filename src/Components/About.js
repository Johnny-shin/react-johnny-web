import React from "react";

export default function About({ data }) {
  const name = data.name;
  const profilepic =
    "https://avatars.githubusercontent.com/u/37028629?s=400&u=10b6345df6b231f5b1ceed879bbbeb74443fb916&v=4";
  const bio = data.bio;
  const city = data.address.city;
  const state = data.address.state;
  const email = data.email;

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src={profilepic} alt="Johnny" />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {city} {state}
                </span>
                <br />
                <span>
                  <a href="mailto:hyunjongshin.dev@gmail.com?Subject=Hello%20Hyunjong">
                    {email}
                  </a>
                </span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={'https://drive.google.com/file/d/1Wh7M5c4oaHYFBVTROMF0WJvWdwFno_1n/view?usp=sharing'} className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
