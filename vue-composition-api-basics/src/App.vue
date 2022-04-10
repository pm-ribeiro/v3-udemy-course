<template>
  <div class="user-data">
    <h3>
      {{user.name}} @{{user.username}}
    </h3>
  </div>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
    <RouterLink to="/modals">Modals</RouterLink>
  </nav>

  <RouterView />

</template>

<script setup>

  import { reactive, provide } from 'vue';

  /** user data */
  const user = reactive(
    {
      name: 'John',
      username: 'johndoe',
    }
  )

  provide('userData', user);
</script>

<style>
@import '@/assets/base.css';

#app {
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.user-data {
  position: absolute;
  top: 4px;
  right: 4px;
  background-color: rgb(225, 225, 225);
  font-size: 12px;
  font-weight: bold;
  padding: 8px;
  border-radius: 4px;
}

</style>
