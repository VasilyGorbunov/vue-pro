<template>
  <modal 
    title="Second modal with form + validate" 
    @close="$emit('close')"
  >
    <div slot="body">
      <form @submit.prevent="">
        <div class="form-item" :class="{ errorInput: $v.name.$error }">
          <label>Name:</label>
          <p class="errorText" v-if="!$v.name.required">Field is required!</p>
          <p class="errorText" v-if="!$v.name.minLength">Name must have at least {{ $v.name.$params.minLength.min }} !</p>
          <input type="text" v-model="name" :class="{ error: $v.name.$error }" @change="$v.name.$touch()">
        </div>
        <div class="form-item" :class="{ errorInput: $v.email.$error }">
          <label>Email:</label>
          <p class="errorText" v-if="!$v.email.required">Field is required!</p>
          <p class="errorText" v-if="!$v.email.email">Email is not correct</p>
          <input type="text" v-model="email" :class="{ error: $v.email.$error }" @change="$v.email.$touch()">
        </div>
        
        <button class="btn btnPrimary">Submit</button>
      </form>
    </div>
  </modal>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
import modal from '@/components/UI/Modal'
export default {
  components: { modal },
  data () {
    return {
      name: '',
      email: ''
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    email: {
      required,
      email
    }
  }
}
</script>

<style lang="scss">
.form-item .errorText {
  display: none;
  margin-bottom: 8px;
  font-size: 13.4px;
  color: #de4040;
}

.form-item {
  &.errorInput .errorText {
    display: block;
  }
}

input.error {
  border-color: #de4040;
}
</style>