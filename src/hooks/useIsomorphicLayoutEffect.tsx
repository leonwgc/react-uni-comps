import { useEffect, useLayoutEffect } from 'react';
import { isBrowser } from '../dom';

/**
 * 同构 useLayoutEffect
 *
 */
const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
