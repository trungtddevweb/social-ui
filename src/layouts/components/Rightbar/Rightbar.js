import styles from './Rightbar.module.scss';
import classNames from 'classnames/bind';
import OnlineItems from '~/components/OnlineItems';
// import FeatherIcon from 'feather-icons-react/build/FeatherIcon';

const cx = classNames.bind(styles);

const Rightbar = () => {
    const inits = [
        {
            id: 1,
            name: 'Son Dang',
            src: 'https://i.pinimg.com/564x/dd/d8/59/ddd8596a2c962e48d76fcdece1b6b0b6.jpg',
            state: '13m',
        },
        {
            id: 1,
            name: 'Son Dang',
            src: 'https://i.pinimg.com/564x/dd/d8/59/ddd8596a2c962e48d76fcdece1b6b0b6.jpg',
            state: '13m',
        },
        {
            id: 1,
            name: 'Son Dang',
            src: 'https://i.pinimg.com/564x/dd/d8/59/ddd8596a2c962e48d76fcdece1b6b0b6.jpg',
            state: '13m',
        },
        {
            id: 1,
            name: 'Son Dang',
            src: 'https://i.pinimg.com/564x/dd/d8/59/ddd8596a2c962e48d76fcdece1b6b0b6.jpg',
            state: '13m',
        },
        {
            id: 1,
            name: 'Son Dang',
            src: 'https://i.pinimg.com/564x/dd/d8/59/ddd8596a2c962e48d76fcdece1b6b0b6.jpg',
            state: '13m',
        },
        {
            id: 1,
            name: 'Son Dang',
            src: 'https://i.pinimg.com/564x/dd/d8/59/ddd8596a2c962e48d76fcdece1b6b0b6.jpg',
            state: '13m',
        },
        {
            id: 1,
            name: 'Son Dang',
            src: 'https://i.pinimg.com/564x/dd/d8/59/ddd8596a2c962e48d76fcdece1b6b0b6.jpg',
            state: '13m',
        },
    ];

    const inits2 = [
        {
            id: 1,
            name: 'Son Dang',
            src: 'https://i.pinimg.com/564x/dd/d8/59/ddd8596a2c962e48d76fcdece1b6b0b6.jpg',
            state: '13m',
        },
        {
            id: 1,
            name: 'Son Dang',
            src: 'https://i.pinimg.com/564x/dd/d8/59/ddd8596a2c962e48d76fcdece1b6b0b6.jpg',
            state: '13m',
        },
        {
            id: 1,
            name: 'Son Dang',
            src: 'https://i.pinimg.com/564x/dd/d8/59/ddd8596a2c962e48d76fcdece1b6b0b6.jpg',
            state: '13m',
        },
    ];

    const inits3 = [
        {
            id: 1,
            name: 'Son Dang',
            src: 'https://i.pinimg.com/564x/dd/d8/59/ddd8596a2c962e48d76fcdece1b6b0b6.jpg',
            state: '13m',
        },
        {
            id: 1,
            name: 'Son Dang',
            src: 'https://i.pinimg.com/564x/dd/d8/59/ddd8596a2c962e48d76fcdece1b6b0b6.jpg',
            state: '13m',
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h3 className={cx('title')}>CONTACTS</h3>
                {inits.map((init, idx) => (
                    <OnlineItems key={idx} item={init} />
                ))}
                <h3 className={cx('title')}>GROUPS</h3>
                {inits2.map((init, idx) => (
                    <OnlineItems key={idx} item={init} />
                ))}
                <h3 className={cx('title')}>PAGES</h3>
                {inits3.map((init, idx) => (
                    <OnlineItems key={idx} item={init} />
                ))}
            </div>
        </div>
    );
};

export default Rightbar;
