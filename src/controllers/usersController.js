//requiriendo express validator//
const { validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
//----------------------------//
const usersController = {
  login: (req, res) => {
    res.render("users/login", {
      pageTitle: "Login",
    });
  },
  signup: (req, res) => {
    res.render("users/signup", {
      pageTitle: "Registrarse",
    });
  },
  profile: (req, res) => {
    res.render("users/profile", {
      pageTitle: "Perfil",
      id: req.params.id,
    });
  },
  edit: (req, res) => {
    res.render("users/editUser", {
      pageTitle: "Editar",
    });
  },
  editPut: (req, res) => {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render("users/editUser", {
        errors: resultValidation.mapped(),
        pageTitle: "Editar",
        oldData: req.body
      });
    }else{
      return res.redirect("edit")
    }
  },
};
module.exports = usersController;
