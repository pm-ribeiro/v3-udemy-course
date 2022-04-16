<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <router-link
          to="/"
          class="navbar-item"
          active-class="is-active"
        >
          Notes
        </router-link>

        <router-link
          to="/stats"
          class="navbar-item"
          active-class="is-active"
        >
          Stats
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>

<style scoped>

</style>