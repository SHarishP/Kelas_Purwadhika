import { Router } from "express";
import {
  GetExpenseList,
  GetExpenseDetail,
  CreateNewExpense,
  UpdateExpense,
  DeleteExpense,
} from "../controller/tracker.controller";

const router = Router();

// Get expense list
router.get("/tracker", GetExpenseList);

// Get expense detail
router.get("/tracker/:id", GetExpenseDetail);

// Create new expense data
router.post("/tracker", CreateNewExpense);

// Edit expense data
router.put("/tracker/:id", UpdateExpense);

// Delete expense data
router.delete("/tracker/:id", DeleteExpense);

export default router;
