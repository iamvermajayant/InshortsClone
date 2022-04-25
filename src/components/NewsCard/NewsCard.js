import React from "react";
import './NewsCard.css';

const NewsCard = ({ newsItem }) => {
  
  const fulldate = new Date(newsItem.publishedAt); // Sat  Jan 09 2021  17:45:30  GMT+0530
  var date = fulldate.toString().split(" "); // ["Sat", "Jan", "09", "2021", "17:45:30", "GMT+0530"]
  const hour = parseInt(date[4].substring(0, 2)); //
  const time = hour > 12 ? true : false;
  
  
  return (
    <div className="news-card">
      <img
        alt={newsItem.title}
        src={
          newsItem.urlToImage
            ? newsItem.urlToImage
            : "https://user-images.githubusercontent.com/47315479/81145216-7fbd8700-8f7e-11ea-9d49-bd5fb4a888f1.png"
        }
        className="news-image"
      />
      <div className="news-text">
        <div>
          <span className="news-title">{newsItem.title}</span>
          <span className="author">
            <a href={newsItem.url} target="__blank" className="source">
              <b> Short</b>
            </a>{" "}
            <span className="muted">By- {newsItem.author ? newsItem.author : "unknown"}{" "}
            {time
                ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                : `${hour}:${date[4].substring(3, 5)} am`}{" "}
              on {date[2]} {date[1]} {date[3]}, {date[0]}
            </span>
          </span>
        </div>
        <div className="lower-text">
          <div className="description">
            {newsItem.description}
          </div>
          <span className="readmore"> read more at {" "}
            <a href={newsItem.url} target="__blank" className="source">
              <b>{newsItem.source.name}</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
