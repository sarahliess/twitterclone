import bubble from "../img/bubble.png";
import retweet from "../img/retweet.png";
import heart from "../img/heart.png";
import share from "../img/share.png";

function PostRender({ message }) {
  const dateFormat = new Date(message.date);
  const dateToday = new Date();

  console.log(dateFormat);
  console.log(dateToday);

  return (
    <>
      {message && (
        <div className="Tweet">
          <div className="UserPhotoBlock">
            <img
              className="UserPhoto"
              src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
            />
          </div>
          <div className="TweetInner">
            <div>
              <div className="TweetTop">
                <div className="Name">{message.user.name}</div>
                <div className="NameDate">
                  @{message.user.name} {message.date}
                </div>
              </div>

              <div className="TweetCenter">
                <div className="PostText">{message.text}</div>
                <img
                  className="TweetImage"
                  src="https://techcrunch.com/wp-content/uploads/2019/09/twitter-hidden-replies1.png?w=730&crop=1"
                />
              </div>
            </div>
            <div className="IconGroup">
              <img src={bubble} alt="comment" className="IconPost" />
              <img src={retweet} alt="retweet" className="IconPost" />
              <img src={heart} alt="like" className="IconPost" />
              <img src={share} alt="share" className="IconPost" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PostRender;
