import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Cards() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="\public\ChicaAprendiendoMagia.jpg" />
      <Card.Body>
        <Card.Title>Aprendiendo</Card.Title>
        <Card.Text>
        Adquirir el conocimiento de algo por medio del estudio o de la experiencia
        </Card.Text>
        <Button variant="primary"><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwir1aG26qr_AhVXs4QIHS7EAe4QFnoECA8QAw&url=https%3A%2F%2Fdle.rae.es%2Faprender%23%3A~%3Atext%3D1.%2Cestudio%2520o%2520de%2520la%2520experiencia.&usg=AOvVaw0f33pB2_Vm9mq5Ur4Zc6at">Ve a la pagina</a></Button>
      </Card.Body>
    </Card>
  );
}

