import { useEffect, useState, useRef } from 'react';

const useVisibleComponent = (components) => {
  const [visibleComponent, setVisibleComponent] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          setVisibleComponent(visibleEntries[0].target.getAttribute('data-component'));
          console.log(visibleComponent)

        }
      },
      { threshold: .5} // Adjust this value based on your needs
    );

    components.forEach(component => {
      if (component.current) {
        observer.current.observe(component.current);
      }
    });

    return () => {
      components.forEach(component => {
        if (component.current) {
          observer.current.unobserve(component.current);
        }
      });
    };
  }, [components]);

  return visibleComponent;
};

export default useVisibleComponent;
