import React, { useState, useEffect } from 'react';
import CardList from '../components/card-list.component';
import SearchBox from '../components/search-box.component';
import Scroll from '../components/scroll.component';
import ErrorBoundary from '../components/error-boundary.component';
import './app.container.css';

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((responce) => responce.json())
      .then((users) => setRobots(users));
    console.log(count);
  }, [count]); // only run if count changes

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return !robots.length ? (
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
export default App;
