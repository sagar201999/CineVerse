import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../App.css'
import './Home.css'
import SeriesContent from '../SeriesContent/SeriesContent';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='home-bg'>
                <div className='containerr'>
                    <img src='../../../series_images/witcher-logo.png' alt='poster' className='witcher-poster' />
                    <div className='home-info'>
                        <p className='my-4'>Geralt of Rivia , a mutated monster-hunter for hire , journeys toward his destiny in a turbulent world where people
                            often proves more wicked than beasts .
                        </p>
                        <button>
                            <img src='../../../assets/play.png' alt='play' style={{ width: "30px" }} />
                            <strong className='text-dark mx-2'>Play</strong>
                        </button>
                        <button>
                            <img src='../../../assets/info.png' alt='info' style={{ width: "30px" }} />
                            <strong className='mx-3'>More Info</strong>
                        </button>
                    </div>
                </div>

            </div>
            <SeriesContent />
        </>
    )
}

export default Home;