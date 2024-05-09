<template>
    <div class="blog-post-detail" ref="contentContainer"></div>
</template>

<script>
import { parse } from "markdown_to_html";
import { ref, onMounted, watch } from "vue";
import "prismjs/themes/prism-tomorrow.css"; // Import Prism.js CSS
import Prism from "prismjs"; // Import Prism.js
import 'prismjs/components/prism-python'; // Import Python language support
import 'prismjs/components/prism-bash'; // Import Python language support
// Import other language components as needed

export default {
    name: 'BlogPostDetail',
    props: {
        postId: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const contentContainer = ref(null);

        const loadMarkdownContent = () => {
            fetch(props.postId)
                .then(response => response.text())
                .then(data => {
                    loadBlogPost(data);
                })
                .catch(err => {
                    console.error('Error fetching the file:', err);
                });
        };

        const loadBlogPost = (content) => {
            contentContainer.value.innerHTML = parse(content);
            // Highlight code blocks with Prism.js
            Prism.highlightAllUnder(contentContainer.value);
        };

        // Load the markdown content when the postId changes
        watch(() => props.postId, () => {
            loadMarkdownContent();
        });

        // Load the markdown content when the component is mounted
        onMounted(() => {
            loadMarkdownContent();
        });

        return {
            contentContainer
            // Other variables returned from setup
        };
    }
}
</script>
<style scoped>
/* @import './assets/prism.css'; */

.blog-post-detail {
    max-width: 800px;
    /* Set a maximum width for the content */
    margin: 0 auto;
    /* Center the content horizontally */
    padding: 20px;
    /* Add some padding around the content */
    color: #eeeeee;
    /* Change text color to a slightly darker shade */
    font-family: Arial, sans-serif;
    /* Change font to a common sans-serif font */
    line-height: 1.6;
    /* Increase line height for better readability */
}

h2 {
    color: #94a0ad;
    /* Change heading color to a blue shade */
    margin-bottom: 20px;
    /* Increase margin bottom for headings */
}

a {
    color: #546475;
    /* Change link color to blue */
}

a:hover {
    text-decoration: underline;
    /* Add underline on hover for links */
}


@media (max-width: 768px) {
    .blog-post-detail {
        padding: 10px;
        /* Adjust padding for smaller screens */
        max-width: 100%;
        /* Set maximum width to full width on smaller screens */
    }
}
</style>