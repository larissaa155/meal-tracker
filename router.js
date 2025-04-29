import { createRouter, createWebHistory } from 'vue-router';
import InputPage from './components/InputPage.vue';
import ResultsPage from './components/ResultsPage.vue';
import TrackerPage from './components/TrackerPage.vue';

const routes = [
  { path: '/', name: 'Input', component: InputPage },
  { path: '/results', name: 'Results', component: ResultsPage },
  { path: '/tracker', name: 'Tracker', component: TrackerPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
