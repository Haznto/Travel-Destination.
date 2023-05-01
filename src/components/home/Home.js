import Footer from "../Footer/Footer"
import Header from "../header/Header"
import Tours from "../tours/Tours"
import data from "../data/db.json"

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