import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import { useState } from "react";

function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  function likeHandler() {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-topleft">
            <img
              className="post-profile-img"
              src={
                Users.filter((el) => el.id === post.userId)[0].profilePicture
              }
              alt=""
            />
            <span className="post-username">
              {Users.filter((el) => el.id === post.userId)[0].username}
            </span>
            <span className="post-date">{post.date}</span>
          </div>
          <div className="post-topright">
            <MoreVert />
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">{post?.desc}</span>
          <img className="post-img" src={post.photo} alt="" />
        </div>
        <div className="post-bottom">
          <div className="post-bottomleft">
            <img
              onClick={likeHandler}
              className="like-icon"
              src="assets/like.png"
              alt=""
            />
            <img
              onClick={likeHandler}
              className="like-icon"
              src="assets/heart.png"
              alt=""
            />
            <span className="post-like-counter">{like} people like it</span>
          </div>
          <div className="post-bottomright">
            <span className="post-comment-text">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
