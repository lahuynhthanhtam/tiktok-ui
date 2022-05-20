import classNames from "classnames/bind"
import styles from "./Sidebar.module.scss"

const cx = classNames.bind(styles)
function Slidebar() {
    return (
        <div className={cx('wrapper')}>

            <h2>Slidebar</h2>
        </div>
    )

}

export default Slidebar