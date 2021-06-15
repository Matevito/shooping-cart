

const ProductCard = (props) => {    

    const pData = props.product_data

    return(
        <div className="card bg-light border-primary" style={{maxWidth:540, minHeight:500}}>
            <h5 className="card-title text-center">{pData.title}</h5>
            <div className="text-center">
            <img className="card-image rounded mx-auto d-block" src={pData.image} alt="product_img"
            style={{maxWidth:350, maxHeight:350}}></img>
            </div>
            <div className="card-body text-center">
                <h5> Price: ${pData.price}</h5>
            </div>
        </div>
    )
}

export default ProductCard