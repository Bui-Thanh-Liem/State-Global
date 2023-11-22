// Import library
import { useState } from 'react';

// Import my file
import './AppBlog.css';
import Header from './Components/Header';
import Edit from './Components/Edit';

function AppBlog() {
    const [showEdit, setShowEdit] = useState(false);

    return (
        <div className={'AppBlog-container'}>
            {showEdit ? (
                <Edit setShowEdit={setShowEdit} />
            ) : (
                <Header setShowEdit={setShowEdit} />
            )}
        </div>
    );
}

export default AppBlog;
