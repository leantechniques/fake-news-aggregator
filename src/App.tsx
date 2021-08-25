import { useEffect, useState } from 'react';
import './App.css';
import { getTweets, Tweet } from './services/tweets-service';

function App() {

  const [tweets, setTweets] = useState<Tweet|undefined>();

  useEffect(() => {
    async function fetchTweets(){
      setTweets(await getTweets());
    }
    fetchTweets();
  }, [setTweets]);

  return (
    <div className="App">
      {tweets?.tweet}
    </div>
  );
}

export default App;
