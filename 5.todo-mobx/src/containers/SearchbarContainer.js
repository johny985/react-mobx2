import React, { Component } from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { inject, observer } from "mobx-react";
import autobind from "autobind-decorator";

@inject("todoStore")
@observer
@autobind
class SearchbarContainer extends Component {
  onChangeSearchText(searchText) {
    this.props.todoStore.setSearchText(searchText);
  }

  render() {
    return (
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={(e) => this.onChangeSearchText(e.target.value)}
      />
    );
  }
}

export default SearchbarContainer;
