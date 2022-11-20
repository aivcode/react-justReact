import React, {useState} from "react";
import "./App.css";


const App = () => {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Chiken Burger",
      quantity: 40,
      desc: "Fried chicken burger - lettuce, tomato, cheese, mayonnaise",
      price: "24",
      image: "cb.jpg",
    },
    {
      id: 2,
      name: "Veg Burger",
      quantity: 30,
      desc: "Plant-based burger - lettuce, tomato, vegan cheese, mayonnaise",
      price: "22",
      image: "vb.jpg",
    },
    {
      id: 3,
      name: "Chips",
      quantity: 50,
      desc: "Potato chips fried to perfection",
      price: "7",
      image: "chips.jpg",
    },
    {
      id: 4,
      name: "Ice Cream",
      quantity: 30,
      desc: "Ice cream - Vanilla ice cream double scoop",
      price: "4",
      image: "ic.jpg",
    },
  ]);

  return (
    <div className="App">
      <h3 className="title">Just Food Online Shop</h3>
      <h4 className="subTitle">Menu Avialibility</h4>
      <ul className="ulApp">
        {
          menuItems.map((item) => {
            return (
              <li key={item.id} className="liApp">
                {item.name} - {item.quantity}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default App;
