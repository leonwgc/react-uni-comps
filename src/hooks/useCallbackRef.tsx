import React, { MutableRefObject, useRef, useEffect } from 'react';

export default function useCallbackRef<T>(callback: T): MutableRefObject<T> {
  const ref = useRef(callback);
  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  return ref;
}
