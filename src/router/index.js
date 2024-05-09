import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import BlogPostDetail from '../components/BlogPostDetail.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { name: 'blog-post-detail', path: '/posts/:postId', component: BlogPostDetail, props: true }
]

const router = createRouter({
    history: createWebHistory("/journey"),
    routes
})

export default router
