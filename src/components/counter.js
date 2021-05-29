import React, { Component } from 'react'
import './counter.css'

class Counter extends Component{
    constructor(props){
        super(props)

        this.state= {
            count: 0
        }
    }

    increment(){
      this.setState({
          count: this.state.count + 1
      },
      () => {
          console.log('Callback value', this.state.count)
      }
      )
      console.log(this.state.count)
    }

    render(){
        return(
            <div className="Counter">
                <button className="Counter_Button" onClick={() => this.increment() }>Increment</button>
                <div className="Counter_number">Count - {this.state.count} </div>
            </div>
        )
    }
}

export default Counter