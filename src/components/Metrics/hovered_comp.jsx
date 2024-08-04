import { useEffect, useState, useRef } from 'react';
import trackVisitor from './trackVisitors';


let curr = new Date();
let prev = null;



const useHoveredComponent = (components) => {
  const [hoveredComponent, setHoveredComponent] = useState(null);

  useEffect(() => {
    const handleMouseEnter = (event) => {
      const component = event.target.getAttribute('data-component');
      setHoveredComponent(component);
      if( prev !== component){
       prev = component
       const now = new Date();
       console.log(now - curr);
      trackVisitor([component, now-curr]);}
      curr = new Date();
    };

    const handleMouseLeave = () => {
      setHoveredComponent(null);
    };

    components.forEach(component => {
      if (component.current) {
        component.current.addEventListener('mouseenter', handleMouseEnter);
        component.current.addEventListener('mouseleave', handleMouseLeave);
      }
    });

    return () => {
      components.forEach(component => {
        if (component.current) {
          component.current.removeEventListener('mouseenter', handleMouseEnter);
          component.current.removeEventListener('mouseleave', handleMouseLeave);
        }
      });
    };
  }, [components]);

  return hoveredComponent;
};

export default useHoveredComponent;
