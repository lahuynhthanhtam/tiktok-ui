// Dùng cho những layout chỉ cần kế thừa header

import Header from "../components/Header";

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                {/* Vì nội dung sẽ thay đổi nên sẽ lấy thèn childrent truyền từ ngoài vô */}
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default HeaderOnly;