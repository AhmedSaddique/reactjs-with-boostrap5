import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Card from './Card';
import HomeP3 from './HomeP3';
import ServiceCard from './ServiceCard';
import Footer from './Footer';

function Home() {
  return (
    <div className="">
      <Navbar />
      <Header/>
       <Card/>
       <HomeP3 />
       <ServiceCard />
       <Footer/>
    </div>
  );
}

export default Home;