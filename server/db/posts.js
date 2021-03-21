const db = require('./connection')
const Joi = require('joi')

const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    userImageURL : Joi.string().uri({
        scheme: [
            /https?/
        ]
    }),
    description: Joi.string().max(500).required(),
    postImageURL: Joi.string().uri({
        scheme: [
            /https?/
        ]
    }),
})

const posts = db.get('posts')

function getAll() {
    return posts.find();
}

function create(post) {
    if(!post.postImageURL) {
        post.postImageURL = "https://www.istekirtasiye.com/alpaka-turk-bayragi-200x300-cm-104503-89-B.jpg"
    }
    if(!post.userImageURL) {
        post.userImageURL = "https://cdn-compiled-asset.piccollage.com/assets/avatars/default-129b9feaa149a4183f61c705fbb77672d82d56dd1ae6401fdde55b9bc7d6785c.jpg"
    }
    const result = schema.validate(post)
    if(result.error == null){
        return posts.insert(post)
    } else {
        return Promise.reject(result.error)
    }
}

function remove() {
    return posts.remove();
}

module.exports = { getAll, create, remove }

