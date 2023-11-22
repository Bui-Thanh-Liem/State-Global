import './Edit.css';
import InputGoup from '../InputGroup';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { initData } from '../InitData';
import actionUpdateData from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectorEdit } from '../../redux/selectors';

const urlAvatar = [
    'https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a',
    'https://preview.redd.it/fc9k38jwfwv51.png?auto=webp&s=9ce3d4c488091bb21969fd0fad7a6d89e4bfc50d',
    'https://preview.redd.it/se39g98mljw51.png?auto=webp&s=758dfe2b0a2df439b06b68533e763f413d58b46c',
    'https://preview.redd.it/5es1lne1du261.png?width=640&crop=smart&auto=webp&s=e6eb0ee5710710000e4fbace119112de63324a38',
    'https://i.redd.it/7ipyf6pvqac61.png',
    'https://i.redd.it/ksmb0m02ppy51.png',
    'https://preview.redd.it/cpwkbke13vv51.png?auto=webp&s=9158e49b35ad2581d840efd2a013a9ead06abbc7',
    'https://preview.redd.it/26s9eejm8vz51.png?auto=webp&s=e38d32ee0ffa0666fade2abd62ed59037c119990',
];

function Edit(prop) {
    //
    const { setShowEdit } = prop;
    const dataEdit = useSelector(selectorEdit);
    const dispatch = useDispatch();

    //
    const [user, setUser] = useState(initData.user);
    const [age, setAge] = useState(initData.age);
    const [about, setAbout] = useState(initData.about);
    const [avatar, setAvatar] = useState(initData.avatar);
    const [theme, setTheme] = useState(initData.theme);


    const handleSubmit = (e) => {
        e.preventDefault();
        setShowEdit(false);
        dispatch(actionUpdateData({ user, age, about, avatar, theme }));
    };

    useEffect(() => {
        setUser(dataEdit.user)
        setAge(dataEdit.age)
        setAbout(dataEdit.about)
        setAvatar(dataEdit.avatar)
        setTheme(dataEdit.theme)
    },[dataEdit])

    return (
        <>
            <div className="edit-container">
                <form action="" onSubmit={handleSubmit}>
                    <div className="header">
                        <h3 style={{ color: theme }} className="edit-title">
                            Edit Profile
                        </h3>
                        <button
                            type="submit"
                            onSubmit={handleSubmit}
                            className="btn-save">
                            Save
                        </button>
                    </div>
                    <div className="input-container">
                        <InputGoup
                            value={user}
                            setValue={setUser}
                            label="UserName"
                        />
                        <InputGoup value={age} setValue={setAge} label="Age" />
                        <InputGoup
                            value={about}
                            setValue={setAbout}
                            type="textarea"
                            label="About"
                        />

                        <label className="title-ava">Avatar</label>
                        <div className="input-ava">
                            {urlAvatar.map((url, i) => (
                                <img
                                    onClick={(e) => setAvatar(e.target.src)}
                                    className={classNames('ava', {
                                        active: url == avatar,
                                    })}
                                    key={i}
                                    src={url}
                                />
                            ))}
                        </div>

                        <label>Color: </label>
                        <input
                            value={theme}
                            type="color"
                            onChange={(e) => setTheme(e.target.value)}
                        />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Edit;
