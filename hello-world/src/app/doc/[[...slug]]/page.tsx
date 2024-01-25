const Doc = ({params}: {
    params: {
        slug: string[];
    }
}) => {    
    if (params.slug?.length === 3) {
        return (
            <h1>This is doc/{params.slug[0]}/{params.slug[1]}/{params.slug[2]}</h1>
        )
    }
    else if (params.slug?.length === 2) {
        return (
            <h1>This is doc/{params.slug[0]}/{params.slug[1]}</h1>
        )
    }
    else if (params.slug?.length === 1) {
        return (
            <h1>This is doc/{params.slug[0]}</h1>
        )
    }
    return (
        <h1>This is doc</h1>
    )
}
export default Doc;