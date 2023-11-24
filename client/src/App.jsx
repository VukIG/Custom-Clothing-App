import Main from './components/Main';
import Cart from './components/Cart';
import Designer from './components/Designer';
import DesignView from './components/DesignView';
import Home from './components/Home';
import NotFound from './components/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//bug sa tailwindcss-om

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />}>
            <Route index element={<Home />} />
            <Route path="/designer" element={<Designer />} />
            <Route path="/designer/:clothes" element={<DesignView />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route>
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
