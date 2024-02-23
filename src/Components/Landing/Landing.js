import './landing.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import LandingFooter from '../Footer/LandingFooter';
import { Link } from 'react-router-dom';

const Landing = () => {

    return (
        <>
            <section>
                <div className='landing-background bg-black'>
                    <div className='landing-nav'>
                        <img src="../../../assets/logo.png" alt='logo' className='landing-logo' />
                        <div>
                            <button className='btn border text-light me-2 px-2 py-1'>Lang</button>
                            <button className='btn btn-danger px-3 py-1'>Sign In</button>
                        </div>
                    </div>
                    <div className='landing-text-section'>
                        <h1>Unlimited movies, TV shows and more</h1>
                        <h5>Watch anywhere. Cancel anytime.</h5>
                        <h5 className='mt-2'>Ready to watch? Enter your email to create or restart your membership.</h5>
                        <div className='landing-input'>
                            <input type='text' placeholder='Email address' className='landing-email-input' />
                            <Link to={'/Home'} >
                                <button className='get-started-button' >Get Started &gt;</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='landing-section-2'>
                    <div className='section-container'>
                        <div>
                            <h1>Enjoy on your TV</h1>
                            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                        </div>
                        <img src='../../../assets/Untitled design.gif' alt='tv' className='section-2-image' />

                    </div>

                    <div className='section-container flex-row-reverse'>
                        <div>
                            <h1>Download your shows to watch offline</h1>
                            <p>Save your favourites easily and always have something to watch.</p>
                        </div>
                        <img src='../../../assets/mobile-0819.jpg' alt='tv' className='section-2-image' />

                    </div>

                    <div className='section-container'>
                        <div>
                            <h1>Watch everywhere</h1>
                            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                        </div>
                        <img src='../../../assets/device-pile-in.png' alt='tv' className='section-2-image' />

                    </div>

                    <div className='section-container flex-row-reverse'>
                        <div>
                            <h1>Create profiles for kids</h1>
                            <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                        </div>
                        <img src='../../../assets/mobile-0214.png' alt='tv' className='section-2-image' />

                    </div>

                </div>

                <div className='bg-black'>
                    <Accordion className='accordian'>
                        <AccordionItem header="What is CineVerse?" className="accordian-header">
                            <p> cineverse is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries
                                and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want,
                                without a single ad – all for free.</p>
                        </AccordionItem>

                        <AccordionItem header="Where can i watch?">
                            <p> Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your
                                personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones,
                                tablets, streaming media players and game consoles.</p>
                        </AccordionItem>

                        <AccordionItem header="Can I download content for offline viewing?">
                            <p> Yes , you can download content for offline viewing and watch from download section without any extra cost . you can
                                download content from any devices including android , smart TVs , laptops and many devices .</p>
                        </AccordionItem>

                        <AccordionItem header="How Much cineverse Cost?">
                            <p> Watch cineverse on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one for free of charge.
                                No extra costs, no contracts.</p>
                        </AccordionItem>
                    </Accordion>

                </div>

                <div>
                    <LandingFooter />
                </div>




            </section>

        </>
    )
}

export default Landing;