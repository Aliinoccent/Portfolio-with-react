
const Card = ({props}) => {
    return (
        <div className="row" style={{display:'flex',justifyContent:'space-around', marginTop:20,border:0}}>{
        props.map(data=>(
            <div className=" col-lg-4 col-md-6 col-sm-12 " style={{width:" 18rem"}}>
            <img className="card-img-top" src={data.image} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{data.cardTitle}</h5>
                    <p>{data.discount}</p>
                    <p className="card-text">{data.data}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
        </div>
        ))}

     </div>
    )
}
export default Card