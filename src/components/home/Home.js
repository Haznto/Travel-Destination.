import Footer from "../Footer/Footer"
import Header from "../header/Header"
import Tours from "../tours/Tours"
import data from "../data/db.json"
import { Route, Routes } from "react-router-dom";
import TourDetail from "../TourDetails/TourDetails";



function Home() {
return ( 
    
    <div>

    <Header />
    {/* <Tours data ={data}/> */}
    <Routes>
        <Route path="/" element = {<Tours data ={data}/>} />
         <Route path="/city/:id" element={<TourDetail data ={data }/>} />
    </Routes>
    <Footer />
    
    </div>
)
}

export default Home