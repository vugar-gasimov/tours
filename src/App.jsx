import { useEffect, useState } from 'react';
import ToursList from './components/Tours/ToursList';
import Loading from './components/Loading';

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const toursAmount = tours.length;

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const toursData = await response.json();
      setTours(toursData);
    } catch (error) {
      console.log(error?.response?.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />;
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <div className='title-underline'></div>
          <button
            type='button'
            style={{ marginTop: '2rem' }}
            onClick={() => fetchTours()}
            className='btn'
          >
            Fetch Tours
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <h2 className='available'>{toursAmount} Tours available</h2>
      <ToursList tours={tours} setTours={setTours} />
    </main>
  );
};

export default App;
