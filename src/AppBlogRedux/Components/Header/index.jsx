import "./Header.css";
import { selectorEdit } from '../../redux/selectors';

import { useSelector } from "react-redux";

function Header(prop) {

    //
    const { setShowEdit } = prop;

    //
    const {user, age, about, avatar, theme} = useSelector(selectorEdit);
    
    return (
        <>
            <div style={{backgroundColor: theme, backgroundImage: `linear-gradient(to top, #333, ${theme})`}} className="header-container">
                <button onClick={() => setShowEdit(true)} className="btn-edit">Edit</button>
                <img className="info-avatar" src={avatar} alt="" />
                <div className="info">
                    <h2 className="info-name">{user}</h2>
                    <p className="info-age"> {age}<span> Tuổi</span></p>
                    <p className="info-about">{about}</p>
                </div>
            </div>
        </>
    )
}

export default Header;