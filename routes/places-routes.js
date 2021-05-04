const express = require('express');
const placesControllers = require('../controllers/places-controllers');
const { check } = require('express-validator');
const fileUpload = require('../middleware/file-upload');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.get('/:pid', placesControllers.getPlaceById);

router.get('/user/:uid', placesControllers.getPlacesByUserId);

// as request goes from the top to bottom, we put middleware here to make sure a request needs a token to reach the routes below.
router.use(checkAuth);

router.post('/', 
            fileUpload.single('image'),  // extract the image uploaded
            [check('title').not().isEmpty(),
             check('description').isLength({min: 5}),
             check('address').not().isEmpty()
            ], 
            placesControllers.createPlace);

router.patch('/:pid', 
             [check('title').not().isEmpty(),
              check('description').isLength({min: 5})
             ],
             placesControllers.updatePlace);

router.delete('/:pid', placesControllers.deletePlace);

module.exports = router;