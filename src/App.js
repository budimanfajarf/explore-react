import 'App.css';
import { useState } from 'react';
import { useEffect } from 'react';
// import BuiltInHeader from 'components/BuiltInHeader';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
          setIsLoaded(true);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      );
  }, []);

  return (
    <div className="App">
      {/* <BuiltInHeader /> */}

      <main className="App-main">
        {error ? (
          <div>Error: {error.message}</div>
        ) : !isLoaded ? (
          <div>Loading...</div>
        ) : items.length === 0 ? (
          <div>No items found.</div>
        ) : (
          <div>
            {items}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
