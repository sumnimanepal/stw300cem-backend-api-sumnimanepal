const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');



router.post('/register', userController.create);
router.post('/authenticate', userController.authenticate);

//login
const login = (req, res) => {
    const Username = req.body.Username;
    const Password = req.body.Password;
  
    dbClient("Register")
      .select()
      .where({ Username: Username, Password: Password })
      .then(function (data) {
        if (data.length == 0) {
          res.json({ success: false });
        }
        else {
          res.json({ success: true, token:jwt.sign({Username}, "mysecretkey")});
      }
    })
      .catch(err => res.json({ success: false, message: err.message }));
  
  };
  
//   module.exports = router;
//     register, login
  

module.exports = router;

