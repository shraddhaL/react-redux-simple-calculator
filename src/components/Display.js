import React,{Component} from 'react';
import { connect } from 'react-redux';

let displayValue=null;


class Display extends Component {
  handleValue  = () =>{
  if(this.props.Total!==null){
    displayValue= this.props.Total
  }else{
    displayValue=  this.props.Input.join("")?this.props.Input.join(""):'0'
  }
  return displayValue;
}
  render() {
  return (
        <h1  variant="outlined" >{/* this.props.Input.join("")?this.props.Input.join(""):'0' */}
     {this.handleValue()}
      </h1>
    );}
}


const mapStateToProps = (state) => {
  return{
    Input :  state.expression,
    Total:    state.total
  };
};

export default connect(mapStateToProps)(Display)