<template>
  <div>
      <form class="m-3" @submit.prevent="addPosts">
        <fieldset>
          <div class="form-group">
            <label for="username">Username</label>
            <input v-model="post.username" type="text" class="form-control" id="username"  placeholder="Enter username" required>
          </div>
          <div class="form-group">
            <label for="userImageURL">User Image</label>
            <input v-model="post.userImageURL" type="url" class="form-control" id="userImageURL"  placeholder="Enter userImageURL">
          </div>
          <div class="form-group">
            <label for="postImageURL">Post Image</label>
            <input v-model="post.postImageURL" type="url" class="form-control" id="postImageURL"  placeholder="Enter postImageURL" required>
          </div>
          <div class="form-group">
            <label for="description">Description for the post</label>
            <textarea v-model="post.description" class="form-control" id="description"  placeholder="Enter description" required></textarea >
          </div>
        </fieldset>
        <button @click="goBack = !goBack" type="submit" class="btn btn-primary">Submit</button>
        <div v-if="goBack" class="m-5"> <a href="/">Go back</a> to see the posts</div>
      </form>
  </div>
</template>

<script>
const API_URL = 'http://localhost:1234/posts'

export default {
  data() {
    return {
      posts : [],
      post : {
        username : '',
        userImageURL : '',
        description: '',
        postImageURL : ''
      },
      goBack : false
    }
  },
  methods : {
    addPosts() {
      fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(this.post),
        headers: {
          'content-type': 'application/json'
        }
      }).then(res => res.json())
        .then(result => {
          this.posts.push(result)
        })
    }
  },
  mounted() {
    fetch(API_URL)
      .then((res) => res.json())
      .then((result) => {
        this.posts = result
      })
  },
}
</script>
