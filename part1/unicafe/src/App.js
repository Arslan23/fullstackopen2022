import React, {useState} from 'react';

const Header = ()=>{ return (<h1>give feedback</h1>)}

const Statistics = ({good, neutral, bad})=>{
  const all = good + neutral + bad
  const average  = (good - bad) / all
  const positive = good / all
  
  return (
<div>
<h1>statistics</h1>
{ 
all === 0 ? (
  <p>
  <span>good: {good}</span>
  <br/>
  <span>neutral: {neutral}</span>
  <br/>
  <span>bad: {bad}</span>
  <br/>
  <span>all: {all}</span>
  <br/>
  <span>average: {average}</span>
  <br/>
  <span>positive: {positive}</span>
</p>
) : (
<p>
No feedback given
</p>

)}

</div>

)}

/*
const Button = ({text, clicked })=>{


  const incrementGood = ()=>{ setGood(goo)}
  return (
  <button onClick={clicked}>{text}</button>
  )
}*/
function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = ()=>{
    setGood(good + 1)
  }
  const incrementNeutral = ()=>{
    setNeutral(neutral + 1)}
  const incrementBad = ()=>{
    setBad(bad + 1)}

  return (
   <>
   <Header/>

   <button onClick={incrementGood}>good</button> <button onClick={incrementNeutral}>neutral</button> <button onClick={incrementBad}>bad</button>
   <Statistics good={good}  neutral={neutral}  bad={bad}/>
   </>
  );
}

export default App;
