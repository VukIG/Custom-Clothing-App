import Button from './Button';

function WelcomeText({ onClick }) {
  return (
    <div>
      <div className="flex flex-col items-left max-w-md">
        <h1 className="text-5xl font-extrabold mb-5">Design Time!</h1>
        <p>
          Design your own clothes using our amazing AI-powered designer. Be it socks, sweatpants, or shirts, you can
          upload your own images or prompt the AI to do it for you! Express your uniqueness through your outfit today!
        </p>
        <Button onClick={onClick} className="flex justify-start w-1/4 mt-3">
          Start now!
        </Button>
      </div>
    </div>
  );
}

export default WelcomeText;
