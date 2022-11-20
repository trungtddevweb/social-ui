import PropTypes from 'prop-types';
import styles from './OnlineItems.module.scss';
import classNames from 'classnames/bind';
import Image from '../Image';

const cx = classNames.bind(styles);

const OnlineItems = ({ item }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Image src={item.src} className={cx('img')} alt="" />
                <span className={cx('text')}>{item.name}</span>
            </div>
            <span className={cx('state')}>{item.state}</span>
        </div>
    );
};

OnlineItems.propTypes = {
    item: PropTypes.object,
};

export default OnlineItems;
