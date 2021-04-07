import React from 'react';
import Search from './GetZipCodes.jsx';

const Transport = (props) => (
  <div>
      <h3>A suggested means of transportation between {props.origion} and {props.destination}.</h3>
  </div>
)

export default Transport;