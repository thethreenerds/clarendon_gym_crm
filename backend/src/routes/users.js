const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
} = require('../controllers/users');

router.get('/', getAllUsers);
router.post('/', userController.createUser);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;

console.log('getUserById is:', getUserById);
