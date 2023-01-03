const Part = (props) => {
  return (
    <>
      <p>
        {props.partNo} {props.exercises}
      </p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  const Content = () => {
    return (
      <div>
        <h1>{course}</h1>
        <Part partNo={part1.name} exercises={part1.exercises} />
        <Part partNo={part2.name} exercises={part2.exercises} />
        <Part partNo={part3.name} exercises={part3.exercises} />
        <p>
          Number of exercises{" "}
          {part1.exercises + part2.exercises + part3.exercises}
        </p>
      </div>
    );
  };
  return (
    <div>
      <Content />
    </div>
  );
};

export default App;
