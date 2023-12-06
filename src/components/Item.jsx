import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Item = ({item}) => {
    return (
        <Card style={{ width: '18rem'}}>
          <Card.Img variant="top" src={item.pictureUrl} style={{height: "12rem"}}/>
          <Card.Body>
            <Card.Title className='pb-4'>{item.title}</Card.Title>
           <Link to={`/items/${item.id}`}><Button variant="primary">Ver producto</Button></Link>
          </Card.Body>
        </Card>
      );
};
