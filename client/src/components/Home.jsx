import WelcomeText from './WelcomeText';
import CanvasModel from './CanvasModel';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
function Home() {
  const [focus, setFocus] = useState(false);
  return (
    <div className='box-border'>
      <AnimatePresence>
        {!focus && (
          <motion.div key="welcome" 
          initial={{ y: '60%', x: '20%', zIndex: 10 }} 
          exit={{ y: '60%', x: '-100%' }}
          >
            <WelcomeText
              onClick={(e) => {
                e.preventDefault();
                setFocus((prev) => !prev);
              }}
            />
          </motion.div>
        )}
        <motion.div
          initial={{ y: '-50%', x: '27%', height: '70vh' }}
          key="cavas">
          <CanvasModel />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Home;
