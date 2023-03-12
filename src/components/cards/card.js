import './card.css'

function Card({foto}) {
   
    return (


        <div className='card'>
            <img src={foto} className='img' ></img>
            <div className='car'>
                <p>nombre</p>
                <p>precio</p>
                <p>stock</p>
                <button className="btn btn-primary btn-sm">comprar</button>
            </div>
        </div>





    );
}

export default Card