const expresss = require("express");
const router = expresss.Router();
const petsRoutes = require("./pets.ts");

router.use(petsRoutes);
module.exports = router;
