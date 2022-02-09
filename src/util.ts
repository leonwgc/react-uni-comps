import * as React from 'react';
import { isFragment } from 'react-is';

export function toArray(children: React.ReactElement[]): React.ReactNode[] {
  let ret = [];
  React.Children.forEach(children, function (child) {
    if (child === undefined || child === null) {
      return;
    }

    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child));
    } else if (isFragment(child) && child.props) {
      ret = ret.concat(toArray(child.props.children));
    } else {
      ret.push(child);
    }
  });
  return ret;
}

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
export function attachPropertiesToComponent<C, P extends Record<string, any>>(
  component: C,
  properties: P
): C & P {
  const ret = component as any;
  for (const key in properties) {
    if (properties.hasOwnProperty(key)) {
      ret[key] = properties[key];
    }
  }
  return ret;
}
