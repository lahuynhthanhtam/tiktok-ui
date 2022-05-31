import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./HeaderMenu.module.scss"

const cx = classNames.bind(styles)

function HeaderMenu({ title, onBack }) {
    return (
        <header className={cx('wrapper')}>
            <button className={cx('btn-back')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>

        </header>
    );
}

export default HeaderMenu;