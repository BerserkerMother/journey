<!-- BlogPostDetail.vue -->
<template>
    <div class="blog-post-detail" :innerHTML="htmlContent"></div>
</template>

<script>
import { parse } from "markdown_to_html";
import { ref, onMounted, watch } from "vue";

export default {
    name: 'BlogPostDetail',
    props: {
        postId: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const htmlContent = ref('');

        // Load the markdown content when the postId changes
        watch(() => props.postId, () => {
            loadMarkdownContent();
        });

        const loadMarkdownContent = () => {
            // Fetch the Markdown file
            const mdFilePath = `../blogs/${props.postId}`;
            fetch(mdFilePath)
                .then(response => response.text())
                .then(data => {
                    loadBlogPost(data);
                })
                .catch(err => {
                    console.error('Error fetching the file:', err);
                });
        };

        const loadBlogPost = (content) => {
            htmlContent.value = parse(content);
            // console.log('Processed Markdown content:', htmlContent.value);
        };

        // Load the markdown content when the component is mounted
        onMounted(() => {
            loadMarkdownContent();
        });

        return {
            htmlContent
            // Other variables returned from setup
        };
    }
}
</script>

<style>
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

pre {
    background-color: #292929;
    /* Set background color for code blocks */
    border: 1px solid #dee2e6;
    /* Add a border around code blocks */
    padding: 15px;
    /* Add padding inside code blocks */
    overflow-x: auto;
    /* Add horizontal scroll for overflow */
    font-size: 14px;
    /* Decrease font size for code blocks */
}

code {
    font-family: Consolas, monospace;
    /* Change code font family */
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