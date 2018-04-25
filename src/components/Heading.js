import React from 'react';

const Heading = (props) => {
  return (
    <div className='heading'>
      {props.title}
      <select className="dropDown" onChange={props.handleSelectChange}>
        {props.categories.map(category => {
          return <option key={category.name} value={category.url}>{category.name}</option>
        })}
      </select>
    </div>
  );
};

export default Heading;
