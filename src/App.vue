<template>
  <div>
    <b>aaaa</b>
    <router-link :to="{ name: 'Home' }">ホーム</router-link>
    <router-link to="/blog">ブログ</router-link>
    <router-view />
  </div>
</template>

<script setup>
</script>
