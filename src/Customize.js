import React from 'react';
import Features from './Features';
import FeatureList from './FeatureList';

export default function Customize(props){
  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {Object.keys(FeatureList).map((featureName, idx) => (
        <Features 
          feature={FeatureList[featureName]}
          key={featureName}
          name={featureName}
          idx={idx}
          checked={props.selected[featureName].name}
          updateFeature={props.updateFeature}
        />
      
      ))}
    </form>
  )
}
