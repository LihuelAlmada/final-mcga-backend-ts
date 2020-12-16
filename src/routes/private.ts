import { Router } from "express";
import { TokenValidation } from '../middleware/auth';

const router = Router();

import { special } from "../controller/private";

router.get(
    "/special",
    TokenValidation,
    special
);

export default router;