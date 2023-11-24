import WelcomeText from './WelcomeText';
import CanvasModel from './CanvasModel';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
function Home() {
  const [focus, setFocus] = useState(false);
  return (
    <div className="box-border">
      <AnimatePresence>
        {!focus && (
          <motion.div key="welcome" initial={{ y: '120%', x: '20%', zIndex: 10 }} exit={{ y: '100%', x: '-100%' }}>
            <WelcomeText
              onClick={(e) => {
                e.preventDefault();
                setFocus((prev) => !prev);
              }}
            />
          </motion.div>
        )}
        <motion.div
          initial={{ x: '50%', height: '50vh' }}
          key="cavas"
          animate={{ x: focus ? '0%' : '27%', y: focus ? '0%' : '-40%', height: '50vh' }}
        >
          <CanvasModel />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Home;
