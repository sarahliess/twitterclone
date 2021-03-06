import { Link } from "react-router-dom";

import PostRender from "./PostRender";

function Home({ messages }) {
  console.log(messages);
  return (
    <div className="Feed">
      {messages.map((message) => (
        <Link to={`/tweets/${message._id}`} key={message._id}>
          <PostRender message={message} />
        </Link>
      ))}
    </div>
  );
}

export default Home;
