import React from "react";
import ReactDOM from "react-dom";
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
    // const style = {color:"red", fontSize:"8rem"};
    const style = {}
  return <header className="header">
    <h1 style={style}>Fast React Pizza Co.</h1>
  </header>;
}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour)
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return { isOpen } ? (
    <footer className="footer">{new Date().toLocaleTimeString()}... We are open now!!!</footer>
  ) : (
    <footer className="footer">
      {new Date().toLocaleTimeString()}... Sorry, We are closed!!!
    </footer>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Menu</h2>
      {/* To pass anything as props other than a STRING, we use JS Curly Braces {} */}
      <Pizza name="Focaccia" ingredients='Bread with italian olive oil and rosemary' image="pizzas/focaccia.jpg" price={10} />
    </main>
  );
}
function Pizza(_props) {
  return (
    <div className="pizza">
      <img
        src={_props.image}
        alt="focaccia pizza"
      />
      <div>
      <h3>{_props.name}</h3>
      <p>{_props.ingredients}</p>
      <span>{_props.price}</span>
      </div>
    </div>
  );
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
