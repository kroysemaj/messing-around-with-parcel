import "./styles.scss";
import React from 'react';
import ReactDom from 'react-dom';

const App = () => (
    <h1>Hello, React!</h1>
);

const rootDiv = document.getElementById('root');

ReactDom.render(<App />, rootDiv)