// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [eventService, setEventService] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => {
        setEventService(data.eventServices);
        setIsLoading(false); // Set loading to false when data is fetched
      });
  }, []);

  if (isLoading) {
    return <span className="loading loading-spinner loading-lg text-center"></span> // Render a loader while loading
  }

  return (
    <div className="container mx-auto">
      <div className="card-container grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {eventService.map((card) => (
          <div
            key={card.id}
            className="card bg-base-100 shadow-xl"
            style={{ flex: '1 0 300px', maxHeight: '500px' }}
          >
            <figure>
              <img src={card.imageLink} alt={card.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl font-semibold">{card.name}</h2>
              <h2 className="text-xl text-blue-600">{card.price}</h2>
              <h2 className="text-xl">{card.shortDescription}</h2>
            </div>
            <Link to={`/services/${card.id}`}>
              <button className="w-full bg-pink-600 py-2 text-white font-bold">Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
