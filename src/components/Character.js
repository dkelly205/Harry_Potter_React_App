import React from 'react';

class Character extends React.Component{
render(){
  const {altTag} = `Image of ${this.props.name}`;

  return(

    <div className="character">

      <img
        src={this.props.image}
        alt={altTag}
      />
      <h3>{this.props.name}</h3>
      <h4>{this.props.house}</h4>
      <h4>{this.props.ancestry}</h4>

    </div>
  );
}

}

export default Character;
