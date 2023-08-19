import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardCom({productName, price, description, image}) {
  return (
    <Card style={{ width: '18rem'  }}>
      <Card.Img variant="top" src={image} style={{ height: '250px' }} />
      <Card.Body>
        <Card.Title>{productName}</Card.Title>
        <Card.Title>{price}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
  );
}

export default CardCom;