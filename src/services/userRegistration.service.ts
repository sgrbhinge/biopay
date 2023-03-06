import { constants, dataSource } from "../middlewares";
import { User } from "../entity/User";
// import { User } from "../entity/User"

export async function registerUser(req, res) {
  let userData = {
    // data: req.body,
    userId: req.body["email"].split('@')[0],
    message: "User-registration completed!",
  };
  // console.log("userData", userData);
  
  // const user = new User();
  // user.name = req.body.name;
  // user.email = req.body.email;
  // user.contact = req.body.contact;
  // user.pin = req.body.pin;
  // user.token = req.body.token;

  // await dataSource.manager.save(user);
  // console.log(user);
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