const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createNewUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
  } = require('../../controllers/user-controller');

// /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createNewUser);
  

// /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

//  /api/users/:userId/friends/:friendId

router
  .route('/:id/friends')
  .post(addFriend)

router
  .route('./:id/friends/:friendId')
  .delete(deleteFriend);

module.exports = router;