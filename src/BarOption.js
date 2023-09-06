import React from 'react';
import './BarOption.css';

function BarOption({active, text, Icon }) {
  console.log(Icon);
  return (
    <div className= {`baroption ${active && 'baroption--active'}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default BarOption
