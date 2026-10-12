import React from 'react'
import classes from './Scoop.module.css'

export default function Scoop({ scoop }) {
    return (
        <div className={[classes.scoop, classes[scoop]].join(' ')}></div>
    )
}
