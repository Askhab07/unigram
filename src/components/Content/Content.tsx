import Post from "./Post/Post";
import { useAppSelector } from "../../hooks/hooks";

const Content = () => {
  const { isLoading, posts } = useAppSelector(state => state.posts)

  

  return (
    <>
      {posts.map(post => <Post post={post}/>)}
    </>
  );
};

export default Content;
