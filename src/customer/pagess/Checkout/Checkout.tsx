import {
  Box,
  Button,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";
import PricingCart from "../Cart/PricingCart";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const paymentGatwayList = [
  {
    value: "RAZORPAY",
    image:
      "https://razorpay.com/newsroom-content/uploads/2020/12/output-onlinepngtools-1-1.png",
    label: "",
  },
  {
    value: "STRIPE",
    image:
      "data:image/png;base64,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",
    label: "",
  },
];

const Checkout = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [paymentGatway,setPaymentGatway]=React.useState("RAZORPAY");

  const handlePaymentChange =(event:any)=>{
    setPaymentGatway(event.target.value);
  }

  return (
    <>
      <div className="pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen">
        <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9">
          <div className="col-span-2 space-y-5">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold"> Select Address</h1>
              <Button onClick={handleOpen}>Add new Address</Button>
            </div>
            <div className="text-xs font-medium space-y-5">
              <p>Saved Addresses</p>
              <div className="space-y-3">
                {[1, 1, 1, 1].map((item) => (
                  <AddressCard />
                ))}
              </div>
            </div>

            <div className="py-4 px-5 rounded-md border">
              <Button onClick={handleOpen}>Add new Address</Button>
            </div>
          </div>
          <div>
            <div>
              <div className="space-y-3 border p-5 rounded-md">
                <h1 className="text-green-700 font-medium pb-2 text-center">Choose Payment Gatway</h1>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  className="flex justify-between pr-0"
                  onChange={handlePaymentChange}
                  value={paymentGatway}
                >
                  {paymentGatwayList.map((item) => (
                    <FormControlLabel
                      className="border w-[45%] pr-2 rounded-md flex justify-center"
                      value={item.value}
                      control={<Radio />}
                      label={
                        <img
                          className={`${
                            item.value == "stripe" ? "w-14" : ""
                          } object-cover`}
                          src={item.image}
                          alt={item.label}
                        />
                      }
                    />
                  ))}
                </RadioGroup>
              </div>
            </div>

            <div className="border rounded-md">
              <PricingCart />
              <div className="p-5">
                <Button fullWidth variant="contained" sx={{ py: "11px" }}>
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddressForm paymentGatway={paymentGatway}/>
        </Box>
      </Modal>
    </>
  );
};

export default Checkout;
