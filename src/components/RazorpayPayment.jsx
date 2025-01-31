import React, {useCallback, useEffect} from "react";
import { useLocation } from "react-router-dom";
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";

const RazorpayPayment = () => {
  const location = useLocation();
   const totalAmount = location.state?.totalAmt * 100 || 0; 
    const { error, isLoading, Razorpay } = useRazorpay();
    useEffect(() => {
      handlePaymentWeb();
    }, []);
  
    const handlePaymentWeb = useCallback(() => {
      const order = {
        amount: 10
      };
      const options = {
        key: "",
        amount: totalAmount?.toString(),
        currency: "INR",
        name: "SA",
        description: "Test Transaction",
        image: "https://i.ibb.co/tPQVbP2/ELogo.png",
        order_id: order.razorpayOrderId,
        handler: (res) => {
          if (res.razorpay_payment_id) {
          
          } else {
            alert("Something Went wrong");
          }
        },
        prefill: {},
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: 'blue',
        },
        modal: {
          backdropclose: true,
          confirm_close: true,
          handleback: true,
          animation: true,
        },
      };
  
      const rzpay = new Razorpay(options);
      rzpay.on("payment.success", function (response) {
        console.log("Payment success:", response);
      });
  
      rzpay.on("payment.failed", function (response) {
        console.error(
          "Payment failed:",
          response.error.code,
          response.error.description
        );
      });
  
      rzpay.open();
    }, [Razorpay]);
  
  
    return <></>;
  };
  
  export default RazorpayPayment;