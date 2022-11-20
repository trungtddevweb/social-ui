import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Button = ({ className, circle = false, to, href, children, icon, text, onClick, ...passProps }) => {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        text,
        circle,
    });

    return (
        <Comp className={classes} {...props}>
            {icon && <div className={cx('icon', { circle })}>{icon}</div>}
            <span className={cx('text')}>{children}</span>
        </Comp>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.node,
    circle: PropTypes.bool,
    to: PropTypes.string,
    href: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
