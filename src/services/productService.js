const API_BASE_URL = 'http://ec2-3-236-168-225.compute-1.amazonaws.com/api/'

async function fetchProducts() {
  const response = await fetch(`${API_BASE_URL}product`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}

export const productService = {
  getAllProducts: fetchProducts,
};