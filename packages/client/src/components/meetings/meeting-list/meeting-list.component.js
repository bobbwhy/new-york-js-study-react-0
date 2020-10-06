
import React from 'react';


import { fakeMeetings } from '../../../fake/meetings.log';

import { HeaderBlank } from '../../header/header-blank.component';
import { Meeting } from '../meeting/meeting.component';

import './meeting-list.component.css';

export const MeetingList = props => {

  const MeetingItems = fakeMeetings.map( ( meeting, i ) => (
      <Meeting key={`key_${i}`} meeting={meeting} />
    )
  );


  return (
    <>
      <HeaderBlank />
      <h2>Meetings List</h2>
      <div className="meeting-list">
        { MeetingItems.map( meetingItem => meetingItem ) }
      </div>
  </>
  )
}
