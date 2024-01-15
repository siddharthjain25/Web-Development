import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", "Banana", ...citrus, "Coconut"];

const fullName = {
  fName: "Siddharth",
  lName: "Jain"
}

const user = {
  ...fullName,
  id: 1,
  username: "siddharth25op"
}

console.log(user);