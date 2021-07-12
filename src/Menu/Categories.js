import React from 'react';


// { title, category, price, img, desc }
const Categories = ({ categories, filterItems }) => {
  return (
    <div className="menu__btn-container">
      {
        categories.map((category, index) => {
          return (
            <button
              type="button"
              className="menu__filter-btn"
              key={index}
              onClick={() => filterItems(category)}>
              {category}
            </button>
          )
        })
      }
    </div>
  )
};

export default Categories;

