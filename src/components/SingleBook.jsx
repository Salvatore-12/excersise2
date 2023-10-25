
import { Component } from 'react';
import Card from 'react-bootstrap/Card';


class SingleBook extends Component{  

state={
selected:false
}

render(){
        return( 
            <Card onClick={(e)=>{
           if (this.state.selected === false) {
           
            this.setState({
                selected:true

            
            })
           } else {
            this.setState({selected:false})
           }
           
            }} className={`mt-3${this.state.selected ? "border-5 border-danger":""  }`} >
    <Card.Img  src={this.props.oneBook.img} />
    <Card.Body className='text-center'>
      <Card.Title className='text-nowrap text-truncate'>{this.props.oneBook.title}</Card.Title>
      <Card.Title className='text-nowrap text-truncate'>{this.props.oneBook.price}€</Card.Title>
    </Card.Body>
  </Card>
  )}  
        }

    export default SingleBook;   