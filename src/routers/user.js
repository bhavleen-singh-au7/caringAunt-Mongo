import express from 'express';
import auth from '../middlewares/auth';
import upload from '../config/multer';
import { signUpValidate, logInValidate } from '../middlewares/validate';

import user from '../controllers/userController';

import avatar from '../controllers/avatarController';

const router = express.Router();

/* 
LOGIN AND SIGNUP ARE PUBLIC ROUTES
*/

// Sign Up  
router.post('/users', signUpValidate, user.signup);

// Log In Page
router.get('/logIn', user.getLogin);

// Log In 
router.post('/users/login', logInValidate, user.login);

// Log Out
router.post('/users/logout', auth, user.logout);

// Log out from every device 
router.post('/users/logoutAll', auth, user.logoutAll);

// upload Profile Picture
router.post('/users/me/avatar', auth, upload.single('avatar'), avatar.uploadAvatar, avatar.multerErrHandler);

// Get Profile Picture   
router.get('/users/me/avatar', auth, avatar.getAvatar);

// User profile
router.get('/users/me', auth, user.userProfile);

// About Route
router.get('/about', user.about);

// Update profile
router.patch('/users/me', auth, user.updateUserProfile);

// Delete user profile    
router.delete('/users/me', auth, user.deleteUserProfile);

// Delete profile picture
router.delete('/users/me/avatar', auth, avatar.deleteAvatar);

export default router;