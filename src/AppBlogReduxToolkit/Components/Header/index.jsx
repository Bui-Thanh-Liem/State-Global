//
import { useSelector } from "react-redux";

//
import "./Header.css";
import { userSelector } from "../../redux/selectors";

function Header(prop) {

    //
    const { setShowEdit } = prop;

    // 
    const dataUser = useSelector(userSelector)

    const {user, age, about, avatar, theme} = dataUser;
    
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