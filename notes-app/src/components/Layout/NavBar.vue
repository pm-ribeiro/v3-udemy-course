<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">
          Notes App
        </div>

        <a
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': showMobileNav }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click.prevent="showMobileNav = !showMobileNav"
          ref="navBarBurguerRef"
          v-if="storeAuth.user.id"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showMobileNav }"
        ref="navBarMenuRef"
        v-if="storeAuth.user.id"
      >
        <div class="navbar-start">
          <button
            v-if="storeAuth.user.id"
            class="button is-small is-info mt-3 ml-3"
            @click="logout"
          >
            Log out | {{storeAuth.user.email}}
          </button>
        </div>
        <div class="navbar-end">
          <router-link
            @click="closeMobileNav"
            to="/"
            class="navbar-item"
            active-class="is-active"
          >
            Notes
          </router-link>

          <router-link
            @click="closeMobileNav"
            to="/stats"
            class="navbar-item"
            active-class="is-active"
          >
            Stats
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
/** imports */
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core'
import { useStoreAuth } from '@/stores/storeAuth';

const storeAuth = useStoreAuth();

/** mobile nav */
const showMobileNav = ref(false),
      navBarMenuRef = ref(null),
      navBarBurguerRef = ref(null);

function closeMobileNav() {
  showMobileNav.value = false;
}

onClickOutside(navBarMenuRef, () => {
    closeMobileNav();
  },
  {
    ignore: [
      navBarBurguerRef
    ]
  }
);

const logout = () => {
  storeAuth.logoutUser();
  showMobileNav.value = false;
}

</script>

<style>

@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}

</style>