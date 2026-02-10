import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppDispatch, useAppSelector } from "../../../../State/Store";
import { fetchSellerOrders, updateOrderStatus } from "../../../../State/Seller/SellerOrderSlice";
import { Button, Menu, MenuItem } from "@mui/material";
import { stat } from "fs";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const orderStatusColor = {
  PENDING: { color: "#FFA500", label: "PENDING" }, // Orange
  CONFIRMED: { color: "#F5BCBA", label: "CONFIRMED" },
  PLACED: { color: "#F5BCBA", label: "PLACED" },
  SHIPPED: { color: "#1E90FF", label: "SHIPPED" }, // DodgerBlue
  DELIVERED: { color: "#32CD32", label: "DELIVERED" }, // LimeGreen
  CANCELLED: { color: "#FF0000", label: "CANCELLED" }, // Red
};

const orderStatus = [
  { color: "#FFA500", label: "PENDING" },
  { color: "#F5BCBA", label: "PLACED" },
  { color: "#F5BCBA", label: "CONFIRMED" },
  { color: "#1E90FF", label: "SHIPPED" },
  { color: "#32CD32", label: "DELIVERED" },
  { color: "#FF0000", label: "CANCELLED" },
];

export default function OrderTable() {
  const dispatch = useAppDispatch();
  const { sellerOrder } = useAppSelector((store) => store);

  React.useEffect(() => {
    dispatch(fetchSellerOrders(localStorage.getItem("jwt") || " "));
  }, []);

  const [anchorEl, setAnchorEl] = React.useState<null | any>({});
  const open = Boolean(anchorEl);
  const handleClick = (event: any, orderId: number) => {
    setAnchorEl((prev: any) => ({ ...prev, [orderId]: event.currentTarget }));
  };
  const handleClose = (orderId: number) => () => {
    setAnchorEl((prev: any) => ({ ...prev, [orderId]: null }));
  };
 const handleUpateOrderStatus=(orderId:number,orderStatus:any)=>()=>{
  dispatch(updateOrderStatus({jwt:localStorage.getItem("jwt") || "",orderId,orderStatus}))
 }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Order Id</StyledTableCell>
            <StyledTableCell>Products</StyledTableCell>
            <StyledTableCell align="right">Shippping Address</StyledTableCell>
            <StyledTableCell align="right">Order Status</StyledTableCell>
            <StyledTableCell align="right">Update</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sellerOrder.orders.map((item) => (
            <StyledTableRow key={item.id}>
              {/* Order ID */}
              <StyledTableCell component="th" scope="row">
                {item.id}
              </StyledTableCell>

              {/* Product Details */}
              <StyledTableCell>
                {item.orderItems.map((orderItem) => (
                  <div
                    key={orderItem.id}
                    className="flex gap-5 items-center mb-3"
                  >
                    {/* Product Image (Ensuring Only One Image) */}
                    <img
                      className="w-20 rounded-md"
                      src={
                        orderItem.product.images?.length
                          ? orderItem.product.images[0]
                          : "/placeholder-image.jpg"
                      }
                      alt={orderItem.product.title}
                    />

                    {/* Product Info */}
                    <div className="flex flex-col">
                      <h1>
                        <strong>Title:</strong> {orderItem.product.title}
                      </h1>
                      <h1>
                        <strong>Selling Price:</strong> ₹
                        {orderItem.product.sellingPrice}
                      </h1>
                      <h1>
                        <strong>Color:</strong> {orderItem.product.color}
                      </h1>
                      <h1>
                        <strong>Size:</strong> {orderItem.product.sizes}
                      </h1>
                    </div>
                  </div>
                ))}
              </StyledTableCell>

              {/* Shipping Address */}
              <StyledTableCell align="right">
                <div className="flex flex-col gap-y-2">
                  <h1>{item.shippingAddress.name}</h1>
                  <h1>
                    {item.shippingAddress.address}, {item.shippingAddress.city}
                  </h1>
                  <h1>
                    {item.shippingAddress.state} -{" "}
                    {item.shippingAddress.pinCode}
                  </h1>
                  <h1>
                    <strong>Mobile:</strong> {item.shippingAddress.mobile}
                  </h1>
                 
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">
                <span className="px-5 py-2 border rounded-full text-green-600 border-green-600">
                  {item.orderStatus}
                </span>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  size="small"
                  color="primary"
                  onClick={(e) => handleClick(e, item.id)}
                >
                  status
                </Button>
                <Menu
                  id={`status-menu-${item.id}`} // Fixed template literal to avoid spaces
                  anchorEl={anchorEl[item.id]}
                  open={Boolean(anchorEl[item.id])}
                  onClose={handleClose(item.id)}
                  MenuListProps={{
                    "aria-labelledby": `status-menu-${item.id}`, // Corrected key syntax
                  }}
                >
                  {orderStatus.map((status) => 
                    <MenuItem key={status.label} onClick={handleUpateOrderStatus(item.id,status.label)}>
                      {status.label}
                    </MenuItem>
                  )}
                  {/* <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                </Menu>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
