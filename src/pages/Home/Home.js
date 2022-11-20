import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Story from '~/components/Story';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const Home = () => {
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
                    <div>Friend Request</div>
                    <div>Confirm Friend</div>
                    <div>Suggest Group</div>
                    <div>Suggest Pages</div>
                    <div>Event </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
