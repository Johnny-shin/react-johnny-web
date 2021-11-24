import React from "react";

export default function Portfolio({ data }) {
  const projects = data.projects.map((projects) => {
    const projectImage = "images/portfolio/" + projects.image;
    const onClick = (url) => {
      window.location.href=url;
    }
    return (
      <div key={projects.title} className="columns portfolio-item">
        <div className="item-wrap">
          <a onClick={() => onClick(projects.url)}  title={projects.title} target={"_blank"} >
            <img alt={projects.title} src={projectImage} />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>{projects.title}</h5>
                <p>{projects.category}</p>
              </div>
            </div>
            <div className="link-icon">
              <i className="fa fa-link"></i>
            </div>
          </a>
        </div>
      </div>
    );
  });
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
}
