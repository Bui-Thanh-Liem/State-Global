// Import library
import { useState } from 'react';

// Import my file
import './AppBlog.css';
import Header from './Components/Header';
import Edit from './Components/Edit';
import Posts from "./Components/Posts";
import PostItems from './Components/PostItems';
import Footer from "./Components/footer"

function AppBlog() {
    const [showEdit, setShowEdit] = useState(false);
    const [showPosts, setShowPosts] = useState(false);

    return (
        <div className={'AppBlog-container'}>
            {showEdit ? (
                <Edit setShowEdit={setShowEdit} />
            ) : (
                <>
                    <Header setShowEdit={setShowEdit} />

                    <PostItems />

                    {showPosts && <Posts setShowPosts={setShowPosts} />}

                    <Footer showPosts={showPosts} setShowPosts={setShowPosts}/>
                </>
            )}

        </div>
    );
}

export default AppBlog;
