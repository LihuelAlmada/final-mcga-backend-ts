import { Router } from "express";
//import passport from "passport";
import {TokenValidation} from '../middleware/auth';

const router = Router();

import { special } from "../controller/private";

router.get(
  "/special",
  //the Strategy in Auth mddleware is "jwt" for default
  //passport.authenticate("jwt", { session: false }),
  TokenValidation,
  special
);

export default router;