import React from 'react';

export const StatelessComp = (props) => {
  return (
    <div>
      <p>Hello there {props.userName}</p>
    </div>
  );
};