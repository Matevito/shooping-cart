import React, { useEffect, useState } from "react"

const Store = () => {
    const [productsData, set_productsData] = useState("")

    useEffect(() => {
        fetchStoreData()
        console.log(productsData)
    }, [])

    const fetchStoreData = () => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(storeData => set_productsData(storeData))
    }
    return(
        <div className="row">
            <span>store</span>
        </div>
    )
}

export default Store