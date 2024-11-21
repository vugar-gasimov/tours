import React from 'react';
import ToursItem from './ToursItem';

const ToursList = ({ tours, setTours }) => {
  const removeHandler = (id) => {
    const filteredTours = tours.filter((tour) => tour.id !== id);
    setTours(filteredTours);
  };

  return (
    <section>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='title-underline'></div>
        <div className='tours'>
          {tours.length > 0 ? (
            tours.map((tour) => (
              <ToursItem
                key={tour.id}
                id={tour.id}
                {...tour}
                removeHandler={removeHandler}
              />
            ))
          ) : (
            <section className='title'>
              <h2>No tours available.</h2>
              <div className='title-underline'></div>
            </section>
          )}
        </div>
      </div>
    </section>
  );
};

export default ToursList;
