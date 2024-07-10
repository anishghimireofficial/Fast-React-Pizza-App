import React from "react";
import Pizza from "./Pizza";
import pizzaData from "../data";

const Menu = () => {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. Creative dishes to choose from. All from
            our stone oven , all organic ,all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => {
              return <Pizza pizzaObj={pizza} key={pizza.name} />;
            })}
          </ul>
        </>
      ) : (
        <p>We're Still working on our menu. please come back later :)</p>
      )}
    </main>
  );
};

export default Menu;
