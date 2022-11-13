import React, { useState } from "react";

const Header = () => {
  return <h1> give feedback </h1>;
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100 + ' %';
  if(all === 0)
  {
    return (<div>
    <h1>
        statistics
        </h1>
    <p>
         No feedback given
    </p>

  </div>
  )
  }
  return (
    <div>
      <h1> statistics </h1>
        <table>
        <tbody>
          <tr>
            <td><StatisticLine text="good" value={good}/></td>
          </tr>
          <tr>
            <td><StatisticLine text="neutral" value={neutral}/></td>
            </tr>
            <tr>
            <td><StatisticLine text="bad" value={bad}/></td>
            </tr>
            <tr>
            <td><StatisticLine text="all" value={all}/></td>
            </tr>
            <tr>
            <td><StatisticLine text="average" value={average}/></td>
            </tr>
            <tr>
            <td><StatisticLine text="positive" value={positive}/></td>
          </tr>
          </tbody>
        </table>
    </div>
  );
};


const StatisticLine =  ({text, value})=>{ return (<span> {text}: {value} </span>)}


const Button = ({text, clicked})=> <button onClick={clicked}>{text}</button>

const App = () =>{
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementGood = () => {
    setGood(good + 1);
  };
  const incrementNeutral = () => {
    setNeutral(neutral + 1);
  };
  const incrementBad = () => {
    setBad(bad + 1);
  };

  return (
    <>
      <Header/>
      <Button text="good" clicked={incrementGood}/>
      <Button text="neutral" clicked={incrementNeutral}/>
      <Button text="bad" clicked={incrementBad}/>
      <Statistics good={good} neutral={neutral}  bad={bad} />
    </>
  );
}

export default App;
