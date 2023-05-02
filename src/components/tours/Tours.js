import './Tours.css'
import Tour from './tour/tour'

function Tours(props) {
    return (
        <main>
            <section className='forCards'>
        {
            props.data.map(tour=> {
                return (
                   <Tour  name={tour.name} image={tour.image} id={tour.id} info={tour.info} pric={tour.price} key={tour.id}/>
                )
            })
        }
            </section>
        </main>
        
    )
}
export default Tours