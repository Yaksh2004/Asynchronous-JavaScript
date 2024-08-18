// Write a function getUser(userId) that returns a Promise which resolves with a user object
//  { id: userId, name: 'User Name' } after 1 second. Write another function getPosts(userId) 
//  that returns a Promise which resolves with an array of posts { postId: number, title: string }
//   after 2 seconds. Chain these Promises to log the user and their posts.

function getUser(userId){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            const user = {id: userId, name: 'Yaksh'};
            resolve(user);
        }, 1000)
    })
}

function getPosts(userId){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            const posts = [{postId: 201, title: "First Post"}, {postId: 202, title: "Good Morning"}, {postId: 203, title: "feeling Blessed"}];
            resolve(posts);
        }, 2000)
    })
}

getUser(101).then(function(user){
    console.log(user);
    return user.id
}).then(function(id){
    return getPosts(id);
}).then(function(posts){
    console.log(posts);
}).catch(function(error) {
    console.error("An error occurred:", error);
});