// Write a function fetchUser(userId, callback) that fetches user data, then fetch the user's 
// posts with fetchPosts(userId, callback), and finally, fetch the comments on the first post 
// with fetchComments(postId, callback). The callbacks should be nested to simulate callback hell.

function fetchUser(userId, callback){
    console.log("Fetching user Data: ");
    setTimeout(() => {
        const user = {id: userId, username: "Yaksh Garg" }
        callback(user);
    }, 2000)
}

function fetchPosts(userId, callback){
    console.log("Fetching posts from id: " + userId);
    setTimeout(() => {
        const posts = [{postId: 101, title: "Getting Started"}, {postId: 102, title: "Happy Diwali"}, {postid: 103, title: "Fresher's Party"}];
        callback(posts);
    }, 2000)
}

function fetchComments(postId, callback){
    console.log("Fetching commnets from the post with postId: ", postId);
    setTimeout(() => {
        const comments = [{id: 201, comment: "Nice One!"}, {id: 202, comment: "Looking great!"}, {id: 203, comment: "Great Post!"}];
        callback(comments);
    }, 2000)
}

fetchUser(1, function(user) {
    fetchPosts(user.id, function(posts) {
        fetchComments(posts[0].postId, function(comments) {
            console.log("User: ", user);
            console.log("First Post: ", posts[0]);
            console.log("Comments on First Post: ", comments);
        })
    })
})