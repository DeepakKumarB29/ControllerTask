const getCartForUser = (userId) => {
  return `Fetching cart for user with ID:${userId}`;
};

const addProductToCart = (userId) => {
  return `Adding product to cart for user with ID: ${userId}`;
};

export { getCartForUser, addProductToCart };
