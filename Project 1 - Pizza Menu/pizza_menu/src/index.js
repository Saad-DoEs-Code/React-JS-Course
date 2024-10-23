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
    <OpenNow />
  ) : (
    <ClosedNow openHour={openHour} />
  );
}

function OpenNow(){
  return (<div className="order">
    <footer className="footer">{new Date().toLocaleTimeString()}... We are open now!!!</footer>
    <button className="btn">Order</button>
  </div>) 
}

function ClosedNow({openHour}){
  return <footer className="footer">
      {new Date().toLocaleTimeString()}... Sorry, We are closed!!! Will Open at {openHour}
    </footer>
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas =[]
  const numPizzas= pizzas.length;
  return (
    <main className="menu">
      <h2>Menu</h2>
      {/* {pizzas && <ul className="pizzas">
        {pizzaData.map((pizza)=>{
          return <Pizza pizzaObj = {pizza} key={pizza.name}/>
        })}
      </ul> } */}

      {numPizzas >0 ? <ul className={`pizzas`}>
        {pizzaData.map((pizza)=>{
          return <Pizza pizzaObj = {pizza} key={pizza.name}/>
        })}
      </ul>: <p>We are working on our menu, please come back later...</p>}
    </main>
  );
}
function Pizza({pizzaObj}) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out":""}`}>
      <img
        src={pizzaObj.photoName}
        alt={pizzaObj.name}
      />
      <div>
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price }</span>
      </div>
    </li>
  );
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
