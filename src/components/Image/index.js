import classNames from "classnames"
import styles from "./Image.module.scss"
import image from "../../assets/images"
import { forwardRef } from "react"


const Image = forwardRef(({ src, alt, className, customImage = image.noImage, ...prop }, ref) => {

    function handleError(e) {
        e.target.src = customImage
    }

    return (
        <>

            <img
                className={classNames(styles.wrapper, className)}
                src={src}
                alt={alt}
                ref={ref}
                onError={e => handleError(e)}
                {...prop}
            />
        </>
    )

})

export default Image