const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p><b>total  of exercises {sum}</b></p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) =>
  <>
  { parts.map(part => <Part part={part} key={part.id}/>)}
  </>

  const Course = ({course})=> {
    for (var i = 0, sum = 0; i < course.parts.length; sum += course.parts[i++]);
    console.log(course.parts[0].exercises);
    return (
    <>
    <Header course={course.name}/>
    <Content parts={course.parts}/>
    <Total sum={sum}/>
    </>)
  }

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App