<template>
  <div class="home">
    <layout>
      <loginForms></loginForms>
    </layout>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>

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
