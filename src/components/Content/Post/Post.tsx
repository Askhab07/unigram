import options from "../../../assets/options.svg";
import likes from "../../../assets/likes.svg";
import comments from "../../../assets/comments.svg";
import share from "../../../assets/share.svg";
import save from "../../../assets/save.svg";
import emojis from "../../../assets/emojis.svg";

import './post.scss';

import { useAppSelector } from "../../../hooks/hooks";
import { IPost } from "../../../types/IPost";
import { useState } from "react";

const Post: React.FC<{post: IPost}> = ({post}) => {

  const [isTextMore, setIsTextMore] = useState(false);
  const [isOption, setIsOption] = useState(false);
  const { isLoading } = useAppSelector((state) => state.posts);
  
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="post">
      <div className="post__header">
        <div className="post__header-right">
          <img className="post__profile" src={post.user.avatar} alt="" />
          <h2>{post.user.username}</h2>
        </div>
        {!isOption?
        <img className="options" onClick={() => setIsOption(true)} src={options} alt="" />
        :
        <div className="option__active">
          <img className="options" onClick={() => setIsOption(false)} src={options} alt="" />
        <div className="option__button">
          <button>Edit</button>
          <button>Delete</button>
        </div>
        </div>
        }
      </div>

      <div className="post__img">
        <img src={post.image} alt="" />
      </div>

      <div className="post__main">
        <div className="post__main-icons">
          <div className="icons-left">
            <img src={likes} alt="" />
            <img src={comments} alt="" />
            <img src={share} alt="" />
          </div>
          <img src={save} alt="" />
        </div>

        <div className="post__main-descr">
          <p className="descr-likes">9.999 likes</p>
          <div className="descr-descr">
            {!isTextMore && !(post.description.length < 200)?
            <p>
              <b>{post.user.username}</b>
              {post.description.slice(0, 200)}<span className="more" onClick={() => setIsTextMore(true)}>...more</span>
            </p>
            :
            <p><b>{post.user.username}</b>{post.description}</p>
            }
          </div>

          <p className="descr-comments">{`See ${post.comments.length} comments`}</p>
          <p className="descr-data">9 HOURS AGO</p>
        </div>
      </div>

      <div className="post__footer">
        <div className="footer__form-input">
          <img src={emojis} alt="" />
          <input type="text" placeholder="Add a comment..." />
        </div>
        <button>Post</button>
      </div>
    </div>
  );
};

export default Post;
