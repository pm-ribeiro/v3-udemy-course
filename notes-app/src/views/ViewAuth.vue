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

    <div class="card auth-form">
      <div class="card-content">
        <div class="title has-text-centered">
          {{formTitle}}
        </div>
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="e.g Alex Smith">
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const register = ref(false);

const formTitle = computed(() => {
  return register.value ? 'Register' : 'Login';
});

</script>

<style>
.auth-form {
  max-width: 400px;
  margin: 0 auto;
}
</style>