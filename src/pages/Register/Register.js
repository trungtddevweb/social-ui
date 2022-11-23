import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button/Button';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

const Register = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Link to={config.routes.home}>
                    <div className={cx('logo-container')}>
                        <FeatherIcon size="36" color="#10d876" icon="zap" />
                        <div className={cx('name-logo')}>Sociala.</div>
                    </div>
                </Link>
                <div className={cx('buttons')}>
                    <Button to={config.routes.login} className={cx('button')}>
                        Login
                    </Button>

                    <Button to={config.routes.register} className={cx('button')}>
                        Register
                    </Button>
                </div>
            </div>
            <div className={cx('container')}>
                <div className={cx('left')}></div>
                <div className={cx('right')}>
                    <div className={cx('form-wrapper')}>
                        <h3 className={cx('heading')}>Create your account</h3>
                        <form className={cx('form')}>
                            <div className={cx('form-group')}>
                                <i className={cx('icon')}>
                                    <FeatherIcon icon="user" />
                                </i>
                                <input type="text" className={cx('input')} placeholder="Your Name" />
                            </div>

                            <div className={cx('form-group')}>
                                <i className={cx('icon')}>
                                    <FeatherIcon icon="mail" />
                                </i>
                                <input type="password" className={cx('input')} placeholder="Your Email Adddress" />
                            </div>
                            <div className={cx('form-group')}>
                                <i className={cx('icon')}>
                                    <FeatherIcon icon="lock" />
                                </i>
                                <input type="password" className={cx('input')} placeholder="Password" />
                            </div>
                            <div className={cx('form-group')}>
                                <div className={cx('wrapper-text')}>
                                    <input type="checkbox" className={cx('input auto')} />
                                    <p>Accecpt Term and Conditions</p>
                                </div>
                            </div>
                        </form>

                        <Button className={cx('login-btn')}>Register</Button>
                        <div className={cx('text')}>
                            <p>Already have account</p>
                            <Link to={config.routes.login}>
                                <span>Login</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
