const ProductReviews = ({params}: {
    params: {
        productId: string;
        reviewId: string;
    }
}) => {
    return (
        <h1>This is review {params.reviewId} for product {params.productId}</h1>
    )
}
export default ProductReviews;