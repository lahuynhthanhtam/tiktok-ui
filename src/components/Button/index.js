import classNames from "classnames/bind";
import styles from "./Button.module.scss"

import { Link } from "react-router-dom"

const cx = classNames.bind(styles)

function Button({
    to,
    href,
    onClick,
    children,
    primary,
    outline,
    text,
    rounded,
    disabled,
    normal,
    small,
    large,
    className,
    leftIcon,
    rightIcon,

    ...passProps
}) {

    let Component = 'button';

    const propsDefault = {
        onClick,
        ...passProps
    }


    const classes = cx('wrapper', {
        [className]: className, //Custom nút phù hợp với mình
        primary,
        text,
        disabled,
        large,
        small,
        rounded,
        outline,
        normal,

    })

    if (to) {
        propsDefault.to = to
        Component = Link
    }

    if (href) {
        propsDefault.href = href
        Component = 'a'
    }

    return (
        <Component className={cx(classes)} {...propsDefault}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    );
}

export default Button;