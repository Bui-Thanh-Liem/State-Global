// Import library
import { useState } from 'react';

// Import my file
import './AppBlog.css';
import Header from './Components/Header';
import Edit from './Components/Edit';
import {ContextEdit} from "./Context";
import { initData } from './Components/InitData';

function AppBlog() {
    
    const [showEdit, setShowEdit] = useState(false);
    const [dataEdit, setDataEdit] = useState(initData);



    return (
        <ContextEdit.Provider value={{dataEdit, setDataEdit}}>
            <div className={'AppBlog-container'}>
                {showEdit ? (
                    <Edit setShowEdit={setShowEdit} />
                ) : (
                    <Header setShowEdit={setShowEdit} />
                )}
            </div>
        </ContextEdit.Provider>
    );
}

export default AppBlog;
