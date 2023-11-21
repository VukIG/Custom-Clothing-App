import WelcomeText from './WelcomeText';
import CanvasModel from './CanvasModel';
function Home() {
  return (
    <div className="h-screen flex items-center justify-around mt-[-100px]">
      <WelcomeText />
      <CanvasModel />
    </div>
  );
}

export default Home;
