 import React from "react";
 import ReactDOM from 'react-dom';
 import JokeGenerator from "./jokeGenerator";

/* const App = () => {
   <div style={ styles }>
     <JokeGenerator />
   </div>
 };*/

 ReactDOM.render(
     <React.StrictMode>
         <JokeGenerator />
     </React.StrictMode>,
     document.getElementById('root')
 );