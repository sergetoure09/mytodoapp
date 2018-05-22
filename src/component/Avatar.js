import React from 'react'

export const Avatar=({username,picture})=>{
    return (
        <div className="avatar">
                          <img src={picture} alt="serge toure" className="avatar__img"/>
                          <span className="avatar__username">{username}</span>
        </div>
    )
}