import { constants } from "../middlewares";

export async function registerUser(req, res) {
  let userData = {
    data: req.body,
    message: "User-registration completed!",
  };
  res.status(200).json(userData);
}

export async function processPayment(req, res) {
  let userData = {
    data: req.body,
    message: "Payment processing completed!",
  };
  res.status(200).json(userData);
}

export async function paymentFailed(req, res) {
  let userData = {
    data: req.body,
    message: "Payment processing failed!",
  };
  res.status(500).json(userData);
}
