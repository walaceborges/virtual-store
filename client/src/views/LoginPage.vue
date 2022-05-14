<template>
  <div class="home">
    <layout>
      <loginForms></loginForms>
    </layout>
  </div>
</template>

<script>
import loginForms from "@/components/LoginForms.vue";
import layout from "../layout/default.vue";

export default {
  components: {
    loginForms,
    layout,
  },
};
</script>
