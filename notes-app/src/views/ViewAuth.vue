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

        <form
          @submit.prevent="onSubmit"
        >
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
              class="input"
              type="email"
              placeholder="e.g. johndoe@gmail.com"
              v-model="credentials.email"
            >
            </div>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input
              class="input"
              type="password"
              placeholder="Type a password"
              v-model="credentials.password"
              >
            </div>
          </div>

          <div class="field is-grouped is-grouped-right">
            <p class="control">
              <button class="button is-primary">
                {{formTitle}}
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import { useStoreAuth } from '@/stores/storeAuth';

const storeAuth = useStoreAuth();

const register = ref(false);

const formTitle = computed(() => {
  return register.value ? 'Register' : 'Login';
});


const onSubmit = () => {
  if(!credentials.email || !credentials.password) {
    alert('Enter email and password');
    return;
  }

  if(register.value) {
    storeAuth.registerUser(credentials);
  } else {
    storeAuth.loginUser(credentials);
  }
}

const credentials = reactive({
  email: '',
  password: ''
});


</script>

<style>
.auth-form {
  max-width: 400px;
  margin: 0 auto;
}
</style>