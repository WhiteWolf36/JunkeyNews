import React, { Component } from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="card">
      <span
        className="position-absolute top-0 translate-middle badge  bg-primary"
        style={{ left: "15%" }}
      >
        {source}
      </span>
      <img
        src={imageUrl}
        className="card-img-top img-fluid"
        alt="..."
        style={{ height: `20vh`, width: `100%` }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a
          href={newsUrl}
          target="_blank"
          className="btn btn-outline-dark btn-sm"
        >
          Read more
        </a>
        <p className="card-text">
          <small className="text-body-secondary my-3">
            By {author} at {new Date(date).toTimeString()}.
          </small>
        </p>
      </div>
    </div>
  );
};

export default NewsItem;
