import "./aside.scss";
import { useAppSelector } from "../../hooks/hooks";

const Aside = () => {
  const { posts } = useAppSelector((state) => state.posts);
  return (
    <div className="aside">
      <div className="aside__header">
        <div className="aside__header-profile">
          <img
            className="aside__profile-avatar"
            src={posts[0]?.user.avatar}
            alt=""
          />
          <div className="nickname">
          <h3>Скоро</h3>
            <p>{posts[0]?.description}</p>
          </div>
        </div>
        <button>Change</button>
      </div>

      <div className="aside__liner">
        <p>Suggestions for you</p>
        <button>See all</button>
      </div>

     <div className="aside__followers">
     {posts.map(post => <div className="aside__followers-block">
        <div className="followers__block">
            <img src={post.user.avatar} alt="profile" />
            <div className="followers__nickname">
              <h3>{post.user.username}</h3>
              <p>Suggestion for you</p>
            </div>
          </div>
          <button>Follow</button>
      </div>)}
     </div>

      <div className="aside__footer">
        <p>Information · Help · Prisoner · API · Job · Privacity · Conditions · Locations · Trending accounts · Hashtags · Language</p>
        <p id="aside__footer-p">© 2022 INSTAGRAM FROM SIMMXS</p>
      </div>
    </div>
  );
};

export default Aside;
