// Đây là Layout mặc định chiếm đa số trang trong website
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Header from "../components/Header";
import Slidebar from "./Sidebar";

const cx = classNames.bind(styles)
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Slidebar />
                {/* Vì nội dung sẽ thay đổi nên sẽ lấy thèn childrent truyền từ ngoài vô */}
                <div className={cx("content")}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout;