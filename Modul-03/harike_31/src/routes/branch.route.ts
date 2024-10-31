// 1. Import router
import { Router } from "express";

// 3. Import controller
// 5. Import GetBranches
// 7. Import GetBranchById
import {
  CreateBranch,
  GetBranches,
  GetBranchById,
} from "../controllers/branch.controller";

// 2. Insiasi Router
const router = Router();

// 4. Add Method
router.post("/branches", CreateBranch);

// 6. Add Method Get
router.get("/branches", GetBranches);

// find branch by id
router.get("/branches/:id", GetBranchById);

// End
export default router;
