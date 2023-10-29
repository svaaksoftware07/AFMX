import { Route, Routes, useLocation } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import CommingSoon from "./pages/CommingSoon"
import Footer from "./components/Footer/Footer"
import { useEffect, useState } from "react"
import Login from "./pages/Login/Login"
import CreateAccount from "./pages/CreateAccount/CreateAccount"
import { ToastContainer } from 'react-toastify';
import HelpingHand from "./pages/helpingHand/HelpingHand"
import ProductCategory from "./pages/productCategory/ProductCategory"
import Industry from "./pages/Industry/Industry"
import ServiceCategory from "./pages/serviceDepartment/ServiceCategory"
import Forget from "./pages/Login/Forget"
import ResetPassword from "./pages/Login/ResetPassword"
import TermsConditions from "./pages/terms&conditions/TermsConditions"
import Services from "./pages/services/Services"
import JoinAfmx from "./pages/Membership/JoinAfmx"

function App() {
  const [showButton, setShowButton] = useState(false);

  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    // Add an event listener to track scroll position
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
    return (
      <>
        <ToastContainer />
        <Navbar />
        <div className="m-0 backgroundPage">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<CommingSoon />} />
            <Route path="/employee-login" element={<Login loginType={"Employee Login"} />} />
            <Route path="/client-login" element={<Login loginType={"Client Login"} />} />
            <Route path="/federal-govrment-login" element={<Login loginType={"Federal Government Login"} />} />
            <Route path="/admin-login" element={<Login loginType={"Admin Login"} />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/helping-hand/:id" element={<HelpingHand />} />
            <Route path="/product/:id" element={<ProductCategory />} />
            <Route path="/industry/:id" element={<Industry />} />
            <Route path="/service/:id" element={<ServiceCategory/>}/>
            <Route path="/forget-password" element={<Forget />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/terms-condition/:id" element={<TermsConditions />} />
            <Route path="/services/:id" element={<Services/>} />
            <Route path="/join-AFMX" element={<JoinAfmx/>} />

          </Routes>
        </div>
        <Footer />
        {showButton && (
          <div
            className="back-to-top d-flex align-items-center justify-content-center active"
            onClick={scrollToTop}
          >
            <i className="bi bi-arrow-up-short"></i>
          </div>
        )}
      </>
    )
  }


export default App



