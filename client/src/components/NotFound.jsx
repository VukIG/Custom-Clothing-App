import { Link } from 'react-router-dom';
import Button from './Button';
function NotFound() {
  return (
    <>
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-9xl text-red-500">404</h1>

          <h6 className="mb-2 text-2xl font-bold text-centert md:text-3xl">
            <span>Oops!</span>
          </h6>

          <p className="mb-4 text-center text-gray-500 md:text-lg">
            The page you{"'"}re looking for doesn{"'"}t exist.
          </p>

          <Link to="/">
            <Button>Go home</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
