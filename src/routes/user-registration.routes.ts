import { Router } from "express";
import {
  registerUser,
  processPayment,
  paymentFailed,
} from "../services/userRegistration.service";
const router = Router();

router.get("/", (req, res) => {
  res.send("User registration API!!");
});

router.post("/", registerUser);
router.post("/process-payment", processPayment);
router.post("/payment-failed", paymentFailed);

module.exports = router;