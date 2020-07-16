const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const authChef = require("../middleware/authChef");
const ChefServise = require("../models/ChefService");

// enregistrement du chef service
router.post(
  "/chef",

  [
    check("nom", "SVP taper le nom du patient").not().isEmpty(),
    check("prenom", "SVP taper le prenom du patient").not().isEmpty(),
    check("email", "SVP taper le mail du patient").isEmail(),
    check("phone", "SVP taper le num du tel du patient").not().isEmpty(),
    check("matricule", "immatrucule dois etre 9 characters")
      .not()
      .isEmpty()
      .isLength({ max: 9 }),
    check("password", "Password dois etre 6 characters aux minimum")
      .not()
      .isEmpty()
      .isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }
    const { nom, prenom, email, phone, matricule, password } = req.body;

    ChefServise.findOne({ matricule })
      .then((chefServise) => {
        if (chefServise) {
          res.status(400).json({ msg: "ChefServise dejat exists!!" });
        } else {
          newchefServise = new ChefServise({
            nom,
            prenom,
            email,
            phone,
            matricule,
            password,
          });
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(chefService.password, salt, (err, hashedPassword) => {
              chefService.password = hashedPassword;
              chefService.save();
              res.status(400).json({ msg: "chef service ajouter!!" });
              const payload = {
                chefService: {
                  id: chefService.id,
                },
              };
              jwt.sign(
                payload,
                jwtSecret,
                { expiresIn: 3600000 },
                (err, token) => {
                  if (err) throw err;
                  res.json({ token });
                }
              );
            });
          });
        }
      })

      .catch((err) => {
        console.error(err.message);
        res.status(500).send("erreure du serveur");
      });
  }
);

module.exports = router;
