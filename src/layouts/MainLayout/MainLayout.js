import PropTypes from 'prop-types';
import styles from './MainLayout.module.scss';
import classNames from 'classnames/bind';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Rightbar from '../components/Rightbar';

const cx = classNames.bind(styles);

const MainLayout = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('left')}>
                    <Sidebar />
                </div>
                <div className={cx('main')}>{children}</div>
                <div className={cx('right')}>
                    <Rightbar />
                </div>
            </div>
        </div>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default MainLayout;
