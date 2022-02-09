import * as React from 'react';
export declare function toArray(children: React.ReactElement[]): React.ReactNode[];
/**
 * attach static props to component
 *
 * @export
 * @template C
 * @template P
 * @param {C} component
 * @param {P} properties
 * @return {*}  {(C & P)}
 */
export declare function attachPropertiesToComponent<C, P extends Record<string, any>>(component: C, properties: P): C & P;
