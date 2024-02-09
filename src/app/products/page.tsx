import React from 'react'

interface MyProduct {
    name: string,
    price: string,
    color: string,
    category: string,
    company: string
}

const getProducts = async () => {
    const response = await fetch("http://localhost:3000/api/products")
    let data = await response.json()
    if (data.success) {
        return data.result
    } else {
        return { success: false }
    }
}

const page = async () => {
    const products = await getProducts()
    console.log(products);

    return (
        <div>
            <h1>All Product</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Color</td>
                        <td>Category</td>
                        <td>Company</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product: MyProduct) => (
                            <tr>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.color}</td>
                                <td>{product.category}</td>
                                <td>{product.company}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default page