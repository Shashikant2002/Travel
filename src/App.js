import './App.css';
import './Part.css';
import { Header } from './Components/Header';
import { Banner } from './Components/Banner';
import { TheWorld } from './Components/TheWorld';
import Travels from './Components/Travels';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';

function App() {
    return (
        <>
            <Header />
            <Banner />
            <TheWorld />
            <Travels />
            <Testimonials />
            <Footer />
        </>
    );
}

export default App;