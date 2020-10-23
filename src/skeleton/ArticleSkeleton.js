import React from 'react'
import Skeleton from './Skeleton'
import Schemer from './Schemer/Schemer'

const ArticleSkeleton = ({ theme }) => {

    let classnames = `skeleton-wrapper ${theme || 'light'}`

    return (
        <div className={classnames}>
            <div className="article-skeleton">
                <Skeleton type="title" />
                <Skeleton type="text" />
                <Skeleton type="text" />
            </div>
            <Schemer />
        </div>
    )
}

export default ArticleSkeleton