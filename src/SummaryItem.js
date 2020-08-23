import React from 'react';
import USCurrencyFormat from './USCurrencyFormat';


export default function SummaryItem(props){
  return (
    <div className="summary__option" key={props.featureHash}>
      <div className="summary__option__label">{props.name} </div>
      <div className="summary__option__value">{props.option}</div>
      <div className="summary__option__cost">
        {USCurrencyFormat.format(props.cost)}
      </div>
    </div>
  );
}
