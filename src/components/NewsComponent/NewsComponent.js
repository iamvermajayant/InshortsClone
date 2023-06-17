import React from "react";
import Container from "@material-ui/core/Container";
import "./NewsComponent.css";
import NewsCard from "../NewsCard/NewsCard";

const NewsComponent = ({ newsArray, newsResult, loadMore, setLoadMore }) => {
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloaded-message">
          <span className="download-text">
            For the best experience use <b>inshorts</b> app on your smartphone
          </span>
          <img
            alt="app store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
          />
          <img
            alt="play store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
          />
        </div>
        {newsArray?.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}
 
         {loadMore <= newsResult && (
          <>
          <hr />
            <button
              className="btn loadMore"
              onClick={() => setLoadMore(loadMore + 10)}
            >
              Load More
            </button>
          </>
         )}
      </div>
    </Container>
  );
};

export default NewsComponent;
