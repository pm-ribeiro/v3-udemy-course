<template>
  <div class="auth">
    <div class="tabs is-centered">
      <ul>
        <li
          :class="{ 'is-active': !register}"
        >
          <a @click="register = false">Login</a>
        </li>
        <li :class="{ 'is-active': register}">
          <a @click="register = true">Register</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const register = ref(false);


</script>