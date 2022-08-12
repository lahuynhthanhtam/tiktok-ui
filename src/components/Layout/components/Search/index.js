import { useEffect, useRef, useState } from "react"
import AccountItem from "../../../AccountItem"
import HeadlessTippy from '@tippyjs/react/headless'; // different import path! 
import { Wrapper as PopperWrapper } from '../../../Popper';
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./Search.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchIcon } from "../../../Icons";
import useDebounce from "../../../../hooks/useDebounce";

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResults, setShowResults] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500)

    const inputRef = useRef()
    const cx = classNames.bind(styles)

    useEffect(() => {

        if (!debounced.trim()) {
            setSearchResult([])
            return
        }

        setLoading(true)
        // Nếu để người dùng nhập parameter tùy ý ta nên dùng hàm encodeURIComponet() để chuyển
        // các ký tự đặc biệt khi nhập thành các giá trị hợp lệ
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
            .then(res => res.json())
            .then(res => {
                setSearchResult(res.data);
                setLoading(false)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [debounced])


    function handleClose() {
        setSearchValue('')
        setSearchResult([])
        inputRef.current.focus()
    }

    function handleHideResult() {
        setShowResults(false)
    }

    const handleValueSearch = (e) => {
        const valueSearch = e.target.value;
        if (!valueSearch.startsWith(' ')) {
            setSearchValue(valueSearch)
        }
    }

    const handleSubmitSearch = (e) => {
        e.preventDefault();
    }
    return (
        <HeadlessTippy
            interactive
            visible={showResults && searchValue.length > 0}
            render={(attrs) => (
                <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Account</h4>
                        {
                            searchResult.map((results) => (
                                <AccountItem key={results.id} data={results} />
                            ))
                        }
                    </PopperWrapper>

                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input ref={inputRef}
                    value={searchValue}
                    type="text"
                    placeholder="Search accounts and videos "
                    spellCheck={false}
                    onChange={e => handleValueSearch(e)}
                />
                {searchValue && !loading &&
                    (
                        <button className={cx('close')} onClick={handleClose}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')} onMouseDown={e => handleSubmitSearch(e)}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy >

    )
}

export default Search;