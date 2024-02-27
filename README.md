#Blog

## Endpoint Api :

### Authentication Endpoints:

- POST /api/v1/auth/register: Register a new user.
- POST /api/v1/auth/verify-email: Verify user's email.
- POST /api/v1/auth/login: User login.
- POST /api/v1/auth/forgot-password: Request to reset password.
- POST /api/v1/auth/reset-password: Reset user's password.
- DELETE /api/v1/auth/logout: Logout user.

### User Endpoints:

- GET /api/v1/user: Get all users.
- GET /api/v1/user/{id}: Get user by ID.
- GET /api/v1/user/showMe: Get current user.
- PATCH /api/v1/user/updateUser: Update user information.
- PATCH /api/v1/user/updateUserPassword Update user password.
- POST /api/v1/user/:userId/block: Block a user.

### Post Endpoints :

- GET /api/v1/post Get a list of all post.
- POST /api/v1/post Create a new post
- GET /api/v1/post/:postId: Get details of a specific post.
- POST /api/v1/post/:postId: Update of a specific post.
- DELETE /api/v1/post/:postId: Delete of a specific post.
- GET /api/v1/post/:postId/comments: Get a specific post reviews


### Comment Endpoints:

- POST /api/v1/comments: Create a new comment.
- GET /api/v1/comments: Get all comments.
- GET /api/v1/comments/{id}: Get comment by ID.
- PATCH /comments/{id}: Update comment by ID.
- DELETE /comments/{id}: Delete review by ID.

###Likes and Favorites:

- POST /api/posts/:id/like: Like a blog post.
- DELETE /api/posts/:id/like: Remove a like from a blog post.
- POST /api/posts/:id/favorite: Add a blog post to favorites.
- DELETE /api/posts/:id/favorite: Remove a blog post from favorites.


models:

user : username , email , password
post : title , content , author , likes , comments
Comment : user , post , content
like : user , post
favorite : user , post

