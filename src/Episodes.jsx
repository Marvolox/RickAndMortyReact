import React from "react";
import { useState,useEffect } from "react";


function Episodes() {
    const [episodes, setEpisodes] = useState([]);
    const [page, setPage] = useState(1);
  
    useEffect(() => {
      const fetchEpisodes = async () => {
        try {
          const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`);
          if (!response.ok) {
            throw new Error('Failed to fetch episodes');
          }
          const data = await response.json();
          setEpisodes(data.results);
        } catch (error) {
          console.error('Error fetching episodes:', error);
        }
      };
  
      fetchEpisodes();
    }, [page]);
  
    const handleNextPage = () => {
      setPage(prevPage => prevPage + 1);
    };
  
    const handlePrevPage = () => {
      setPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
    };
  
    return (
        
        <div className="text-center text-white" style={{ backgroundImage: "url('')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Satisfy&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html: "\n  html {\n    font-family: 'Inter', sans-serif;\n  }\n  /* GTA Text */\n  main .title {\n    text-shadow: 0 0 0.125em rgb(192 38 211 / 0.5), 0 0 0.45em currentColor;\n  }\n  /* Vice City Text */\n  main .cursive {\n    font-family: 'Satisfy', cursive;\n    text-shadow: 0 0 0.125em rgb(192 38 211 / 0.5), 0 0 0.45em currentColor;\n  }\n  /* Reflection Color */\n  main #main_container::before {\n    content: \"\";\n    width:100%;\n    height:100%;\n    top:120%;\n    left:0;\n    position:absolute;\n    transform: perspective(1em) rotateX(40deg) scale(1, 0.35);\n  }\n" }} />
        <main className="grid min-h-screen place-content-center place-items-center overflow-hidden bg-gradient-to-b from-slate-900 to-black">
            <h1 className="text-2xl font-bold mb-4">Rick and Morty Episodes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {episodes.map(episode => (
                <div key={episode.id} className="border border-gray-300 rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-2">{episode.name}</h2>
                <p className="mb-1">Episode: {episode.episode}</p>
                <p className="mb-1">Air Date: {episode.air_date}</p>
                </div>
            ))}
            </div>
            <div className="mt-8">
            <button onClick={handlePrevPage} className="mr-4 px-4 py-2 bg-fuchsia-400 text-white rounded hover:bg-fuchsia-500 hover:text-white focus:bg-fuchsia-500 focus:text-white">Previous Page</button>
            <button onClick={handleNextPage} className="px-4 py-2 bg-fuchsia-400 text-white rounded hover:bg-fuchsia-500 hover:text-white focus:bg-fuchsia-500 focus:text-white">Next Page</button>
            </div>
        </main>
        </div>


    );
  }
  
  

export default Episodes;