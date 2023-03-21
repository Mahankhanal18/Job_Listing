import React from "react";
import "./Job.css";

const Job = (props) => {
  return (
    <div className="job-list-container">
      <div className="job-post">
        <div
          className={props.new && props.featured ? "new-featured" : ""}
        ></div>
        <div className="logo">
          <img src={props.logo} alt="compony-logo" />
        </div>
        <div className="job-details">
          <div className="company">
            <div className="company-name">{props.company}</div>
            {props.new && props.featured ? (
              <div className="new-featured-tag">
                <div className="new">NEW!</div>
                <div className="featured">FEATURED</div>
              </div>
            ) : props.new ? (
              <div className="new-featured-tag">
                <div className="new">NEW!</div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="job-title">
            <div>{props.position}</div>
          </div>
          <div className="job-info">
            <div>{props.postedAt}</div>
            <div className="dot">&#183;</div>
            <div>{props.contract}</div>
            <div className="dot">&#183;</div>
            <div>{props.location}</div>
          </div>
          <div className="hr"></div>
        </div>
        <div className="skills">
          <div>{props.role}</div>
          <div>{props.level}</div>
          {props.languages.map((language, index) => (
            <div key={index}>{language}</div>
          ))}
          {props.tools.map((tools, index) => (
            <div key={index}>{tools}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Job;
