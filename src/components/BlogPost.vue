<!-- BlogPost.vue -->
<template>
  <div class="blog-post" @click="handleClick">
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <!-- Add more elements to display additional information, such as author, date, etc. -->
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  props: {
    post: {
      type: Object,
      required: true
    },
  },
  methods: {
    handleClick() {
      // Invoke the viewPost method and pass the post ID
      this.$emit('view-post', this.post.id);
    }
  }

}
</script>

<style scoped>
/* Add styles for blog posts */
.blog-post {
  margin-bottom: 20px;
  cursor: pointer;
  background-color: #f9f9f9c9;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.blog-post h2 {
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: #333;
}

.blog-post p {
  font-size: 1rem;
  color: #666;
}
</style>