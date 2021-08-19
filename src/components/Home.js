import {Link} from 'react-router-dom';
import Post from './Post';

function Home ({messages}) {
    console.log(messages);
    return(
        
        <div className="Feed">
        {messages.map(message => (
            <Link to={`/tweets/${message.id}`}>
                <Post messages={messages}/>
            </Link>))}
        </div>
        
    )
}

export default Home;