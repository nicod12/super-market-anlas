const url = "/Products.json";
export async function fetchProducts() {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('Error fetching products:', error);
        throw error; 
    }
}