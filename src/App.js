import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Container from './components/layout/Container';
import Home from './components/pages/Home';
import Workouts from './components/pages/Workouts';
import NewWorkout from './components/pages/NewWorkout';
import AboutUs from './components/pages/AboutUs';
import Contact from './components/pages/Contact';
import Workout from './components/pages/Workout';

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newworkout" element={<NewWorkout />} />
          <Route path="/workout/:id" element={<Workout />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
