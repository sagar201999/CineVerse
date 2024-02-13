import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../App.css'
// import { faInfoCircle, faPlay } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <>
            <div className='home-bg'>
                <div className='home-title text-light'>
                    <img src='../../../series_images/witcher-logo.png' alt='banner' />
                    <p className='mt-4'>Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where
                        people often prove more wicked than beasts.</p>
                    <div className='home-buttons'>
                        <button className='btn btn-light me-3 px-4 py-2'><strong>Play</strong></button>
                        <button className='btn btn-secondary ms-3 px-4 py-2'><strong>More Info</strong></button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home;