/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

import Years from './DecadeView/Years';

export default function DecadeView(props) {
  function renderYears() {
    return <Years {...props} />;
  }

  return <div className="react-calendar__decade-view">{renderYears()}</div>;
}
