import { Outlet } from 'react-router-dom';
import Header from './Header';

function Main() {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
