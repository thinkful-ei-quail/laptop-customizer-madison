import React from 'react';
import USCurrencyFormat from './USCurrencyFormat';

const total = (selected) => Object.keys(selected).reduce(
  (acc, curr) => acc + selected[curr].cost,
  0
);

export default function Total(props){
  return(
  <div className="summary__total">
    <div className="summary__total__label">Total</div>
    <div className="summary__total__value">
      {USCurrencyFormat.format(total(props.selected))}
    </div>
  </div>
  )
}
