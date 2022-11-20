import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Tippy from '@tippyjs/react/headless';
import MenuItem from '~/components/MenuItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

const Search = () => {
    const init = [
        {
            id: 1,
            img: 'https://i.pinimg.com/564x/84/f7/5a/84f75a26550eb9ccaa190d5d93fe4252.jpg',
            text: 'Dang Khoa',
        },
        {
            id: 2,
            img: 'https://i.pinimg.com/564x/84/f7/5a/84f75a26550eb9ccaa190d5d93fe4252.jpg',
            text: 'Dang Khoa',
        },
        {
            id: 3,
            img: 'https://i.pinimg.com/564x/84/f7/5a/84f75a26550eb9ccaa190d5d93fe4252.jpg',
            text: 'Dang Khoa',
        },
        {
            id: 4,
            img: 'https://i.pinimg.com/564x/84/f7/5a/84f75a26550eb9ccaa190d5d93fe4252.jpg',
            text: 'Dang Khoa',
        },
    ];
    const [items, setItems] = useState(init);
    return (
        <div className={cx('wrapper')}>
            <Tippy
                interactive
                placement="bottom"
                duration={[275, 200]}
                render={(attrs) => (
                    <PopperWrapper className={cx('search-result')} tabIndex="-1" {...attrs}>
                        {items.map((item) => (
                            <MenuItem key={item.id} item={item} />
                        ))}
                    </PopperWrapper>
                )}
            >
                <div className={cx('container')}>
                    <input spellCheck={false} className={cx('input')} placeholder="Start typing to search..." />
                    <FeatherIcon className={cx('icon')} size="20" color="#ced4da" icon="search" />
                </div>
            </Tippy>
        </div>
    );
};

export default Search;
