import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import { inject } from "@vercel/analytics";
import { articles } from "./data/articles";
import Home from "./components/Home.vue";
import Article from "./components/Article.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{ path: "/", component: Home },
	{
		path: "/:articleSlug",
		component: Article,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior() {
		return { top: 0 };
	},
});

createApp(App).use(router).provide("articles", articles).mount("#app");
inject();
