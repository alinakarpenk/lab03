const express = require("express")
const userControllers = require('../controllers/userControllers')
const router = express.Router()

router.post('/users', userControllers.createUser);
router.get('/users', userControllers.getUsers);

module.exports = router;

/*router.get('/user/:id',userControllers.getUser);
router.delete('/user/:id', userControllers.deleteUser);
router.patch('/users/:id', userControllers.UpdateUser);*/

module.exports = router


