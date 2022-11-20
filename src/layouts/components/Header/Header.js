import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import FeatherIcon from 'feather-icons-react';
import Search from '../Search/Search';
import config from '~/config';
import { Link, NavLink } from 'react-router-dom';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Tippy from '@tippyjs/react/headless';
import MenuItem from '~/components/MenuItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

const Header = () => {
    const init = [
        {
            id: 1,
            img: 'https://i.pinimg.com/564x/84/f7/5a/84f75a26550eb9ccaa190d5d93fe4252.jpg',
            text: 'Dang Khoa',
            desc: 'Theres a way to do it using unofficia',
        },
        {
            id: 2,
            img: 'https://i.pinimg.com/564x/84/f7/5a/84f75a26550eb9ccaa190d5d93fe4252.jpg',
            text: 'Dang Khoa',
            desc: 'Theres a way to do it using unofficia',
        },
        {
            id: 3,
            img: 'https://i.pinimg.com/564x/84/f7/5a/84f75a26550eb9ccaa190d5d93fe4252.jpg',
            text: 'Dang Khoa',
            desc: 'Theres a way to do it using unofficia',
        },
        {
            id: 4,
            img: 'https://i.pinimg.com/564x/84/f7/5a/84f75a26550eb9ccaa190d5d93fe4252.jpg',
            text: 'Dang Khoa',
            desc: 'Theres a way to do it using unofficia',
        },
    ];
    const [items, setItems] = useState(init);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('left')}>
                    <Link to={config.routes.home}>
                        <div className={cx('logo-container')}>
                            <FeatherIcon size="36" color="#10d876" icon="zap" />
                            <div className={cx('name-logo')}>Sociala.</div>
                        </div>
                    </Link>
                    <div className={cx('menu')}>
                        <div className={cx('search')}>
                            <Search />
                        </div>
                        <nav className={cx('navigation')}>
                            <NavLink className={cx('icon')} to={config.routes.home}>
                                <FeatherIcon size="25" icon="home" />
                            </NavLink>
                            <NavLink className={cx('icon')} to={config.routes.stories}>
                                <FeatherIcon size="25" icon="zap" />
                            </NavLink>
                            <NavLink className={cx('icon')} to={config.routes.videos}>
                                <FeatherIcon size="25" icon="video" />
                            </NavLink>
                            <NavLink className={cx('icon')} to={config.routes.profile}>
                                <FeatherIcon size="25" icon="user" />
                            </NavLink>
                            <NavLink className={cx('icon')} to={config.routes.shop}>
                                <FeatherIcon size="25" icon="shopping-bag" />
                            </NavLink>
                        </nav>
                    </div>
                </div>
                <div className={cx('right')}>
                    <div>
                        <Tippy
                            interactive
                            placement="bottom-end"
                            render={(attrs) => (
                                <PopperWrapper className={cx('menu-tippy')} tabIndex="-1" {...attrs}>
                                    <h3 className={cx('title')}>Notifications</h3>
                                    {items.map((item) => (
                                        <MenuItem key={item.id} item={item} />
                                    ))}
                                </PopperWrapper>
                            )}
                        >
                            <div className={cx('right-icon')}>
                                <FeatherIcon size="28" icon="bell" />
                            </div>
                        </Tippy>
                    </div>
                    <i className={cx('right-icon')}>
                        <FeatherIcon size="28" icon="message-square" />
                    </i>
                    <i className={cx('right-icon')}>
                        <FeatherIcon size="28" icon="settings" />
                    </i>
                    <img
                        src="https://i.pinimg.com/564x/3e/78/80/3e78802dab36a0a83b4cf2f074aa31e8.jpg"
                        alt=""
                        className={cx('user')}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
