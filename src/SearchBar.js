import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: "" };

  onFormSubmit(event) {
    event.preventDefault();

    // console.log(this.state.searchTerm)
    this.props.onSubmitCallback(this.state.searchTerm);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={e => this.onFormSubmit(e)}>
          <div className="field">
            <label>Search Image</label>
            <input 
              type="text"
              value={this.state.searchTerm}
              onChange={e => this.setState({searchTerm: e.target.value})}
            />
          </div>
        </form>
        
      </div>
    );
  }
}

export default SearchBar;