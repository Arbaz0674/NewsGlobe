import React from "react";

const NewsItem = (props) => {
  const dateConv = (origDate) => {
    let d = new Date(origDate);
    return d.toString().split(" ").splice(0, 5).join(" ");
  };
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <img
          src={
            imageUrl
              ? imageUrl
              : `https://thumbs.dreamstime.com/z/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg`
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <span className="badge text-bg-info">{source}</span>
          <h5 className="card-title">
            {title.length < 83 ? title : `${title}...`}
          </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {dateConv(date)}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-primary btn-warning"
            rel="noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

// 863141b831d34fa5aa81fdf00014fc93
