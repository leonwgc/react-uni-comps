/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

import Months from './YearView/Months';

export default function YearView(props) {
  function renderMonths() {
    return <Months {...props} />;
  }

  return <div className="year-view">{renderMonths()}</div>;
}
