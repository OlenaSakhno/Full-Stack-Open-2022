const Part = (props) => {
  return (
    <>
      <p>
        {props.partNo} {props.exercises}
      </p>
    </>
  );
};
const Content = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  return (
    <div>
      <h1>{course}</h1>
      <Part partNo={part1} exercises={exercises1} />
      <Part partNo={part2} exercises={exercises2} />
      <Part partNo={part3} exercises={exercises3} />
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Content />
    </div>
  );
};

export default App;
