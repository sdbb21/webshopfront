import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectOrder } from "../store/orders/selector";
import { selectAllProducts } from "../store/products/selector";
import { fetchOrder } from "../store/orders/actions";
import { useParams } from "react-router-dom";
import ShoppingCartList from "../components/ShoppingCartList";

export default function OrderPage() {
  const order = useSelector(selectOrder);
  const allProducts = useSelector(selectAllProducts);

  console.log("What are my products", allProducts.products);
  //   console.log("is my order.id true", !!order.orderId);
  //   console.log("What are my products", allProducts);

  function getProductDetails() {
    const products = order.productIds.map((cartProductId) => {
      return allProducts.products.find((allProducts) => {
        console.log(
          `does ${allProducts.id} match ${cartProductId}?`,
          parseInt(allProducts.id) === parseInt(cartProductId)
        );
        return allProducts.id === cartProductId;
      });
    });
    console.log("What are my product details", products);
  }

  if (order.orderId) {
    getProductDetails();
  }

  const dispatch = useDispatch();
  const { id } = useParams();

  //   useEffect(() => {
  //     dispatch(fetchOrder);
  // }, [dispatch]);
  return (
    <div>
      <h1>Your shopping cart</h1>
      <ShoppingCartList />
    </div>
  );
}
