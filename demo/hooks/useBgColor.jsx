import { useEffect, useRef } from 'react';

export default function useBgColor(color) {
  const ref = useRef(typeof window != 'undefined' && document.body.style.backgroundColor);

  useEffect(() => {
    document.body.style.background = color;

    return () => {
      document.body.style.background = ref.current;
    };
  }, [color]);
}
