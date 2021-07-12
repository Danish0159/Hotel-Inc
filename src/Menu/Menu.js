import { useState } from 'react';
import React from 'react';


const Menu = ({ menuItems }) => {

  return (
    <div className='menu__section-center'>
      {menuItems.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <div key={id} className='menu__menu-item'>
            <img src={img} alt={title} className='menu__photo' />
            <div className='menu__item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='menu__price'>${price}</h4>
              </header>
              <p className='menu__item-text'>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;




