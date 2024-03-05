import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("login");
});
router.get("/signup", (req, res) => {
  res.render("signup");
});


export default router;
