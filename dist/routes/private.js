"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const router = express_1.Router();
const private_1 = require("../controller/private");
router.get("/special", auth_1.TokenValidation, private_1.special);
exports.default = router;
