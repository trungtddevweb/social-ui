import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';

const cx = classNames.bind(styles);

const Sidebar = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('section')}>
                <h3 className={cx('title')}>New Feeds</h3>
                <div className={cx('item')}>
                    <div className={cx('wrapper-icon', 'first')}>
                        <FeatherIcon color="white" size="20" icon="tv" />
                    </div>
                    <span className={cx('text')}>Newsfeed</span>
                </div>
                <div className={cx('item')}>
                    <div className={cx('wrapper-icon', 'second')}>
                        <FeatherIcon color="white" size="20" icon="award" />
                    </div>
                    <span className={cx('text')}>Badges</span>
                </div>
                <div className={cx('item')}>
                    <div className={cx('wrapper-icon', 'third')}>
                        <FeatherIcon color="white" size="20" icon="globe" />
                    </div>
                    <span className={cx('text')}>Explore Stories</span>
                </div>
                <div className={cx('item')}>
                    <div className={cx('wrapper-icon', 'four')}>
                        <FeatherIcon color="white" size="20" icon="zap" />
                    </div>
                    <span className={cx('text')}>Pooular Stories</span>
                </div>
                <div className={cx('item')}>
                    <div className={cx('wrapper-icon', 'five')}>
                        <FeatherIcon color="white" size="20" icon="user" />
                    </div>
                    <span className={cx('text')}>Author Profile</span>
                </div>
            </div>
            <div className={cx('section')}>
                <h3 className={cx('title')}>More Pages</h3>
                <div className={cx('item')}>
                    <div className={cx('wrapper-icon')}>
                        <FeatherIcon color="#1e74fd" size="28" icon="inbox" />
                    </div>
                    <span className={cx('text')}>Email Box</span>
                    <span className={cx('count')}>143</span>
                </div>
                <div className={cx('item')}>
                    <div className={cx('wrapper-icon')}>
                        <FeatherIcon color="#1e74fd" size="28" icon="home" />
                    </div>
                    <span className={cx('text')}>Near Hotel</span>
                </div>
                <div className={cx('item')}>
                    <div className={cx('wrapper-icon')}>
                        <FeatherIcon color="#1e74fd" size="28" icon="map" />
                    </div>
                    <span className={cx('text')}>Lastest Event</span>
                </div>
                <div className={cx('item')}>
                    <div className={cx('wrapper-icon')}>
                        <FeatherIcon color="#1e74fd" size="28" icon="youtube" />
                    </div>
                    <span className={cx('text')}>Live Stream</span>
                </div>
            </div>
            <div className={cx('section')}>
                <h3 className={cx('title')}>Account</h3>
                <div className={cx('item')}>
                    <div className={cx('wrapper-icon')}>
                        <FeatherIcon color="#888888" size="20" icon="settings" />
                    </div>
                    <span className={cx('text')}>Settings</span>
                </div>
                <div className={cx('item')}>
                    <div className={cx('wrapper-icon')}>
                        <FeatherIcon color="#888888" size="20" icon="pie-chart" />
                    </div>
                    <span className={cx('text')}>Analytics</span>
                </div>
                <div className={cx('item')}>
                    <div className={cx('wrapper-icon')}>
                        <FeatherIcon color="#888888" size="20" icon="message-square" />
                    </div>
                    <span className={cx('text')}>Chat</span>
                    <span className={cx('count')}>14</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
