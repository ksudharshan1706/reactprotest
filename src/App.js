import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
// import Sudharshan from ''
function App() {
  const users = [
    {
      name: "sudharshan",
      image: "https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg",
    },
    {
      name: "uma",
      image:
        "https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg",
    },
    {
      name: "Sreenu",
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    },
  ];
  return (
    <div className="App">
      {users.map((user) => (
        <Welcome image={user.image} name={user.name} />
      ))}
    </div>
  );
}
function Welcome({ image, name }) {
  // console.log("here", { name });
  return (
    <div>
      <img className="img-dimensions" src={image} alt={name}></img>
      <h1>Hi {name}, 👌😍😁</h1>
      <Counter />
      {/* <DisCounter /> */}
    </div>
  );
}
function Counter() {
  let [like, setLike] = useState(0);
  let [dislike, setDisLike] = useState(0);

  const messageStyle = {
    display: like - dislike >= 10 ? "block" : "none",
  };
  return (
    <div>
      <h2 style={messageStyle}>You are Awesome</h2>
      {like - dislike >= 10 ? <h2>You Are Awesome 😍😍</h2> : null}
      <button onClick={() => setLike(like + 1)}>👍{like}</button>
      <button onClick={() => setDisLike(dislike + 1)}>👎{dislike}</button>

      {/* <h2>{like}</h2> */}
    </div>
  );
}

export default App;
