import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectOrder } from "../store/orders/selector";
import { selectFeedProducts } from "../store/products/selector";
import { fetchOrder } from "../store/orders/actions";
import { useParams } from "react-router-dom";
import ShoppingCartList from "../components/ShoppingCartList";
import "../components/ShoppingCart.List.css";

export default function OrderPage() {
  const [products, set_products] = useState();
  const [loading, set_loading] = useState("Idle");
  const order = useSelector(selectOrder);
  const allProducts = useSelector(selectFeedProducts);
  const dispatch = useDispatch();
  const { id } = useParams();

  function getProductDetails() {
    const productDetails = order.productIds.map((cartProductId) => {
      return allProducts.find((allProducts) => {
        return parseInt(allProducts.id) === parseInt(cartProductId);
      });
    });
    set_products(productDetails);
    set_loading("Done");
  }

  function shoppingCartListRender() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Item</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
          {console.log("Which product", products)}
          {products.map((product, i) => {
            return (
              <tr key={i}>
                <ShoppingCartList
                  name={product.name}
                  description={product.description}
                  price={product.price}
                />
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  function confirmPurchaseHandler() {}

  useEffect(() => {
    set_loading("Loading");
    getProductDetails();
  }, []);

  if (loading === "loading" || loading === "Idle")
    return <h1>Your cart is empty</h1>;
  return (
    <div className="pageWrapper">
      <h1>Your shopping cart</h1>
      {shoppingCartListRender()}
      <button>Confirm purchase</button>
    </div>
  );
}
