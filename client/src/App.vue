<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/user/register">RegisterUser</router-link>
    <router-link to="/product/register">RegisterProduct</router-link>
  </nav>
  <router-view />
</template>
