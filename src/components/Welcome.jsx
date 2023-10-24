import {Container,Row,Col} from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert'
const Welcome=()=>{

return(
    <Container fluid className='text-center border-3 border-black border-top bg-warning'>
        <Row>
            <Col>
            <Alert variant="info">
              <Alert.Heading className="fw-bold">Welcome</Alert.Heading>
              <p>
                Hi, this is your next favourite online-library. You can shop any
                book you wany for the best prices available.
              </p>
              <hr />
              <p className="mb-0">
                Just start to search your next favourite book!
              </p>
            </Alert> 
            </Col>
            
            
        </Row>
    </Container>
    )
}
export default Welcome