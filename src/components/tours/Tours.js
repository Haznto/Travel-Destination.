function Tours(props) {
    return (
        <main>
        {
            props.data.map(tour=> {
                return (
                    <div key={tour.id}  style={{
                        display: "flex",
                        flexDirection: "column"
                    
                      }}>
                        <h2 >{tour.name}</h2>
                        <img  src={tour.image} alt={tour.name}/>
                    </div>
                )
            })
        }
        </main>
        
    )
}
export default Tours