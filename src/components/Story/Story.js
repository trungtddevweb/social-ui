import styles from './Story.module.scss';
import classNames from 'classnames/bind';
import Image from '../Image';

const cx = classNames.bind(styles);

const Story = () => {
    const lists = [
        {
            id: 1,
            src: 'https://i.pinimg.com/564x/ea/b8/e5/eab8e502230a8f25c1d15d05805633d2.jpg',
            name: 'Nguyen Thanh Nam',
            storyImg: 'https://i.pinimg.com/750x/49/41/fe/4941fef0e3520690b462987cc63513f4.jpg',
        },
        {
            id: 2,
            src: 'https://i.pinimg.com/564x/a2/09/6f/a2096f81726c982388005443085b03ca.jpg',
            name: 'Phong Tran',
            storyImg: 'https://i.pinimg.com/564x/d7/1f/7f/d71f7f54e667ecb4f4f662c4cc5307a0.jpg',
        },
        {
            id: 3,
            src: 'https://i.pinimg.com/564x/ea/b8/e5/eab8e502230a8f25c1d15d05805633d2.jpg',
            name: 'Hoang Ngoc Yen',
            storyImg: 'https://i.pinimg.com/564x/63/55/99/63559964f83a34f727673abf634d1f5a.jpg',
        },
        {
            id: 4,
            src: 'https://i.pinimg.com/564x/ea/b8/e5/eab8e502230a8f25c1d15d05805633d2.jpg',
            name: 'Jennifer',
            storyImg: 'https://i.pinimg.com/564x/a2/09/6f/a2096f81726c982388005443085b03ca.jpg',
        },
        {
            id: 5,
            src: 'https://i.pinimg.com/564x/ea/b8/e5/eab8e502230a8f25c1d15d05805633d2.jpg',
            name: 'Hoang Hoa',
            storyImg: 'https://i.pinimg.com/736x/4b/ff/c2/4bffc2bea94638f0768ebf2746b78688.jpg',
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {lists.map((item, idx) => (
                    <div className={cx('item')} key={idx}>
                        <Image className={cx('background')} src={item.storyImg} alt="" />
                        <div className={cx('user')}>
                            <Image src={item.src} alt="" className={cx('avt')} />
                            <p className={cx('username')}>{item.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Story;
