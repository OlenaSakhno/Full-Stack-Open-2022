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
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  const Content = () => {
    return (
      <div>
        <h1>{course}</h1>
        <Part partNo={parts[0].name} exercises={parts[0].exercises} />
        <Part partNo={parts[1].name} exercises={parts[1].exercises} />
        <Part partNo={parts[2].name} exercises={parts[2].exercises} />
        <p>
          Number of exercises{" "}
          {parts[0].exercises + parts[1].exercises + parts[2].exercises}
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
