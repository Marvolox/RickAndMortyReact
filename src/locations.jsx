import React, { useEffect, useState } from 'react';

function Locations() {
  const [locations, setLocations] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/location?page=${page}`);
        if (!response.ok) {
          throw new Error('Failed to fetch locations');
        }
        const data = await response.json();
        setLocations(data.results);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, [page]);

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Rick and Morty Locations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {locations.map(location => (
          <div key={location.id} className="border border-gray-300 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">{location.name}</h2>
            <p className="mb-1">Type: {location.type}</p>
            <p className="mb-1">Dimension: {location.dimension}</p>
            <p className="mb-1">Residents: {location.residents.length}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <button onClick={handlePrevPage} className="mr-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Previous Page</button>
        <button onClick={handleNextPage} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Next Page</button>
      </div>
    </div>
  );
}

export default Locations;
