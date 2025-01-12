import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    {/* STATIC approach

     let title = "The Good Place";

    function handleChange(event) {
        console.log(event.target.value);
    }*/}

    // a tu bardziej DYNAMIC approach ktory na biezaco wykorzystuje
    // co sie wpisuje w polu tekstowym
    const [title, setTitle] = useState('Wall-E');


    function handleChange(event) {
        setTitle(event.target.value);
    }
    //end

// tutaj dodatkowa wiadomosc zalezna od dlugosci wpisanego filmu
    let message;
    if (title.length < 4) {
    message = <div>Title too short</div>;
    } else if (title.length < 15) {
    message = <div>Title seems OK</div>;
    } else {
    message = <div>Title too long</div>;
    }
    // end

  return (
      <div className="App-head">

          {/* //tu logo albo obrazki

          <img src={logo} className="App-logo" alt="logo"/>
          */}

          <h1>My favorite movies to watch</h1>
          <h2>My favorite movie today is {title}</h2>
          <input type="text" value={title} onChange={handleChange}/>
          { // tu wywolanie tego message

              // 1 sposob
              // title.length > 0 && <div>{message}</div>

              // 2 sposob
              title.length > 0 ? <div>{message}</div> : <div>Title empty</div>
          }


          {/* //tu link wrzucony do innej stronki

          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
              Ucz się Reacta
          </a>
          */}

      </div>

  );
}

export default App;
