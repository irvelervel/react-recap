import React, { Component } from "react";
import Button from "./Button";

// const Strive = ({ simpleProp, anotherProp }) => {
//   console.log(simpleProp);
//   console.log(anotherProp);
//   return <div>Hello strivers!</div>;
// };

class Strive extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       counter: 0
  //     };
  //   }

  state = {
    counter: 0
  };

  componentDidMount = () => {
    //FETCH DATA HERE
    console.log("I've mounted!", this.props);
  };

  //   componentDidUpdate = (prevProps, prevState) => {
  //     console.log("UPDATED, the current counter is ", this.state.counter);
  //     if(prevProps.counter !== this.props.counter) {
  //         this.setState({ counter: 0 });
  //     }
  //   };

  render() {
    return (
      <>
        <div>Hello strivers! Counter value is {this.state.counter}</div>
        <div>
          <Button
            label="CLICK ME BUTTON"
            fire={() =>
              this.setState({
                counter: this.state.counter + 1
              })
            }
          />
        </div>
      </>
    );
  }
}

export default Strive;

//FUNCTIONS DON'T HAVE STATE
//BOTH FUNCTIONS AND CLASSES HAVE PROPS

//LIFECYCLE METHODS OF A CLASS BASED COMPONENT:
//render
//componentDidMount
//componentDidUpdate
//componentWillUnmount
//constructor
