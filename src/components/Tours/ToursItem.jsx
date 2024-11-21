import React, { useState } from 'react';

const ToursItem = ({ id, image, info, name, price, removeHandler }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className='single-tour'>
      <img src={image} alt={`Img of ${name || 'Undefined'}`} className='img' />
      <p className='tour-price'>${price}</p>

      <div className='tour-info'>
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 300)}...`}{' '}
          <button
            type='button'
            className='info-btn'
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'Show less' : 'Read more'}
          </button>
        </p>
        <button
          type='button'
          onClick={() => removeHandler(id)}
          className='btn btn-block delete-btn'
        >
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default ToursItem;
