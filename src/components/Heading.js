import React from 'react';

const Heading = (props) => {
  return (
    <div className='heading'>
      {props.title}
      {/* <select className="dropDown" onChange={props.handleSelectChange}>
        {props.genres.map(genre => {
          return <option key={genre.name} value={genre.url}>{genre.name}</option>
        })}
      </select> */}
    </div>
  );
};

export default Heading;
