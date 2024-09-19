export const getProducts = async (req, res) => {
    const response = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={%22subCategory%22%3A%22tshirt%22}", {
        headers: {
            'projectId': 'f104bi07c490'
        }
    });
    const {data} = await response.json();
    return data;
}