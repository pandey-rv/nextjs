const ProductId = ({params}: {
    params: {productId: String}
}) => {
    console.log("params", params);
    
    return (
        <h1>This is product {params.productId}</h1>
    )
}
export default ProductId;