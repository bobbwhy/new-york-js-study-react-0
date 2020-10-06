
import React from 'react';

import './meeting.component.css';

export const Meeting = props => {

  const { meeting } = props;

  console.log( meeting );

  return (
    <div className="meeting">
      <div className="date">{meeting.date}</div>
      <div className="title">{meeting.title ?? 'meeting title pending'}</div>
      <div className="description">{meeting.description ?? 'meeting description pending'}</div>

    </div>
  )
}
