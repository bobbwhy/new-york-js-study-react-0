
import React from 'react';

import './header.component.css';

export const Header = props => {

  const { name } = props;

  return (
    <div className="header header-space">
      <div className="title">This project is: {name}</div>
    </div>
  );
}
