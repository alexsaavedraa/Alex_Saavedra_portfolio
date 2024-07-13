import React, { useState, useEffect } from 'react';
import Terminal from 'react-animated-term';
import './Background.css';

const spinner = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
let val = 0;
let prev = ""
let oldTime = new Date();

const BackgroundT = ({ visibleComponent }) => {
  console.log("the vis component that background sees is" , visibleComponent)
  const [termLines, setTermLines] = useState([
    {
      text: 'cd Alexander_Saavedra_Portfolio',
      cmd: true,
      delay: 0,
    },
  ]);

  useEffect(() => {
    const curr = new Date();
    if (prev !== visibleComponent && curr - oldTime > 100){
      oldTime = new Date;
      prev = visibleComponent
      val += 1;
    }
    setTermLines([
      {
        text: `cd ../${visibleComponent || 'Home'}`,
        cmd: true,
        replay: false,

      },
    ]);
  }, [visibleComponent]);

  return (
    <div className='animated_bg'>
      <Terminal
        key={val} // Force re-render by changing key
        lines={termLines}
        white
        interval={10}
      />
    </div>
  );
};

export default BackgroundT;
