const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');

router.get('/', auth, userController.getUsers);
router.get('/:id', auth, userController.getUserById);
router.post(
  '/',
  [
    body('name').notEmpty(),
    body('email').isEmail(),
    body('age').isInt({ min: 0 }),
    body('address').notEmpty(),
    body('dni').notEmpty(),
    body('tlf').notEmpty(),
    body('password').isLength({ min: 6 })
  ],
  userController.addUser
);
router.put(
  '/:id',
  [
    body('name').optional().notEmpty(),
    body('email').optional().isEmail(),
    body('age').optional().isInt({ min: 0 }),
    body('address').optional().notEmpty(),
    body('dni').optional().notEmpty(),
    body('tlf').optional().notEmpty(),
    body('password').optional().isLength({ min: 6 })
  ],
  auth,
  userController.updateUser
);
router.delete('/:id', auth, userController.deleteUser);
router.post('/login', userController.login);

module.exports = router;
