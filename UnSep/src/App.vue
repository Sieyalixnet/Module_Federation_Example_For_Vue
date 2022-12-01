<template>
  <div class="hello">
    <h3>{{ message }}</h3>
    <div>
      <router-link to="/home">Go to Home</router-link>
      <router-link to="/news">Go to News</router-link>
      <router-link to="/user">Go to User</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "App",
    };
  },
};
</script>

<style >
h3 {
  margin: 30px 0 0;
  color: #42b983;
}
a{margin: 5px;}
</style>
