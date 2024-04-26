import React, { useEffect, useState } from 'react';

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        if (!response.ok) {
          throw new Error('Failed to fetch characters');
        }
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, [page]);

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Rick and Morty Characters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {characters.map(character => (
          <div key={character.id} className="border border-gray-300 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">{character.name}</h2>
            <img src={character.image} alt={character.name} className="mx-auto mb-2" style={{ maxWidth: '200px' }} />
            <p className="mb-1">Status: {character.status}</p>
            <p className="mb-1">Species: {character.species}</p>
            <p className="mb-1">Location: {character.location.name}</p>
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

export default Characters;
