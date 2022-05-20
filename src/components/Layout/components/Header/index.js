import classNames from "classnames/bind";
import image from "../../../../assets/images";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faSpinner, faCircleXmark, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../../../AccountItem';


import Tippy from '@tippyjs/react/headless'; // different import path!
import React, { useEffect, useState } from "react";
import Button from "../../../Button";


const cx = classNames.bind(styles);


function Header() {
    const [searchResult, setSearchResult] = useState([])


    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    }, [])
    return (

        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={image.logo.default} alt="tiktok" />
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Account</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>

                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input type="text" placeholder="Search accounts and videos "
                            spellCheck={false}
                            onChange={e => { setSearchResult(e.target.value) }}
                        />
                        <button className={cx('close')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy >
                <div className={cx('action')}>
                    <Button normal className={cx('upload')} leftIcon=
                        {<FontAwesomeIcon className={cx('plus')} icon={faPlus}></FontAwesomeIcon>}>Tải lên</Button>
                    <Button primary>Đăng nhập</Button>
                </div>
            </div>
        </header >
    )
}


export default Header;