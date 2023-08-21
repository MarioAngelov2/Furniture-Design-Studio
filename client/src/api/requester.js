const URL = 'http://localhost:4002';

export async function getProducts() {
    try {
        const response = await fetch(`${URL}/products`);

        if (response.ok) {
            return response.json();
        }
    } catch (error) {
        console.log(error)
    }
}