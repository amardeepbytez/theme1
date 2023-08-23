import { Container, Grid } from '@mui/material';
import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage'
import About from './components/About'
import Services from './components/Services'
import Team from './components/Team'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer';
import { Route, Routes,BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Container>
      <Grid container>
        <Grid item xs>
          <BrowserRouter>
            <Header />
            <div>
              <Routes>
                  <Route path='/' element={ <Homepage /> } />
                  <Route path='/about' element={ <About /> } />
                  <Route path='/services' element={ <Services /> } />
                  <Route path='/team' element={ <Team /> } />
                  <Route path='/contact' element={ <ContactUs /> } />
              </Routes>
            </div>
          <Footer />
          </BrowserRouter>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
