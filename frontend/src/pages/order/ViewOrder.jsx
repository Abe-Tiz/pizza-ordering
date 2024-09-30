import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrderRequest, fetchSpecificOrderRequest } from '../../redux/orderSlice';
import TableHeaderComponent from '../../components/TableHeaderComponent';
import TableComponent from '../../components/TableComponent';
import { Box } from '@mui/material';

const ViewOrder = () => {
   const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [customerPhone,setCustomerPhone] = useState(0)
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state.order);

  useEffect(() => {
    // const logedinCustomer = localStorage.getItem("customer-data")
    //   ? JSON.parse(localStorage.getItem("customer-data"))
    //   : null;

    // if (logedinCustomer) {
    //   dispatch(fetchSpecificOrderRequest(logedinCustomer.id));
    //   setCustomerPhone(logedinCustomer.phone);
    // }
    // console.log("cus:", logedinCustomer.phone);
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
  
  const orders = [
    {
      id: 22,
      name: "Special Menu",
      toppings: ["Pepperoni", "new c"],
      price: "120.00",
      photo: "uploads\\1727618995103-pizza-featured.png",
      quantity: 5,
      status: "Pending",
      created_date: "2024-09-30T19:42:27.315Z",
      customer_id: 4,
    },
    {
      id: 23,
      name: "pizza",
      toppings: ["Pepperoni", "Cheese"],
      price: "69.00",
      photo: "uploads\\1727611782394-pizza-featured.png",
      quantity: 3,
      status: "Pending",
      created_date: "2024-09-30T20:13:40.787Z",
      customer_id: 4,
    },
    {
      id: 24,
      name: "test",
      toppings: ["{Cheese,Pepperoni,Mushrooms,aa}"],
      price: "22.00",
      photo: "uploads\\1727388626084-Capture.PNG",
      quantity: 2,
      status: "Pending",
      created_date: "2024-09-30T20:16:00.540Z",
      customer_id: 4,
    },
  ];
  
    // Pagination handlers
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      const newRowsPerPage = parseInt(event.target.value, 10);
      setRowsPerPage(newRowsPerPage);
      setPage(0);
    };

    const rolesArray = Array.isArray(order) ? order : [];
    
  return (
    // <>
    <Box sx={{ borderWidth: 2, borderColor: "red" }}>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", padding: 2 }}
      >
        {/* button */}
        <Box
          variant="h6"
          sx={{ backgroundColor: "transparent", color: "#000000", mb: 2 }}
          // onClick={handleClickOpenAdd}
        >
          Packages
        </Box>

        <TableHeaderComponent />
      </Box>

      <TableComponent
        data={rolesArray}
        columns={columns}
        page={page}
        rowsPerPage={rowsPerPage}
        totalRows={rolesArray.length}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        // customerPhone={customerPhone}
      />
    </Box>
    // </>
  );
}

export default ViewOrder
