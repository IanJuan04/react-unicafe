import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import Display from "./components/Display";
import Heading from "./components/heading";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const voteGood = () => setGood(good + 1);
  const voteNeutral = () => setNeutral(neutral + 1);
  const voteBad = () => setBad(bad + 1);

  const total = good + neutral + bad;

  const Statistics = () => {
    if (total === 0) {
      return <p>No feedback given!</p>;
    }

    return (
      <div>
        <Display text="good" count={good} />
        <Display text="neutral" count={neutral} />
        <Display text="bad" count={bad} />

        <Display text="all" count={good + neutral + bad} />
        <Display text="average" count={(good - bad) / total} />
        <Display text="positive" count={`${(good / total) * 100}%`} />
      </div>
    );
  };

  return (
    <div>
      <Heading text="Give feed back" />
      <Button text="good" handleClick={voteGood} />
      <Button text="neutral" handleClick={voteNeutral} />
      <Button text="bad" handleClick={voteBad} />

      <Heading text="Statistics" />
      <Statistics />
    </div>
  );
}

export default App;
