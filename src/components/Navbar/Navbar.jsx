import { useEffect, useState } from "react";
import "./navbar.css"
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const [navbar, setNavbar] = useState("navbar")
    const [logindrop, setlogindrop] = useState(false)
    const [membershipdrop, setmembershipdrop] = useState(false)

    const { pathname } = useLocation()
    useEffect(() => {
        setNavbar("navbar");
    }, [pathname])

    const logindropdown = () => {
        setlogindrop(!logindrop)
    }
    const membershipdropdown = () => {
        setmembershipdrop(!membershipdrop)
    }
    const searchBox = () => {
        const search = document.querySelector("#search");
        search.style.display = "inline";
    }

    return (
        <>
            {/* topbar  */}
            <section id="topbar" className="d-flex align-items-center">
                <div className="container p-0">
                    <div className="row align-items-center">

                        <div className="col-lg-12">
                            <div className="ad">
                                <a href=""><img src="assets/img/Ad/ad.jpg" />
                                    <p>Advertise with us !</p>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-6 col-1">
                            <div className="logo">
                                <Link to="/"><img src="assets/img/service/logo3.png" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-11">
                            <div className="contactus">
                                <ul>

                                    <li className="m-0 p-0"><a href="">Complaint Portal</a></li>
                                    <li><form className="m-0 p-0">
                                        <input type="search" placeholder="Search" required id="search" /><button type="submit"><img src="assets/img/searc.svg" onClick={searchBox} /></button>
                                    </form></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* header  */}

            <header id="header" className="d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-center">
                    <nav id="navbar" className={navbar}>
                        <ul> 
                            <li> <Link to="/new" className="nav-link " aria-current="page" href="#">Price Calculator</Link></li>
                            <li className="dropdown" onClick={membershipdropdown}> <a href="#"><span>Membership</span> <i className="bi bi-chevron-down"></i></a>
                                {membershipdrop && (<ul className="dropdown-active">
                                    <li><Link to="/new">Join AFMX</Link></li>
                                    <li><Link to="/new">Renew your Membership</Link></li>
                                    <li><Link to="/new">Membership Levels</Link></li>
                                    <li><Link to="/new">Membership Benifits <RiArrowDropDownLine /></Link></li>
                                </ul>)}
                            </li>
                            <li><Link to="/new" className="nav-link " >Services</Link></li>
                            <li><Link to="/industry/1" className="nav-link " >Industries We Serve</Link></li>
                            <li><Link to="/new" className="nav-link " >Robotic Cleaning</Link></li>
                            <li><Link to="/new" className="nav-link " >Media</Link></li>
                            <li><Link to="/new" className="nav-link " >Marketing Department</Link></li>
                            <li><Link to="/new" className="nav-link " >Careers & Employment</Link></li>

                            <li className="dropdown" onClick={logindropdown}><a ><span>Login</span> <i className="bi bi-chevron-down"></i></a>
                                {logindrop && (<ul className="dropdown-active">
                                    <li><Link to="/employee-login">Employee Login</Link></li>
                                    <li><Link to="/client-login">Client Login</Link></li>
                                    <li><Link to="/federal-govrment-login">Federal Government Login</Link></li>
                                    <li><Link to="/admin-login">Admin Login</Link></li>
                                </ul>)}
                            </li>
                        </ul>

                        <i className={`bi bi-list mobile-nav-toggle`} onClick={() => navbar === "navbar" ? setNavbar("navbar-mobile") : setNavbar("navbar")}></i>
                    </nav>

                </div>
            </header>
        </>
    )
}

export default Navbar