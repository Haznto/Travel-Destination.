import Footer from "../Footer/Footer"
import Header from "../header/Header"
import Tours from "../tours/Tours"
import data from "/home/hasantom/travel-destination/src/data/db.json"

function Home() {
return ( 
    
    <div>
    <Header />
    <Tours data ={data} />
    <Footer />

    </div>
)
}

export default Home