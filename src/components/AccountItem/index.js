// File này sẽ viết riêng cho thèn drop down search

import classNames from "classnames/bind"
import styles from "./AccountItem.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"


const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/440e526bfc9861f8f636652c24287edd~c5_100x100.jpeg?x-expires=1652972400&x-signature=QuDoEgzCO8OvBLT6asTQcLEUpGo%3D"
                alt="avatar-tiktok" />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Phan Uyên Nhi</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('username')}>Phan Uyên Nhi</span>
            </div>
        </div>
    );
}

export default AccountItem;