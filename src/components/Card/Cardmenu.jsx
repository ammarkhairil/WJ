import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cardmenu = (props) => {
  return (
    <Card className='mx-auto' style={{ width: '25rem', height: '25rem', borderRadius: '15px' }}>
      <Card.Img variant="top" src={props.image} style={{ objectFit: 'cover', height: '200px', borderRadius: '15px' }} />
      <Card.Body>
        <Card.Title>{props.menu}</Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text>
        {/* Tambahkan onClick ke tombol */}
        <Button variant="primary" onClick={props.onClick}>Pre Order Now</Button>
      </Card.Body>
    </Card>
  );
}

export default Cardmenu;
