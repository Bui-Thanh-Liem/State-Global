import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import InputGoup from '../InputGroup';

import "./Posts.css";
import postSlice from '../../redux/postSlice';


function Posts(props) {
    const { setShowPosts } = props;

    // 
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [tagIndex, setTagIndex] = useState(0);

    // 
    const dispatch = useDispatch();
    
    //
    const tags = ["None", "NSFW", "Mood", "Quates", "Shitpost", "None", "NSFW", "Mood", "Quates", "Shitpost"];


    // Handle evetns

    const handlePost = (e) => {
        e.preventDefault();
        if(title) {
            setShowPosts(false);
            dispatch(postSlice.actions.createPost({
                title,
                desc,
                tagIndex
            }))
        }
    }
    
    
    const handleBtnTagClick = (e, index) => {
        e.preventDefault();
        setTagIndex(index)
    }
    
    
    return (
        <>
            <div className="posts-container">
                <form action="" onSubmit={handlePost}>
                    <div className="header">
                        <h3 className="posts-title">
                            Posts Form
                        </h3>
                        <button
                            type="submit"
                            className="btn-posts"
                        >
                            Post
                        </button>
                    </div>
                    <div className="input-container">
                        <InputGoup
                            value={title}
                            setValue={setTitle}
                            label="Title"
                        />
                        <InputGoup
                            value={desc}
                            setValue={setDesc}
                            type="textarea"
                            label="Descriptions"
                        />
                    </div>
                    <label htmlFor="" className='tags-title'>Tags</label>
                    <div className="tags-container">
                        {tags.map((tag, index) => {
                            return (
                                <button 
                                    key={index} 
                                    className={ index === tagIndex ? `tag-item-active`:`tag-item-${tag}`}
                                    onClick={(e) => handleBtnTagClick(e, index)}
                                >
                                    {tag}
                                </button>
                            )
                        })}
                    </div>
                </form>
            </div>
        </>
    );
}

Posts.propTypes = {
    setShowPosts: PropTypes.func
}


export default Posts;