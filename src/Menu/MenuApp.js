import React, { useState } from 'react';
// import './index.css'
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// Set Creates Collection of Unique values.
const allCategories = ['all', ...new Set(items.map((item) => item.category))];



// App component
function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);


  // The Category button pressed by the User.
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }


  return (
    <main className="menu__section">
      <section>
        {/* Title */}
        <div className="menu__title">
          <h2>Our Menu</h2>
          <div className="menu__underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}></Categories>
        <Menu menuItems={menuItems}></Menu>
      </section>
    </main>
  )
}

export default App;
