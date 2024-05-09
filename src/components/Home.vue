<template>
  <div class="container">
    <div class="blog-grid">
      <div v-for="post in posts" :key="post.id" class="blog-post">
        <BlogPost :post="post" @view-post="viewPost" />
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from './BlogPost.vue';

export default {
  name: 'HomePage',
  components: {
    BlogPost
  },
  data() {
    return {
      posts: [] // Initialize an empty array to store blog posts
    }
  },
  created() {
    // Fetch blog posts when the component is created
    this.fetchBlogPosts();
  },
  methods: {
    async fetchBlogPosts() {
      const blogNames = 'https://raw.githubusercontent.com/BerserkerMother/blogs/main/list.json'; // Path to the blogs folder
      const baseBlogPath = 'https://raw.githubusercontent.com/BerserkerMother/blogs/main/';
      try {
        const response = await fetch(blogNames);
        const files = await response.json(); // Assuming blogs folder returns JSON with file names

        for (const file of files) {
          const filePath = `${baseBlogPath}/${file}`;
          const fileResponse = await fetch(filePath);
          const fileContent = await fileResponse.text();
          const lines = fileContent.split('\n');
          const title = lines[2]; // Use file name as title
          const id = file; // Use file path as ID
          const content = lines.slice(10, 15).join('\n'); // Get first 4 lines of content

          const post = {
            id: id,
            title: title,
            content: content
          };

          this.posts.push(post);
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    },
    viewPost(postId) {
      // Navigate to the route corresponding to the selected blog post
      this.$router.push({
        name: 'blog-post-detail', params: { postId: postId }
      });
    }
  }
}
</script>


<style>
/* Grid container styles */
.container {
  max-width: 800px;
  /* Example maximum width */
  margin: 0 auto;
  /* Center the container */
}

/* Grid layout for blog posts */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  /* Two columns, responsive */
  gap: 20px;
  /* Spacing between blog posts */
}
</style>