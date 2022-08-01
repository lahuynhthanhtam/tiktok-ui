import classNames from "classnames/bind";
import image from "../../../../assets/images";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEllipsisVertical, faLanguage, faPersonCircleQuestion, faCoins,
    faGear, faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

//Khi cần dùng tippy ta phải có tên khác nhau. 
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; //Phải import link này mới thay đổi đc backgroundColor


import Button from "../../../Button";
import { faKeyboard, faUser } from "@fortawesome/free-regular-svg-icons";
import Menu from "../../../Popper/Menu";
import { InboxIcon, MessageIcon, PlusIcon } from "../../../Icons";
import Image from "../../../Image";
import Search from "../Search";


const cx = classNames.bind(styles);


function Header() {

    const currentUser = true;

    const MENU_ITEM = [
        {
            icon: <FontAwesomeIcon icon={faLanguage} />,
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
            icon: <FontAwesomeIcon icon={faPersonCircleQuestion} />,
            title: 'Feedback and Help',
            to: '/feedback'
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcut'
        }
    ]

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/profile'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings'
        },
        ...MENU_ITEM,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log out',
            separate: true,
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
                <Search />
                <div className={cx('action')}>
                    <Button text normal className={cx('upload')} leftIcon=
                        {<PlusIcon className={cx('plus')} />}>Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 100]} placement="bottom" content='Message'>
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} placement='bottom' content='Inbox'>
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEM} onChange={handleMenuChange}>
                        {
                            currentUser ? (
                                <Image className={cx('user-avatar')}
                                    src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/e33123c2d612d104e12c5380b469c092~c5_100x100.jpeg?x-expires=1659369600&x-signature=z7IZN53PnvkMZRSvYWwbDdSnbvA%3D'
                                    alt='Phan Uyên Nhi'
                                />
                            ) : (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )
                        }
                    </Menu>
                </div>
            </div>
        </header >
    )
}


export default Header;