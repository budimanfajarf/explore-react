import 'App.css';
import { useState } from 'react';
import { useEffect } from 'react';
// import BuiltInHeader from 'components/BuiltInHeader';
import Alert from 'components/Alert';
import ProductTable from 'components/ProductTable';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  let mounted = true;

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL;

    if (!API_URL) {
      setError(new Error('API URL not defined'));
      return;
    }

    if(!mounted) {
      return;
    }

    fetch(`${API_URL}/themes`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log('result', result);
          setItems(result.data);
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

    // eslint-disable-next-line
    mounted = false;
  }, []);

  return (
    <div className="App">
      {/* <BuiltInHeader /> */}

      <main className="App-main">
        {error ? (
          <Alert message={error.message} type="danger" />
        ) : !isLoaded ? (
          <Alert message="Loading..." />
        ) : items.length === 0 ? (
          <Alert message="No items found" type="warning" />
        ) : (
          // <div>{JSON.stringify(items)}</div>
          <ProductTable products={items} />
        )}
      </main>
    </div>
  );
}

export default App;
