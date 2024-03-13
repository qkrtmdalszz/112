<template>
  <div class="menuWrap">
    <a class="logo">CSLU</a>
    <router-link to="/">홈</router-link>
    <router-link to="/service-introduction">서비스 소개</router-link>
    <router-link to="/problem-creation">문제 만들기</router-link>
    <router-link to="/my-profile">내 정보</router-link>
    <button class="btn" @click="goToSignin">Sign in</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goToSignin = () => {
  router.push('/Sign-in');
}
</script>

<style>
  @import "C:\Users\qkrtm\112\src\layouts\header.css";
</style>
