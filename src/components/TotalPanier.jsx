import GooglePayButton from "@google-pay/button-react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Button from "./Button";
function TotalPanier() {
  return (
    <>
      <h3 className="my-2">Total du panier</h3>
      <div className="my-2 w-full flex justify-between">
        <span className="font-bold">Sous total</span>
        <span>$ 59.99 </span>
      </div>
      <div className="my-2 w-full flex justify-between">
        <span className="font-bold">Expédition</span>
        <span>$ 4.99 </span>
      </div>
      <div className="my-2 w-full flex justify-between">
        <span className="font-bold">Taxe</span>
        <span>$ 14.99 </span>
      </div>
      <div className="my-2 w-full flex justify-between">
        <span className="font-bold">Économies</span>
        <span>-</span>
      </div>
      <div className="my-2 w-full flex justify-between">
        <span className="font-bold">Total</span>
        <span>$ 74.71</span>
      </div>
      <div className="my-2 w-full align-middle mt-6 flex flex-col md:flex-row gap-4 items-center">
        <PayPalScriptProvider options={{ clientId: "test" }}>
          <PayPalButtons style={{ layout: "horizontal" }} />
        </PayPalScriptProvider>
        <GooglePayButton
          environment="TEST"
          paymentRequest={{
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
              {
                type: "CARD",
                parameters: {
                  allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                  allowedCardNetworks: ["MASTERCARD", "VISA"],
                },
                tokenizationSpecification: {
                  type: "PAYMENT_GATEWAY",
                  parameters: {
                    gateway: "example",
                    gatewayMerchantId: "exampleGatewayMerchantId",
                  },
                },
              },
            ],
            merchantInfo: {
              merchantId: "12345678901234567890",
              merchantName: "Demo Merchant",
            },
            transactionInfo: {
              totalPriceStatus: "FINAL",
              totalPriceLabel: "Total",
              totalPrice: "100.00",
              currencyCode: "USD",
              countryCode: "US",
            },
          }}
          onLoadPaymentData={(paymentRequest) => {
            console.log("load payment data", paymentRequest);
          }}
        />
      </div>
    </>
  );
}

export default TotalPanier;
