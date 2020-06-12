import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchNext5Products } from "../store/products/actions";
import {
  selectFeedLoading,
  selectFeedProducts,
} from "../store/products/selector";

export default function ProductFeed() {
  const dispatch = useDispatch();

  const loading = useSelector(selectFeedLoading);
  const product = useSelector(selectFeedProducts);
  useEffect(() => {
    dispatch(fetchNext5Products());
  }, [dispatch]);

  const add = (id) => {
    dispatch({ type: "ADD_PRODUCT", payload: id });
  };

  return (
    <div>
      {product.map((product) => {
        return (
          <div key={product.id}>
            <h3>
              {/* <Link to={`/product/${product.id}`}> */}
              <p onClick={(e) => add(product.id)}> {product.name} 😍</p>
              {/* </Link> */}
            </h3>
          </div>
        );
      })}
      <p>
        {loading ? (
          <em>Loading...</em>
        ) : (
          <button onClick={() => dispatch(fetchNext5Products)}>
            Load more
          </button>
        )}
      </p>
    </div>
  );
}
