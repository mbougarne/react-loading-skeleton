import React from 'react'
import './skeleton.css'

const Skeleton = ({ type }) => {
    let classnames = `skeleton ${type}`
    return <div className={classnames}></div>
}

export default Skeleton