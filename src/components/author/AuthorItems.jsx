import React from "react";
import AuthorImage from "../../images/author_thumbnail.jpg";
import NFTCard from "../UI/NFTCard";
import Skeleton from "../UI/Skeleton";

const AuthorItems = ({ author, loading }) => {

  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {loading 
          ? new Array(8).fill(0).map((_, index) => (
            <div 
            className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}
            >
              <Skeleton width="100%" height="350px" borderRadius="12px" />
            </div>
          ))

         : author?.nftCollection?.map((item, index) => (
    <div
      className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
      key={item.nftId || item.id || index}
    >
      <NFTCard
        item={{
          ...item,
          nftId: item.nftId || item.id,
          nftImage: item.nftImage || item.image,
          authorId: item.authorId || author?.authorId,
          authorImage: author?.authorImage || AuthorImage,
          authorName: author?.authorName || "Author Name",
        }}
      />
    </div>
  ))}
        </div>
      </div>
    </div>
  );
};
           

export default AuthorItems;
