const router = require('express').Router();
const {
    getThoughts,
    createNewThought,
    getThoughtById,
    updateThought,
    deleteThought,
    createNewReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router
    .route('/')
    .get(getThoughts)
    .post(createNewThought)


// /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions

router
    .route('/:thoughtId/reactions')
    .post(createNewReaction)

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);



module.exports = router;