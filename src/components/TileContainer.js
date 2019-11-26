import React from 'react'
import PigTile from './PigTile'

export default class tileContainer extends React.Component {

    

    render() {
        
        
        const pigTile = this.props.hoginfo.map (pig => (
            <PigTile singlehoginfo={pig}/>
        ))
        
        return(
           <div>{pigTile}</div>
        )
    }

}