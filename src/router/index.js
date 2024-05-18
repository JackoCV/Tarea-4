import { createRouter, createWebHistory } from 'vue-router';
import DistanceConverter from '@/components/DistanceConverter.vue';
import TemperatureConverter from '@/components/TemperatureConverter.vue';
import WeightConverter from '@/components/WeightConverter.vue';

const routes = [
  {
    path: '/',
    name: 'DistanceConverter',
    component: DistanceConverter,
  },
  {
    path: '/temperature',
    name: 'TemperatureConverter',
    component: TemperatureConverter,
  },
  {
    path: '/weight',
    name: 'WeightConverter',
    component: WeightConverter,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
