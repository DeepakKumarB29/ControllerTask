import * as serviceCart from "../services/cartService.js";

const getCartForUser = (req, res) => {
  const userId = req.params.userId;
  res.send(serviceCart.getCartForUser(userId));
};

const addProductToCart = (req, res) => {
  const userId = req.params.userId;
  res.send(serviceCart.addProductToCart(userId));
};

export { getCartForUser, addProductToCart };
