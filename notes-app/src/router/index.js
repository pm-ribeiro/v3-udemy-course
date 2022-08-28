import { createRouter, createWebHashHistory } from 'vue-router'
import { useStoreAuth } from '../stores/storeAuth'
import ViewNotes from '@/views/ViewNotes.vue'
import ViewStats from '@/views/ViewStats.vue'
import ViewEditNote from '@/views/ViewEditNote.vue'
import ViewAuth from '@/views/ViewAuth.vue'

const routes = [
  {
    path: '/',
    name: 'notes',
    component: ViewNotes
  },
  {
    path: '/stats',
    name: 'stats',
    component: ViewStats
  },
  {
    path: '/edit-note/:id',
    name: 'edit-note',
    component: ViewEditNote
  },
  {
    path: '/auth/',
    name: 'auth',
    component: ViewAuth
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

// Navigation guards
router.beforeEach(async (to, from) => {
  const storeAuth = useStoreAuth();

  if (
    // make sure the user is authenticated
    !storeAuth.user.id &&
    // ❗️ Avoid an infinite redirect
    to.name !== 'auth'
  ) {
    // redirect the user to the login page
    return { name: 'auth' };
  }

  if(storeAuth.user.id && to.name === 'auth') {
    return false;
  }
})