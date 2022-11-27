import logo from './logo.svg';
import './App.css';
// import Sudharshan from ''
function App() {
  return (
    <div className='App'>
      <Welcome name = "sudharshan" image = "https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg"/>
      <Welcome name = "uma" image ="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg"/>
      <Welcome name="Sreenu" image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
      </div>
  )
function Welcome({image,name}){
  // let name = "sudharshan";
  // const{image,name} = props
  return (
    <div>
      <img className='img-dimensions' src={image} alt={name}></img>
      <h1>Hi {name}, 👌😍😁</h1>
      </div>
  )
}
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
