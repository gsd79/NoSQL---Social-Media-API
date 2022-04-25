const router = require('express').Router();
const {
    getThoughts,
    createNewThought,
    getThoughtById,
    updateThought,
    deleteThought,
    createNewReaction,
    deleteReaction
} = require('../../controllers/user-controller');

// /api/users
router
    .route('/thoughts')
    .get(getThoughts)
    .post(createNewThought)
    // TODO: don't forget to push the created thought's _id to the associated user's thoughts array field
    

// /api/thoughts/:id
router
    .route('thoughts/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions

router
    .route('/thoughts/:thoughtId/reactions')
    .post(createNewReaction)
    .delete(deleteReaction);

module.exports = router;