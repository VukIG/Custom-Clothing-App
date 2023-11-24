import { Outlet } from 'react-router-dom';
import Header from './Header';

function Main() {
  return (
    <div className='bg-slate-100 h-screen'>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
