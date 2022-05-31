import classNames from "classnames/bind";
import image from "../../../../assets/images";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass, faSpinner, faCircleXmark, faPlus, faEllipsisVertical,
    faLanguage, faPersonCircleQuestion
} from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../../../AccountItem';


import Tippy from '@tippyjs/react/headless'; // different import path!
import React, { useState } from "react";
import Button from "../../../Button";
import { faKeyboard } from "@fortawesome/free-regular-svg-icons";
import Menu from "../../../Popper/Menu";


const cx = classNames.bind(styles);


function Header() {
    const [searchResult, setSearchResult] = useState([])

    const MENU_ITEM = [
        {
            icon: <FontAwesomeIcon icon={faLanguage}></FontAwesomeIcon>,
            title: "English",
            children: {
                title: 'Language',
                data: [
                    {
                        type: 'language',
                        title: 'English',
                        code: 'en',
                    },
                    {
                        type: 'language',
                        title: 'Vietnamese',
                        code: 'vn'
                    }
                ]
            }
        },
        {
            icon: <FontAwesomeIcon icon={faPersonCircleQuestion}></FontAwesomeIcon>,
            title: 'Feedback and Help',
            to: '/feedback'
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
            title: 'Keyboard shortcut'
        }
    ]

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };


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
                    <Button text normal className={cx('upload')} leftIcon=
                        {<FontAwesomeIcon icon={faPlus} className={cx('plus')}></FontAwesomeIcon>}>Tải lên
                    </Button>
                    <Button primary>Đăng nhập</Button>

                    <Menu items={MENU_ITEM} onChange={handleMenuChange}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                        </button>
                    </Menu>
                </div>
            </div>
        </header >
    )
}


export default Header;