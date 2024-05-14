import React from "react";


// card components receive data and onLearnMore function as props
const Card = ({ data, onLearnMore }) => {
  // function to format timestamp  to a human-readable date format
  const formatDate = (timestamp) => {
    // conver timestamp to milliseconds
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="card">
      <div className="card-thumbnail">
        <img src={data.thumbnail?.small} alt="Thumbnail" />
        <div className="overlay-div">
          {/* Trigger onLearnMore function when it is clicked */}
          <span className="learn-more" onClick={() => onLearnMore()}>
            Learn More
          </span>
        </div>
      </div>
      <div className="card-content">
        {/* Display title and trigger onLearnMore function when clicked */}
        <h2 className="card-title" onClick={() => onLearnMore()}>
          {data.title}
        </h2>
        {/* Display content */}
        <p className="card-text">{data.content}</p>
        <div className="card-footer">
          {/* display author information if available */}
          <div className="author-info">
            <span className="author-name">{data.author?.name}</span>
            <span className="author-role">{data.author?.role}</span>
          </div>

          {/* Display formatted date */}
          <span className="data-date">{formatDate(data.date)}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
