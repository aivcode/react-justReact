import React, {Fragment, useState} from "react";
import "./Foods.css";
import FoodOrder from "./FoodOrder"


const Foods = (props) => {
  const [selectedFood, setSelectedFood] = useState("");

  const handleSelect = (event) => {
    setSelectedFood(
      props.foodItems.find((item) => {
        return item.id === parseInt(event.currentTarget.dataset.id);
      })
    );
  };

  return (
    /* 
      Fragments in React allow us to group items without having to wrap them
      inside another element, such as a div. Here, in our case, there is no
      need to add a new div. Instead, we can use a fragment. It is important to
      note that fragments do not add extra DOM nodes, whereas a plain <div>
      naturally does. If we want to add styles to the container or if it serves
      some other purpose, we can use a div element as a container. 
    */
    <Fragment>
      {!selectedFood && (
        <>
          <h4 className="foodTitle">Choose from our Menu</h4>
          <ul className="ulFoods">
            {
              props.foodItems.map((item) => {
                return (
                  /*
                    Keys help React identify which items have changed, are added,
                    or are removed. Keys should be given to the elements inside
                    the array to give the elements a stable identity. The best way
                    to pick a key is to use a string that uniquely identifies a
                    list item among its siblings. Most often you would use IDs
                    from your data as keys.
                  */
                  <li
                    className="liFoods"
                    key={item.id}
                    data-id={item.id}
                    onClick={handleSelect}
                  >
                    <img
                      className="foodImg"
                      src={require(`./images/${item.image}`)}
                      alt={item.name}
                    />
                    <div className="foodItem">
                      <p className="foodDesc">{item.desc}</p>
                      <p className="foodPrice">{item.price}$</p>
                    </div>
                  </li>
                );
              })
            }
          </ul>
        </>
      )}

      {selectedFood && (
        <FoodOrder
          food={selectedFood}
          returnToMenu={() => setSelectedFood("")}
        />
      )}
    </Fragment>
  );
};


export default Foods;
