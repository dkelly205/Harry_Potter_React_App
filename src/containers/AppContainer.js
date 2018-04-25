import React from 'react';
import Heading from '../components/Heading';
import CharacterList from '../components/CharacterList';

class AppContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      characters:[]
    };
  }

  componentDidMount(){
    fetch("http://hp-api.herokuapp.com/api/characters")
    .then(response => response.json())
    .then(json => this.setState({characters: json}))
  }

  render(){
    return (
      <article>
        <Heading title="Harry Potter" handleSelectChange={this.handleSelectChange}
        categories={this.props.categories}/>
        <CharacterList characters={this.state.characters}/>
      </article>
    )
  }
}

export default AppContainer;
