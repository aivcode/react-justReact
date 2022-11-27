import React, {Fragment, useState} from "react";
import styled from "styled-components";
import Foods from "./Foods";
import appStyles from"./App.module.css";


export const foodItemsContext = React.createContext();

const StyledToggleButton = styled.button`
  float: left;
  margin: 5px 0px 0px 3px;
  align-items: center;
  padding: 6px 14px;
  border-radius: 8px;
  border: none;
  color: #fff;
  background-color: #367af6;
  cursor: pointer;
`;

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

  /*
    When using the hook useMediaQuery, the isLapOrDesktop variable returns true
    if the screen size is greater than or equal to 1224px. Likewise, isMobile
    returns true if the screen size is less than or equal to 480px.
  */
  const [isChooseFoodPage, setIsChooseFoodPage] = useState(false);


  return (
    /*
      This tag means that our parent div element, including its children, is
      now included inside of the preceding tag. In this context provider, we
      put the value as menuItems. Therefore, the menuItems object is now 
      provided in this context.
    */
    <foodItemsContext.Provider value={menuItems}>
      <div className={appStyles.App}>

        <button className={appStyles.toggleButton} onClick={() => setIsChooseFoodPage
        (!isChooseFoodPage)}>
          {isChooseFoodPage ? "Availability Check" : "Order Food"}
        </button> 

        {/* styled component example
        {/* <StyledToggleButton
          onClick={() => setIsChooseFoodPage(!isChooseFoodPage)}
        >
          {isChooseFoodPage ? "Availability Check" : "Order Food"}
        </StyledToggleButton> */}


        <h3 className={appStyles.title}>Just Food Online Shop</h3>
        {!isChooseFoodPage && 
          <>
            <h4 className={appStyles.subTitle}>Menu Availability</h4>
            <ul className={appStyles.ulApp}>
              {
                menuItems.map((item) => {
                  return (
                    <li key={item.id} className={appStyles.liApp}>
                      {item.name} - {item.quantity}
                    </li>
                  );
                })
              }
            </ul>
          </>
        }
        {isChooseFoodPage && 
          <Foods
            foodItems={menuItems}
          >
          </Foods>}
      </div>
    </foodItemsContext.Provider>
  );
};


export default App;
