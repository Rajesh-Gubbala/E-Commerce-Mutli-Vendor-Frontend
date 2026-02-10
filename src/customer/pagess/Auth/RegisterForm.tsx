import React from "react";
import { useAppDispatch } from "../../../State/Store";
import { useFormik } from "formik";
import { sendLoginSignupOtp } from "../../../State/AuthSlice";
import { Button, TextField } from "@mui/material";

const RegisterForm = () => {

      const dispatch = useAppDispatch();
    
      const formik = useFormik({
        initialValues: {
          email: "",
          otp: "",
          fullname:""
        },
    
        onSubmit: (values) => {
          console.log("form data", values);
          // values.otp=Number(values.otp)
        
        },
      });
    
       const handleSendOtp = () => {
          dispatch(sendLoginSignupOtp({ email: formik.values.email }));
        };
  return (
    <div>
      <div>
  <h1 className="text-center font-bold text-xl text-green-600 pb-8">
    Signup
  </h1>

  <div className="space-y-5">
        <TextField
          fullWidth
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        {true && (
          <div className="space-y-5">
           <div className="space-y-2">
           <p className="font-medium text-sm opacity-60">
              Enter OTP sent to your{" "}
            </p>

            <TextField
              fullWidth
              name="otp"
              label="OTP"
              value={formik.values.otp}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.otp && Boolean(formik.errors.otp)}
              helperText={formik.touched.otp && formik.errors.otp}
            />
           </div>
              <TextField
          fullWidth
          name="fullname"
          label="Full Name"
          value={formik.values.fullname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.fullname && Boolean(formik.errors.fullname)}
          helperText={formik.touched.fullname && formik.errors.fullname}
        />
          </div>
        )}
       { false && <Button
        onClick={handleSendOtp}
        fullWidth
        variant="contained"
        sx={{ py: "11px" }}
        >
        send otp
        </Button>}

        <Button
          onClick={() => formik.handleSubmit()}
          fullWidth
          variant="contained"
          sx={{ py: "11px" }}
        >
          Signup
        </Button>
      </div>
</div>

    </div>
  );
};

export default RegisterForm;
