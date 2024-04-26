import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Homepage() {
    return (
        <div>
            <div>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Satisfy&display=swap" rel="stylesheet" />
            <style dangerouslySetInnerHTML={{__html: "\n  html {\n    font-family: 'Inter', sans-serif;\n  }\n  /* GTA Text */\n  main .title {\n    text-shadow: 0 0 0.125em rgb(192 38 211 / 0.5), 0 0 0.45em currentColor;\n  }\n  /* Vice City Text */\n  main .cursive {\n    font-family: 'Satisfy', cursive;\n    text-shadow: 0 0 0.125em rgb(192 38 211 / 0.5), 0 0 0.45em currentColor;\n  }\n  /* Reflection Color */\n  main #main_container::before {\n    content: \"\";\n    width:100%;\n    height:100%;\n    top:120%;\n    left:0;\n    position:absolute;\n    transform: perspective(1em) rotateX(40deg) scale(1, 0.35);\n  }\n" }} />
            <main className="grid min-h-screen place-content-center place-items-center overflow-hidden bg-gradient-to-b from-slate-900 to-black">
                <div id="main_container" className="relative grid place-content-center place-items-center gap-2 before:bg-gradient-to-t before:from-teal-500/70 before:via-fuchsia-600 before:to-transparent before:blur-xl before:filter">
                    <h1 className="title text-6xl font-black text-teal-500">THE</h1>
                    <h2 className="cursive text-6xl font-thin text-fuchsia-600">Rick and Morty Website</h2>
                    <Link to = "Characters"><button className="cursive text-6xl font-thin text-green-600 bg-green-400 hover:bg-green-500 focus:bg-green-500 rounded-md px-6 py-3 shadow-md transition-colors duration-300 ease-in-out">Characters</button></Link>
                    <Link to = "Episodes"><button className="cursive text-6xl font-thin text-green-600 bg-green-400 hover:bg-green-500 focus:bg-green-500 rounded-md px-6 py-3 shadow-md transition-colors duration-300 ease-in-out">Episodes</button></Link>
                    <Link to = "locations"><button className="cursive text-6xl font-thin text-green-600 bg-green-400 hover:bg-green-500 focus:bg-green-500 rounded-md px-6 py-3 shadow-md transition-colors duration-300 ease-in-out">Locations</button></Link>
                </div>
            </main>
            </div>
            <Outlet/>
        </div>
    );
}

export default Homepage;