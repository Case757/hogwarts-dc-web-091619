import React from 'react'

export default class sortContainer extends React.Component {

render () {


    return (

        <div>
            <p>Filter/Sort By:</p>
            <select onChange={ (event) => {this.props.callback(event)}}>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
                <option value="greased">Greased</option>
            </select>
        </div>
    )
    
    


}



}