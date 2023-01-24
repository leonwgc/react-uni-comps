import { useEffect, useLayoutEffect } from 'react';
import { isBrowser } from '../dom';
/**
 * 同构 useLayoutEffect
 *
 */

var useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;
export default useIsomorphicLayoutEffect;