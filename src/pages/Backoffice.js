import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPaidOrders } from "../store/backoffice/actions";

export default function Backoffice() {
  const allThePaidOrders = useSelector((reduxStore) => reduxStore.backoffice);
  const dispatch = useDispatch();

  //   1. useffect to call for the data dispatch!
  //   2. get the results from the dbabel
  //   3. store items in a reducer
  //   4. show on this page

  useEffect(() => {
    dispatch(fetchPaidOrders());
  }, []);

  return (
    <div>
      <p>the backoffice:</p>
      <ul>
        {allThePaidOrders.map((order) => {
          return (
            <li>
              {" "}
              <div>
                {`${order.id} amount of products orderd:${order.products.length}`}{" "}
                <ul>
                  {" "}
                  {order.products.map((products) => (
                    <li>{products.name}</li>
                  ))}
                </ul>
                <p>{order.userId}</p>
              </div>{" "}
            </li>
          );
          //   return JSON.stringify(order);
        })}
      </ul>
    </div>
  );
}
