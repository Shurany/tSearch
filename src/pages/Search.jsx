import React from 'react';
import Header from "../components/Header";
import Profiles from "../components/Profiles";
import Filters from "../components/Filters";
import ScrollTop from "../components/ScrollTop";
import PropTypes from "prop-types";
import RootStore from "../stores/RootStore";
import {inject, observer} from "mobx-react";
import SearchStore from "../stores/SearchStore";
import SearchPage from "../components/SearchPage";


@inject('rootStore')
@observer
class Search extends React.Component {
  constructor(props) {
    super(props);

    /**@type SearchStore*/
    this.searchStore = props.rootStore.createSearch(props.query);
  }
  componentWillUnmount() {
    this.props.rootStore.destroySearch(this.searchStore);
    this.searchStore = null;
  }
  render() {
    let searchQuery = null;
    if (
      this.props.rootStore.profile &&
      this.props.rootStore.profile.trackersIsReady
    ) {
      searchQuery = (
        <SearchQuery searchStore={this.searchStore}>
          {this.searchStore.resultPages.map((searchPage, index) => {
            return (
              <SearchPage key={`search-page-${index}`} searchStore={this.searchStore} searchPage={searchPage}/>
            );
          })}
        </SearchQuery>
      );
    }

    return (
      <div>
        <Header {...this.props}/>
        <div className="content content-row">
          <div className="parameter_box">
            <Profiles/>
            <Filters/>
          </div>
          <div className="main">
            {searchQuery}
            Search...
          </div>
        </div>
        <ScrollTop/>
      </div>
    );
  }
}

Search.propTypes = null && {
  rootStore: PropTypes.instanceOf(RootStore)
};


@inject('rootStore')
@observer
class SearchQuery extends React.Component {
  componentDidMount() {
    this.props.searchStore.fetchResults();
  }
  render() {
    return this.props.children || null;
  }
}

SearchQuery.propTypes = null && {
  rootStore: PropTypes.instanceOf(RootStore),
  searchStore: PropTypes.instanceOf(SearchStore),
};

export default Search;