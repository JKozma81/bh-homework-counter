import React from 'react';
import './CounterButton.css';

export default function CounterButton(props) {
  return (
    <button className="counterBtn" onClick={props.clickHandler}>
      {props.text}
    </button>
  );
}
