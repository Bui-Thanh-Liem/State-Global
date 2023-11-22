import "./Header.css";
import { useContext } from "react";
import { ContextEdit } from "../../Context";

function Header(prop) {

    //
    const { setShowEdit } = prop;

    //
    const {dataEdit} = useContext(ContextEdit);
    
    return (
        <>
            <div style={{backgroundColor: dataEdit.theme, backgroundImage: `linear-gradient(to top, #333, ${dataEdit.theme})`}} className="header-container">
                <button onClick={() => setShowEdit(true)} className="btn-edit">Edit</button>
                <img className="info-avatar" src={dataEdit.avatar} alt="" />
                <div className="info">
                    <h2 className="info-name">{dataEdit.user}</h2>
                    <p className="info-age"> {dataEdit.age}<span> Tuổi</span></p>
                    <p className="info-about">{dataEdit.about}</p>
                </div>
            </div>
        </>
    )
}

export default Header;