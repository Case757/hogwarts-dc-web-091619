import React from 'react'


export default class pigTile extends React.Component {

    state = {
        displayInfo: false
    }
    
    nameFormater = (name) => {
        let fixedName = name.toLowerCase()
        return fixedName.replace(/ /g,"_")
    }


    displayInfo = (pig) => {
        const {name, specialty, greased, weight} = pig

        return ( 
            <div>
                <p>Specialty: {specialty}</p>
                <p>Greased: {`${greased}`}</p>
                <p>Weight: {weight}</p>
            </div> )
    } 
    
    clickHandler = () => { 
        this.setState({
            displayInfo: !this.state.displayInfo
        })
    }
    
    render() {
        
        
        
        
        return(
            <div>
                <img src= {require(`../hog-imgs/${this.nameFormater(this.props.singlehoginfo.name)}.jpg`)}/>
                <p>Name: {this.props.singlehoginfo.name}</p>
                <button onClick={this.clickHandler}>More Info</button>
                {this.state.displayInfo ? this.displayInfo(this.props.singlehoginfo) : null}
            </div>


        )

    }

}