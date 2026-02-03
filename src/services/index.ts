export const getAllProducts = async () => {
  const response = await fetch("/api/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const products = await response.json();
  return products;
};

export const getById = async (id: string) => {
    const response = await fetch('/api/products/' + id);
    if(!response.ok){
        throw new Error('Failed to fetch products');
    }

    return await response.json();
};

export default { getAllProducts, getById };
