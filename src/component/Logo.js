import React from 'react'
import IterationIcon from 'grommet/components/icons/base/Iteration'

export const Logo=()=>{
    return (
        <figure className="logo">
                          <IterationIcon colorIndex="brand" size="medium" type="logo" />
                          <figcaption className="logo__caption">TODOZER</figcaption>
                          </figure>
    )
}