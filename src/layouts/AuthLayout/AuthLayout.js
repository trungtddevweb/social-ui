import PropTypes from 'prop-types';
import styles from './AuthLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const AuthLayout = ({ children }) => {
    return <div className={cx('wrapper')}>{children}</div>;
};

AuthLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthLayout;
