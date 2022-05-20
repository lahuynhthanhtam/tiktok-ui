import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publishRoutes } from '../src/routes'
import DefaultLayout from './components/Layout/DefaultLayout'

function App() {
  return (
    <Router>
      <div className="App">
        {/* Lấy dữ liệu từ file routes */}
        <Routes>
          {publishRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            const Page = route.component; // Trả về 1 component nên phải viết hoa 

            if (route.layout) {
              Layout = route.layout
            }
            else if (route.layout === null) {
              Layout = Fragment
            }

            return <Route path={route.path} key={index} element={<Layout>
              <Page />
            </Layout>} />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
