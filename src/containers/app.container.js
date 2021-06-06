import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/card-list.component';
import SearchBox from '../components/search-box.component';
import Scroll from '../components/scroll.component';
import ErrorBoundary from '../components/error-boundary.component';
import './app.container.css';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

const App = (props) => {
  const { searchField, onSearchChange, robots, isPending, onRequestRobots } =
    props;
  // const [robots, setRobots] = useState([]);
  // const [searchField, setSearchField] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    onRequestRobots();
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((responce) => responce.json())
    //   .then((users) => setRobots(users));
    console.log(count);
  }, [onRequestRobots, count]); // only run if count changes

  // const onSearchChange = (event) => {
  //   setSearchField(event.target.value);
  // };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return isPending ? (
    <h1>Loading...</h1>
  ) : (
    <div className='tc'>
      <h1 className='f2'>RoboFriends</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
