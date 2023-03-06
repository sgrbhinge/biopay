import { constants, dataSource } from "../middlewares";
import { User } from "../entity/User";
import { Transaction } from "../entity/Transaction";

export async function registerUser(req, res) {
  
  const user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.contact = req.body.contact;
  user.pin = req.body.pin;
  user.token = req.body.token;
  await dataSource.manager.save(user);

  let resData = {
    userId: user.id,
    message: "User-registration completed!",
  };
  res.status(200).json(resData);
}

export async function processPayment(req, res) {

  const transaction = new Transaction();
  transaction.userId = req.body.userId;
  transaction.amount = req.body.amount;
  transaction.currencyType = req.body.currencyType || 'USD';
  transaction.status = req.body.status || 'Completed';
  await dataSource.manager.save(transaction);

  let resData = {
    data: transaction.id,
    message: "Payment processing completed!",
  };
  res.status(200).json(resData);
}

export async function paymentFailed(req, res) {
  let resData = {
    data: req.body,
    message: "Payment processing failed!",
  };
  res.status(500).json(resData);
}