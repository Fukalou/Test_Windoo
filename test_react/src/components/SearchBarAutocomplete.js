import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Autosuggest from "react-autosuggest";
import MyCard from "./MyCard";

class SearchBarAutocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      suggestions: props.ideas,
    };
    console.log(this.state);
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  renderInputComponent = (inputProps) => {
    return <input {...inputProps} type="text" />;
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value),
    });
  };

  getSuggestionValue = (suggestion) => suggestion;

  renderSuggestion = (suggestion) => <MyCard suggestion={suggestion} />;

  getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    const titles = this.props.ideas.map((idea) => idea.title);

    let rep =
      inputLength === 0
        ? []
        : this.props.ideas.filter(
            (idea) =>
              idea.title.toLowerCase().slice(0, inputLength) === inputValue
          );

    return rep;
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  onSuggestionsSelected = (ev, { suggestionValue }) => {
    console.log(suggestionValue.title);
  };

  render() {
    const { value } = this.state;

    const inputProps = {
      placeholder: "Selectionnez votre idée",
      value,
      onChange: this.onChange,
    };

    return (
      <Autosuggest
        suggestions={this.state.suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        getSuggestionValue={this.getSuggestionValue}
        inputProps={inputProps}
        renderInputComponent={this.renderInputComponent}
        renderSuggestion={this.renderSuggestion}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={this.onSuggestionsSelected}
        alwaysRenderSuggestions={true}
      />
    );
  }
}

export default SearchBarAutocomplete;
