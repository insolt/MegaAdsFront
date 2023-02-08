import React from 'react';
import './App.css';

export const App = () => {

  return (
      <>
        <header>
            <p><strong>Mega</strong> Ogloszenia</p>
            <button>Dodaj ogloszenie</button>
            <div className="search">
                <input type="text"/> <button>Search</button>
            </div>
        </header>
        <div className="map">

        </div>
      </>
  );
}

