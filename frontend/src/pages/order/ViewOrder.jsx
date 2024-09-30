import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrderRequest } from '../../redux/orderSlice';

const ViewOrder = () => {
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(fetchOrderRequest());
  }, [dispatch]);

  console.log("view order:", order);

  // Define table columns
  const columns = [
    { id: "name", label: "Role Name" },
    { id: "toppings", label: "Toppings",align:"right" },
    { id: "quantity", label: "Quantity",align:"right" },
    { id: "customerNumber", label: "Customer Number",align:"right" },
    { id: "created_date", label: "Created at", align: "right" },
    { id: "status", label: "Status", align: "right" },
    ];
    
  return <></>;
}

export default ViewOrder
