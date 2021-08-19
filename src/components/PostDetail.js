import { useParams } from "react-router-dom";
import PostRender from "./PostRender";

function PostDetail({ messages }) {
  const { id } = useParams();
  return (
    <>
      {messages
        .filter((message) => message.id === id)
        .map((message) => (
          <PostRender message={message} />
        ))}
    </>
  );
}

export default PostDetail;
