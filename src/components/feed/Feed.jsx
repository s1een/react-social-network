import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../dummyData";

function Feed() {
  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share />
        {Posts.map((el) => (
          <Post key={el.id} post={el} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
