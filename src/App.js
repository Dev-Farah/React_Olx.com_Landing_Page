import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/Header';
import banner from './images/banner.jpg';
import MediaCard from './components/Cards.js';
import Footer from './components/Footer.js';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';



function App() {
  return (
    <div className="App">
      <header className="header">
        <ResponsiveAppBar />

        <section>
          <img
            style={{ width: "93%", margin: "25px 40px" }}
            src={banner} alt="" />
        </section>
      </header>

      <section className='main'>
        <Typography variant="h5" >Fresh recommendations</Typography>

      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      </section>

      <section>
        <Footer />
      </section>



    </div>
  );
}

export default App;
