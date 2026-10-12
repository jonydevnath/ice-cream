import React from 'react'
import classes from './Builder.module.css'
import { Items } from './Items/Items'
import { TotalPrice } from './TotalPrice/TotalPrice'
import { Model } from './Modal/Modal'

const Builder = ({ items, price, add, remove, scoops }) => {
  return (
    <div>
      <div className={classes.builder}>
        <h3>Build your own Ice Cream Sundae</h3>

        {/* items start */}
        <Items items={items} add={add} remove={remove} scoops={scoops}/>

        {/* <!-- total price start --> */}
        <TotalPrice price={price} />

        <button type="button" className={[classes.order, "rounded"].join(' ')}>
          Add to Cart
        </button>

      </div>
      <Model> Hello Model</Model>
    </div>
  );
};

export default Builder;