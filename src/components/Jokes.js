import React, { useEffect, useState } from 'react';
import spinner from '../assets/spinner1.jpg';

const Jokes = () => {
  const [joke, setJoke] = useState({});
  const [loading, setLoading] = useState(true);

  const apiUrl = 'https://icanhazdadjoke.com/';

  const getJoke = () => {
    setLoading(true);
    fetch(apiUrl, {
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setJoke(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getJoke(); // Fetch a new joke when the component mounts
  }, []);

  const handleGenerateJoke = () => {
    getJoke(); // Fetch a new joke when the button is clicked
  };

  return (
    <section className="--flex-center --100vh --bg-primary">
      <div className="container --card --bg-light --p">
        <h2>Random Jokes Generator</h2>
        <div className="--line"></div>
        {loading ? (
          <div className="--center-all">
            <img src={spinner} alt="loading" width={100} />
          </div>
        ) : (
          <>
            <h4>Joke id: {joke.id}</h4>
            <p>{joke.joke}</p>
          </>
        )}

        <br />
        <button className="--btn --btn-primary" onClick={handleGenerateJoke}>
          Generate Joke
        </button>
      </div>
    </section>
  );
};

export default Jokes;
