// import PropTypes from 'prop-types';
import styles from './Post.module.scss';
import classNames from 'classnames/bind';
import Image from '../Image';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';

const cx = classNames.bind(styles);

const Post = (props) => {
    return (
        <article className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <div className={cx('user')}>
                        <Image
                            className={cx('avt')}
                            src="https://i.pinimg.com/564x/2d/9f/06/2d9f06a667082586798f72a85e6c3eea.jpg"
                            alt=""
                        />
                        <div className={cx('info')}>
                            <p className={cx('username')}>Anthony Daugloi</p>
                            <span className={cx('date')}>2 hours ago</span>
                        </div>
                    </div>
                    <div className={cx('more')}>
                        <FeatherIcon icon="more-horizontal" />
                    </div>
                </div>
                <div className={cx('content')}>
                    <p className={cx('cutoff-content')}>
                        lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem
                        ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum
                        dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                        sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip
                    </p>
                    <input className={cx('expand-text')} type="checkbox" />

                    <Image
                        className={cx('img-content')}
                        src="https://i.pinimg.com/564x/bf/6f/e8/bf6fe8b4f136975924fca4a7a6474fb2.jpg"
                        alt=""
                    />
                </div>
                <div className={cx('actions')}>
                    <div className={cx('emotion')}>
                        <div className={cx('item')}>
                            <i className={cx('emotion-icon', 'blue')}>
                                <FeatherIcon color="#fff" size="18" icon="thumbs-up" />
                            </i>
                            <span>2.8k Like</span>
                        </div>
                        <div className={cx('item')}>
                            <i className={cx('emotion-icon')}>
                                <FeatherIcon size="18" icon="message-circle" />
                            </i>
                            <span>2.8k Comment</span>
                        </div>
                    </div>
                    <div className={cx('emotion')}>
                        <div className={cx('item')}>
                            <i className={cx('emotion-icon')}>
                                <FeatherIcon size="18" icon="share-2" />
                            </i>
                            <span>Share</span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

// Post.propTypes = {};

export default Post;
