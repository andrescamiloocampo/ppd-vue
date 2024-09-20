import { createRouter,createWebHistory } from "vue-router";
import PpdProject from "@/components/PpdProject.vue";
import HelloWorld from "@/views/HelloWorld.vue";

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: PpdProject
    },
    {
        path: '/hello',
        name: 'Hello',
        component: HelloWorld
    }
]

const router = createRouter({history: createWebHistory(),routes})
export default router;