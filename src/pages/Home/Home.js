import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Story from '~/components/Story';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import Image from '~/components/Image';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

const Home = () => {
    const listUsers = [
        {
            id: 1,
            name: 'John',
            mutual: 12,
        },
        {
            id: 1,
            name: 'John',
            mutual: 12,
        },
        {
            id: 1,
            name: 'John',
            mutual: 12,
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <Story />
                    <div className={cx('createPost')}>
                        <div className={cx('top')}>
                            <div className={cx('title')}>
                                <div className={cx('icon-wrapper')}>
                                    <FeatherIcon className={cx('text-primary')} size="18" icon="edit-3" />
                                </div>
                                <p className={cx('text')}>Create Post</p>
                            </div>
                            <div className={cx('message')}>
                                <Image
                                    className={cx('avt')}
                                    src="https://i.pinimg.com/564x/02/39/ef/0239ef97a400bf7f61894e5afb6e906a.jpg"
                                />
                                <textarea className={cx('textarea')} placeholder="What's on your mind?"></textarea>
                            </div>
                        </div>
                        <div className={cx('bottom')}>
                            <div className={cx('actions')}>
                                <div className={cx('left')}>
                                    <div className={cx('item')}>
                                        <FeatherIcon size="22px" color="#e50202" icon="video" />
                                        <span>Live Video</span>
                                    </div>
                                    <div className={cx('item')}>
                                        <FeatherIcon size="22px" color="#10d876" icon="image" />
                                        <span>Photo/Video</span>
                                    </div>
                                    <div className={cx('item')}>
                                        <FeatherIcon size="22px" color="#fe9431" icon="camera" />
                                        <span>Feeling/Activity</span>
                                    </div>
                                </div>
                                <div className={cx('right')}>
                                    <div className={cx('more-wrapper')}>
                                        <FeatherIcon icon="more-horizontal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>Posts</div>
                </div>
                <div className={cx('sidebar')}>
                    <div className={cx('section')}>
                        <div className={cx('heading')}>
                            <h3 className={cx('text-heading')}>Friend Request</h3>
                            <p className={cx('more')}>See all</p>
                        </div>
                        {listUsers.map((user, index) => (
                            <div key={index} className={cx('user')}>
                                <div className={cx('info')}>
                                    <Image
                                        className={cx('avt-wrapper')}
                                        src="https://i.pinimg.com/564x/0e/46/c1/0e46c1c4aa2bc8c1963364834a95fd90.jpg"
                                        alt=""
                                    />
                                    <div className={cx('name')}>
                                        <p className={cx('username')}>{user.name}</p>
                                        <span className={cx('mutual')}>{user.mutual} mutual friends</span>
                                    </div>
                                </div>
                                <div className={cx('buttons')}>
                                    <Button className={cx('button')}>Confirm</Button>
                                    <Button className={cx('button')}>Delete</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={cx('section')}>
                        <div className={cx('heading')}>
                            <h3 className={cx('text-heading')}>Confirm Friend</h3>
                            <p className={cx('more')}>See all</p>
                        </div>
                        {listUsers.map((user, index) => (
                            <div key={index} className={cx('user')}>
                                <div className={cx('info')}>
                                    <Image
                                        className={cx('avt-wrapper')}
                                        src="https://i.pinimg.com/564x/0e/46/c1/0e46c1c4aa2bc8c1963364834a95fd90.jpg"
                                        alt=""
                                    />
                                    <div className={cx('name')}>
                                        <p className={cx('username')}>{user.name}</p>
                                        <span className={cx('mutual')}>{user.mutual} mutual friends</span>
                                    </div>
                                </div>
                                <div className={cx('buttons')}>
                                    <Button className={cx('button')}>Confirm</Button>
                                    <Button className={cx('button')}>Delete</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>Suggest Group</div>
                    <div>Suggest Pages</div>
                    <div>Event </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
