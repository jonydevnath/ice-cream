import React from 'react'
import classes from './Modal.module.css'

export const Model = ({ children }) => {
    return (
        <div>
            <div className={classes.backdrop} />
            <div className={classes.modalBody}>{children}</div>
        </div>
    )
}
