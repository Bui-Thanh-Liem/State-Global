//
import { useSelector } from "react-redux";

//
import "./PostItems.css";
import "../Posts/Posts.css";
import {postsSelector} from "../../redux/selectors";

function PostItems() {

    const posts = useSelector(postsSelector);

    const tags = ["None", "NSFW", "Mood", "Quates", "Shitpost", "None", "NSFW", "Mood", "Quates", "Shitpost"];
    
    return (
        <>  
            <div className="postItems-container">
                {posts.map((post, index) => {
                    return (
                        <div 
                            key={index}
                            className="postItem"
                        >
                            <div className="postItem-header">
                                <p className="postItem-title">{post.title}</p>
                                <button className={`tag-item-${tags[post.tagIndex]}`}>{tags[post.tagIndex]}</button>
                            </div>
                            <p className="postItem-desc">{post.desc}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default PostItems;