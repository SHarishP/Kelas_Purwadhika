// 1. Import router
import { Router } from "express";

// 3. Import controller
// 5. Import GetBranches
// 7. Import GetBranchById
// 8. Import UpdateBranchById
import {
  CreateBranch,
  GetBranches,
  GetBranchById,
  UpdateBranchById,
  DeleteBranch,
} from "../controllers/branch.controller";
import { VerifyToken, AdminGuard } from "../middleware/auth.middleware";

// 2. Insiasi Router
const router = Router();

// 4. Add Method
// 33.45 Meambahkan AdminGuard, dimana hanya admin yang bisa melihat keseluruhan branches
router.post("/branches", VerifyToken, AdminGuard, CreateBranch);

// 6. Add Method Get
// 33.42 Menambahan verifyToken sebelum melihat data GetBranches
router.get("/branches", VerifyToken, GetBranches);

// find branch by id
router.get("/branches/:id", GetBranchById);

//  update branch by id
router.patch("/branches/:id", UpdateBranchById);

//  delete branch by id
router.delete("/branches/:id", DeleteBranch);

// End
export default router;
