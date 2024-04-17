import express from 'express';
import { createUser, deleteUser, getAllUser, getOneUser, updateUser } from '../controllers/userController.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// create new User
// verifyAdmin will check if connected user is authenticated
router.post('/new', verifyUser, createUser);

// update new User
router.put('/:id', verifyUser, updateUser);

// delete a User
router.delete('/:id', verifyUser, deleteUser);

// get a single User
router.get('/:id', verifyUser, getOneUser);

// get all Users
router.get('/', verifyAdmin, getAllUser);


export default router;