import PropTypes from "prop-types";
import "./Footer.css";

function Footer (props) {
    const {showPosts, setShowPosts} = props;
    return (
        <div className="footer-container" onClick={() => setShowPosts(!showPosts)} >
            {showPosts ? "x" : "+"}
        </div>
    )
}

Footer.propTypes = {
    showPosts: PropTypes.bool,
    setShowPosts: PropTypes.func
}

export default Footer;