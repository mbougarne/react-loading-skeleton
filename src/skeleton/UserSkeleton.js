import React from 'react'
import Skeleton from './Skeleton'
import Schemer from './Schemer/Schemer'

const UserSkeleton = ({ theme }) => {

    let classnames = `skeleton-wrapper ${theme || 'light'}`

    return (
        <div className={classnames}>
            <div className="user-skeleton">
                {/* Left side - Avatar */}
                <div>
                    <Skeleton type="avatar" />
                </div>
                {/* Right side - Content */}
                <div>
                    <Skeleton type="title" />
                    <Skeleton type="text" />
                    <Skeleton type="text" />
                </div>
            </div>
            <Schemer />
        </div>
    )
}

export default UserSkeleton