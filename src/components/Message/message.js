import React, { Component } from 'react'
import './message.css'
// import firebase from 'firebase'
function popUpWindow(){
    return (
        <div style={{width:"100vw",height:"100vh",backgroundColor:"rgba(0,0,0,0.2)",position:"fixed"}}>
            <div style={{padding:"20px"}}>
                <button style={buttonStyle}>
                    Yes
                </button>
                <button style={buttonStyle}>
                    No
                </button>
            </div>
        </div>
    )
}
export class message extends Component {
    state={
        popup:false
    }
    componentWillReceiveProps(nextProps)
    {
        // if(this.props!==nextProps)
        // {
        //     bgColorMsg = {...bgColorMsg,
        //         backgroundColor: "green"
        //     }
        //     setTimeout(()=>{
        //         bgColorMsg = {...bgColorMsg,
        //             backgroundColor: "rgba(0, 0, 0, .05)"
        //         }
        //     },500)
        // }
    }
    render() {
        
        return (
            <div className="message" style={bgColorMsg}>
            <span className="message__author">
                {this.props.message.name}:
            </span>
             {this.props.message.text}
             <span style={{display:"inline-block",fontSize:"15px"}}><i class="far fa-trash-alt"></i></span>
            {this.state.popup && popUpWindow}
  </div>
        )
    }
}
const buttonStyle = {
    padding:"10px",
    color: "white",
    backgroundColor:"black"
}
let bgColorMsg = {
    backgroundColor: "rgba(0, 0, 0, .05)"
}

export default message
