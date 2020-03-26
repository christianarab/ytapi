import React from 'react';
import logo from '../assets/yt_logo_mono_light.png';


class SearchBar extends React.Component  {
  state = { term: '' };
  // callback event notice oninput change 
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render(){
  return (
  <div className="search-bar ui segment"> 
    <form onSubmit={this.onFormSubmit} className="ui form">
      <div className="field">
        <img alt="youtube" src={logo} style={{padding:'3%'}} />
        <input type="text" placeholder={"Isolation Search"} onChange={this.onInputChange}
        value={this.state.term} style={{padding:'3%'}} /> 
      </div>
    </form>
  </div>);  
  }
}

export default SearchBar;   