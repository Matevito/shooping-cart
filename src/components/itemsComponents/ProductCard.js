

const ProductCard = (props) => {    

    const pData = props.product_data

    return(
        <div className="col-sm-1 col-md-4">
            <div className="card bg-light border-primary" style={{maxWidth:540, minHeight:500}}>
                <h5 className="card-title text-center">{pData.title}</h5>
                <img className="card-image" src={pData.image} alt="product_img"
                style={{maxWidth:350, maxHeight:350}}></img>
                <div className="card-body text-center">
                    <h5> Price: ${pData.price}</h5>
                </div>
            </div>
        </div>
    )
}

export default ProductCard