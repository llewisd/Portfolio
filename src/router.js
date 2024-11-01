import { createRouter, createWebHistory } from "vue-router";
import StartPage from "./views/StartPage.vue";
import HomePage from "./views/HomePage.vue";
import CVPage from "./views/CVPage.vue";
import ScorePage from "./views/ScorePage.vue";

const routes = [
{ path: "/", component: StartPage },
{
     path: "/home",
     component: HomePage,
     children: [
     { path: "mycv", component: CVPage },
     { path: "scoreboard", component: ScorePage },
     ],
},
];

const router = createRouter({
history: createWebHistory(),
routes,
});

export default router;