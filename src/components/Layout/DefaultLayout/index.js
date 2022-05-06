// Đây là Layout mặc định chiếm đa số trang trong website

import Header from "../components/Header";
import Slidebar from "./Sidebar";

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Slidebar />
                {/* Vì nội dung sẽ thay đổi nên sẽ lấy thèn childrent truyền từ ngoài vô */}
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout;