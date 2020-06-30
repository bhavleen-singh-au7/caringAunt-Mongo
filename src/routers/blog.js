import express from 'express';
import blog from '../controllers/blogcontroller';
const router = express.Router();

/* 
BLOG PUBLIC ROUTE - Required No LogIn
*/

router.get('/blogs', blog.blogs);
router.get('/track-your-period', blog.includeBlog1);
router.get('/amazing-facts', blog.includeBlog2);
router.get('/period-brunch', blog.includeBlog3);
router.get('/my-first-periods', blog.includeBlog4)
router.get('/menst-during-lockdown', blog.includeBlog5);
router.get('/pain-relief', blog.includeBlog6);
router.get('/reusable-sanitary-pads', blog.includeBlog7);

export default router;