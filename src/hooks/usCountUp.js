import React, { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

function useCountUp(ref, end, duration = 2) {
  const [count, setCount] = useState(0);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const endValue = parseInt(end.toString().replace(/,/g, ''));
      if (start === endValue) return;

      const incrementTime = (duration * 1000) / endValue;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === endValue) clearInterval(timer);
      }, incrementTime);
      
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return count;
}

export default useCountUp;
