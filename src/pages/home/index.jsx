import React from 'react';
import Jumbotron from '../../components/jumbotron';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';




const Home = () => {
    return (
        <div>
            <Menu />
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="Evento 1"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftnonline.uol.com.br%2Fnoticias%2Fparana%2Fprofissionais-de-eventos-cobram-planejamento-para-voltar-a-trabalhar-485235&psig=AOvVaw2Fna6JcxDpydOLB3bY_q2D&ust=1603889185699000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLD9hcLh1OwCFQAAAAAdAAAAABAJ"
      alt="Evento 2"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Evento 3"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            <Rodape/>
           
  
           
               
        </div>
    )
}
export default Home;