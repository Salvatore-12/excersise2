import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FantasyBooks from '../data/fantasy.json'
import { Container, Row,Col } from 'react-bootstrap';

const AllTheBooks=()=>{
   
  return (
   <Container>
        <Row gap={2} className='mt-3'>
        {FantasyBooks.map((books,i)=>{
        return( <Col xs={6} sm={4} md={3} lg={2} key={i}>
                <Card>
        <Card.Img style={{height:"220px"}} src={books.img} />
        <Card.Body>
          <Card.Title>{books.title}</Card.Title>
          <Card.Text className='text-nowrap text-truncate'>
           {books.price}€
          </Card.Text>
          <Button variant="primary">{books.category}</Button>
        </Card.Body>
      </Card>
      </Col>)
        })}     
    </Row>
    </Container>
    
  );
}

export default AllTheBooks;
