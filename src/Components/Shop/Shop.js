import React, { useState } from "react";
import Card from "./DressesCards/Card";
import "./Shop.css";
import ShopHero from "./ShopHero/ShopHero";
import dresses from "./dresses.json";
import { Link } from "react-router-dom";

function Shop() {
  const [arrDresses, setDresses] = useState(dresses);
  const [selectedCategory, setSelectedcategory] = useState("");
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    switch (e.target.value) {
      case "Low price":
        setDresses(
          arrDresses.sort((firstDress, nextDress) =>
            firstDress.price > nextDress.price ? 1 : -1
          )
        );
        break;
      case "High price":
        setDresses(
          arrDresses.sort((firstDress, nextDress) =>
            nextDress.price > firstDress.price ? 1 : -1
          )
        );

        break;

      default:
        setDresses(dresses);
    }
  };
  const sizeHandle = (size) => {
    switch (size) {
      case "L":
        setDresses(arrDresses.filter((dress) => dress.size === "L"));
        break;
      case "M":
        setDresses(arrDresses.filter((dress) => dress.size === "M"));
        break;
      case "S":
        setDresses(arrDresses.filter((dress) => dress.size === "S"));
    }
  };

  const categoryHandle = (category) => {
    switch (category) {
      case "Prom":
        setDresses(dresses.filter((dress) => dress.title === "Prom"));
        setSelectedcategory("Prom Dresses");
        break;
      case "Party":
        setDresses(dresses.filter((dress) => dress.title === "Party"));
        setSelectedcategory("Party Dresses");
        break;
      case "Evening":
        setDresses(dresses.filter((dress) => dress.title === "Evening"));
        setSelectedcategory("Evening Dresses");
        break;
      case "Wedding":
        setDresses(dresses.filter((dress) => dress.title === "Wedding"));
        setSelectedcategory("Wedding Dresses");
        break;
      default:
        setDresses(dresses);
    }
  };
  return (
    <React.Fragment>
      <ShopHero />
      <div className="shop-container">
        <div className="bread-crump">
          <Link to="/">Home</Link> / Shop / {selectedCategory}
        </div>
        <aside className="shop-side">
          <div className="categories">
            <h2>Collections</h2>
            <ul>
              <li onClick={() => categoryHandle("All dresses")}>All Dresses</li>
              <li onClick={() => categoryHandle("Prom")}>Prom Dresses</li>
              <li onClick={() => categoryHandle("Party")}>Party Dresses</li>
              <li onClick={() => categoryHandle("Evening")}>Evening Dresses</li>
              <li onClick={() => categoryHandle("Wedding")}>Wedding Dresses</li>
            </ul>
          </div>
          <div className="categories">
            <h2>Sizes</h2>
            <ul>
              <li onClick={() => sizeHandle("L")}>Large</li>
              <li onClick={() => sizeHandle("M")}>Medium</li>
              <li onClick={() => sizeHandle("S")}>Small</li>
            </ul>
          </div>
          <div className="filter">
            <h2>Price Filter</h2>
            <select id="rating-filter" value={value} onChange={handleChange}>
              <option value="Sort">Sort</option>
              <option value="Low price">Low to High</option>
              <option value="High price">High to Low</option>
            </select>
          </div>
        </aside>
        <div className="shop">
          {arrDresses.map((dress, id) => {
            return (
              <Card
                title={dress.title}
                color={dress.color}
                size={dress.size}
                src={dress.img}
                alt={dress.alt}
                price={dress.price}
                key={id}
                id={dress.id}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Shop;
