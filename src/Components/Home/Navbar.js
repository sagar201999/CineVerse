import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../App.css'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.css'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';



const Navbar = () => {



    return (
        <>
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#home">
                        <img src='../../../assets/logo.png' alt='logo' />
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#TVShows">TV Shows</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#Movies">Movies</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#New&Popular">New & Popular</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#MyList">My List</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#language">Browse by Language</a>
                            </li>
                        </ul>

                    </div>

                    <div>
                        <ul className='navbar-nav'>
                            <li>
                                <FontAwesomeIcon icon={faSearch} />
                            </li>
                            <li>
                                <a className='nav-link' href='#children'>Children</a>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faBell} />
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#a"
                                    id="navbarDropdown"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"   >
                                    <img src='../../../assets/images.jpg' alt='profile_logo' className='rounded' style={{ width: '30px' }} />
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a class="dropdown-item" href="#profile">Manage Profiles</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#transfer">Transfer Profiles</a>
                                    </li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li>
                                        <a class="dropdown-item" href="#signout">Sign out of CineVerse</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>


                </div>
            </nav>
        </>
    )
}

export default Navbar;