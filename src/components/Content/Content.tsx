import Post from "./Post/Post";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useEffect } from "react";
import { getPosts } from "../../store/reducers/postAction";

const Content = () => {
  const dispatch = useAppDispatch()
  const { isLoading, posts } = useAppSelector(state => state.posts)

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {posts.map(post => <Post post={post}/>)}
    </>
  );
};

export default Content;
