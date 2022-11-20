import PropTypes from 'prop-types';
import styles from './MenuItem.module.scss';
import classNames from 'classnames/bind';
import Image from '../Image';

const cx = classNames.bind(styles);

const MenuItem = ({ item }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Image src={item.img} alt="" className={cx('img')} />
                <div className={cx('content')}>
                    <p className={cx('text')}>{item.text}</p>
                    {item.desc && <span className={cx('desc')}>{item.desc}</span>}
                </div>
            </div>
        </div>
    );
};

MenuItem.propTypes = {
    item: PropTypes.object,
};

export default MenuItem;
