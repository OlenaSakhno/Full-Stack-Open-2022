import { useState } from "react";
import { Routes, Link, Route, useMatch, useNavigate } from "react-router-dom";

//import components
import { AnecdoteList, About, Footer, Anecdote } from "./components/components";

//import hooks
import { useField } from "./hooks";

const Menu = ({ anecdotes, addNew, anecdote, notification }) => {
  console.log("selected anecdote", anecdote);
  const padding = {
    paddingRight: 15,
    fontSize: 20,
  };
  return (
    <div>
      <div>
        <Link style={padding} to="/">
          anecdotes
        </Link>
        <Link style={padding} to="/createNew">
          create new
        </Link>
        <Link style={padding} to="/about">
          about
        </Link>
        {/* {user
          ? <em>{user} logged in</em>
          : <Link style={padding} to="/login">login</Link>
        } */}
      </div>

      <Routes>
        <Route
          path="/anecdotes/:id"
          element={<Anecdote anecdote={anecdote} />}
        />
        <Route
          path="/"
          element={
            <AnecdoteList anecdotes={anecdotes} notification={notification} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/createNew"
          element={<CreateNew addNew={addNew} />}
          // element={user ? <Users /> : <Navigate replace to="/login" />}
        />
        {/* <Route path="/login" element={<Login onLogin={login} />} /> */}
      </Routes>
    </div>
  );
};

//   <div>
//     <h2>Anecdotes</h2>
//     <ul>
//       {anecdotes.map((anecdote) => (
//         <li key={anecdote.id}>{anecdote.content}</li>
//       ))}
//     </ul>
//   </div>
// );

// const About = () => (
//   <div>
//     <h2>About anecdote app</h2>
//     <p>According to Wikipedia:</p>

//     <em>
//       An anecdote is a brief, revealing account of an individual person or an
//       incident. Occasionally humorous, anecdotes differ from jokes because their
//       primary purpose is not simply to provoke laughter but to reveal a truth
//       more general than the brief tale itself, such as to characterize a person
//       by delineating a specific quirk or trait, to communicate an abstract idea
//       about a person, place, or thing through the concrete details of a short
//       narrative. An anecdote is "a story with a point."
//     </em>

//     <p>
//       Software engineering is full of excellent anecdotes, at this app you can
//       find the best and add more.
//     </p>
//   </div>
// );

// const Footer = () => (
//   <div>
//     Anecdote app for <a href="https://fullstackopen.com/">Full Stack Open</a>.
//     See{" "}
//     <a href="https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js">
//       https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js
//     </a>{" "}
//     for the source code.
//   </div>
// );

const CreateNew = (props) => {
  const content = useField("content");
  const author = useField("author");
  const info = useField("info");

  // const [content, setContent] = useState("");
  // const [author, setAuthor] = useState("");
  // const [info, setInfo] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    });
    navigate("/");
  };
  const handleReset = (e) => {
    e.preventDefault();
    content.reset();
    author.reset();
    info.reset();
  };
  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content} />
        </div>
        <div>
          author
          <input {...author} />
        </div>
        <div>
          url for more info
          <input {...info} />
        </div>
        <button type="submit">create</button>
        <button type="reset" onClick={handleReset}>
          reset
        </button>
      </form>
    </div>
  );
};

const App = () => {
  const match = useMatch("/anecdotes/:id");
  console.log("match=>", match);
  const [anecdotes, setAnecdotes] = useState([
    {
      content: "If it hurts, do it more often",
      author: "Jez Humble",
      info: "https://martinfowler.com/bliki/FrequencyReducesDifficulty.html",
      votes: 10,
      id: 1,
    },
    {
      content: "Premature optimization is the root of all evil",
      author: "Donald Knuth",
      info: "http://wiki.c2.com/?PrematureOptimization",
      votes: 0,
      id: 2,
    },
  ]);
  const anecdote = match
    ? anecdotes.find((anecdote) => anecdote.id === Number(match.params.id))
    : null;
  console.log("anecdote=>", anecdote);

  const [notification, setNotification] = useState("");

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000);
    setAnecdotes(anecdotes.concat(anecdote));
    setNotification(anecdote.content);
    setTimeout(() => setNotification(""), 3000);
  };

  const anecdoteById = (id) => anecdotes.find((a) => a.id === id);

  const vote = (id) => {
    const anecdote = anecdoteById(id);

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };

    setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)));
  };

  return (
    <div>
      <h1>Software anecdotes</h1>
      <Menu
        anecdotes={anecdotes}
        addNew={addNew}
        anecdote={anecdote}
        notification={notification}
      />
      <Footer />
    </div>
  );
};

export default App;
