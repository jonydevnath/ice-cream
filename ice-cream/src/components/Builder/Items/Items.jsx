import React from 'react'
import { Item } from './Item/Item'

export const Items = ({ items, add, remove }) => {
    const flavors = Object.keys(items)
    return (
        <div>
            <ul>
                {/* item */}
                {flavors.map(flavors => <Item key={flavors} name={flavors} add={add} remove={remove }/>)}
                
            </ul>
        </div>

    )
}
