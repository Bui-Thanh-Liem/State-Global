// import from library
import classNames from 'classnames/bind';

// reudux store
import { Provider } from 'react-redux';
import store from "./AppBlogReduxToolkit/redux/store";

// import from mySelf
import styles from './App.module.scss';
import AppBlogReduxToolkit  from "./AppBlogReduxToolkit";
// import AppBlogRedux from './AppBlogRedux';
// import AppBlogUseContext from "./AppBlogUseContext";



// className bind this of styles
const cx  = classNames.bind(styles);

function App() {
    return (
        <div className={cx('wrapper')}>

            {/* <AppBlogUseContext /> */}

            <Provider store={store}>
                {/* <AppBlogRedux /> */}
                <AppBlogReduxToolkit />
            </Provider>
        </div>
    );
}

export default App;
