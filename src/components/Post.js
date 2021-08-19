import {useParams} from 'react-router-dom';
import bubble from '../img/bubble.png';
import retweet from '../img/retweet.png';
import heart from '../img/heart.png';
import share from '../img/share.png';

function Post({messages}){
    const {id}=useParams();
    return(
        <div className="Tweet">
            {messages.filter(message => message.id === id).map(message => 
                <div>
                    <div className="Name">{message.user.name}</div>
                    <div className="NameDate">@username  {message.date}</div>
                    <div className="PostText">{message.text}</div>
                </div>
                )}
            <div className="IconGroup">
                <img src={bubble} alt="comment" className="IconPost"/>
                <img src={retweet} alt="retweet" className="IconPost"/>
                <img src={heart} alt="like" className="IconPost"/>
                <img src={share} alt="share" className="IconPost"/>
            </div>
        </div>
    )
}

export default Post;