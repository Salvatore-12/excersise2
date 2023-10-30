import { Component } from "react";
import AddCommment from "./AddComment";
import CommentsList from "./CommentsList";

const key="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNTkwYmY2ZTNkZDAwMTQ5NWU0M2IiLCJpYXQiOjE2OTgzMjI2OTksImV4cCI6MTY5OTUzMjI5OX0.MhL9A8MYzlGVPmFAwkTFMLox9q4EAlNAIzgZrExP_D0"
class CommentArea extends Component{
    state={
    review:{
    comment:"",
    rate:"",
    elementId:"",
    }
    }
 getComments= async ()=>{
try {
    const response= await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.bookId}`,{
    headers:{
    "Authorization":key
    }
    })
    if (response.ok) {
        const data=await response.json() 
        console.log("evviva",data)
        this.setState({
              review:{
                comment:data[0].comment,
                rate:data[0].rate,
                elementId:data[0].elementId,
                }
        })
        
    } else {
        throw new Error("errorre del server")
    }
    
} catch (error) {
    console.log(error)
}
}
componentDidAbout(prevProps,prevState){
    if(prevProps.bookAsin !== this.props.bookAsin){}
    this.getComments()
}
    
    render(){
    return(
        <>
        <AddCommment/>
        <div>
        <CommentsList/>
        <p>ciao</p>
        <p>{this.state.review.comment}</p>
        <p>{this.state.review.rate}</p>
        <p>{this.state.review.elementId}</p>
        </div>
        </>
        )
    }
}


export default CommentArea