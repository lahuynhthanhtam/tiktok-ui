// Layouts
import headerOnly from "../components/Layout/HeaderOnly"
import NotFound from "../components/Layout/NotFound"

// Pages
import Following from "../pages/Following"
import Home from "../pages/Home"
import Profile from "../pages/Profile"
import Upload from "../pages/Upload"


// Cấu hình router k cần đăng nhập vẫn xem được
const publishRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    // @ là kí tự muốn nối vào (: là những giá trị thay đổi)
    { path: '/@:nickname', component: Profile },
    // Đặt layout để xét cho những trang k dùng layout mặc định
    { path: '/upload', component: Upload, layout: headerOnly },
    // Đặt layout null để k dùng layout mặc định
    { path: '/notfound', component: NotFound, layout: null }
]

// Cấu hình router cần đăng nhập mới xem được
const privateRoutes = [

]


export { privateRoutes, publishRoutes }