import { Col, Container, Row,Form,Button } from "react-bootstrap"
import { Component } from "react"
import SingleBook from "./SingleBook"
import CommentArea from "./CommentArea"

class BookList extends Component{
 state={
     searchValue:"",
     bookAsin:"",
     
    }
    stateBookList=(asin)=>{
      this.setState({
      bookAsin:asin
      })
    }
    render(){
    return(
        <Container>
            <Row>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Cerca i tuoi libri preferiti</Form.Label>
        <Form.Control type="text" placeholder="cerca un libro" value={this.state.searchValue} 
        onChange={(e) =>{this.setState({
                          search: {
                         ...this.state.search,
                         searchValue:e.target.value,
                        },
                        
                      })
                    }
                  } />
      </Form.Group>
      <Button variant="primary" type="submit">
        cerca
      </Button>
            </Form>
            </Row>         
            <Row>
            <Col lg={8}>
                <Row>
                {this.props.arrayOfBooks.map((book)=>{
                return (
                <Col xs={6} sm={4} md={3} lg={2} key={book.asin}>
                  <SingleBook oneBook={book} bookId={this.state.bookAsin} setBook={this.stateBookList}/>
                 </Col>
                 )
               }
               )}
               </Row>
            </Col>
            <Col lg={4}>
            <CommentArea asinBook={this.state.bookAsin} />
            </Col>
                
            </Row>
        </Container>
        
        )
    }

}
export default BookList