<template>
  <div class="home">
      <div class="card mb-3 mt-3 ml-3 post" v-for="post in reversedPosts" :key="post.id" >
        <div class="card-header">
          <img class="user" :src="post.userImageURL" alt="">
          <h3 class="header" > {{post.username}} </h3>
        </div>
        <img :src="post.postImageURL" class="d-block user-select-none body" alt="">
        <div class="card-body">
          <p class="card-text"> {{post.description}} </p>
        </div>
      </div>
  </div>
</template>

<script>
const API_URL = 'http://localhost:1234/posts'

export default {
  name: 'Home',
  data() {
    return {
      posts : [],
    }
  },
  mounted() {
    fetch(API_URL)
      .then((res) => res.json())
      .then((result) => {
        this.posts = result
        console.log(this.posts)
      })
  },
  computed : {
    reversedPosts() {
      return this.posts.slice().reverse();
    }
  }
}
</script>

<style>
.post {
  height: 550px;
  width: 550px;
}
.header {
  margin-left: 60px;
  margin-top: 10px;
  font-size: 25px;
}
img.user {
  height: 50px;
  width: 50px;
  float: left;
  border-radius: 50%;
}
img.body{
  width: 100%;
  height: 70%;
}
</style>
