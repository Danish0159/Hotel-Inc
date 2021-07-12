import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => {
    return (
        <div>
            <div className="tour__title">
                <h2>our tours</h2>
                <div className="tour__underline"></div>
            </div>
            <div>
                {tours.map((tour) => {
                    return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
                })}
            </div>
        </div>
    );
};

export default Tours;