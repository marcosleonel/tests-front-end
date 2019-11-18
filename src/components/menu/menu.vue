<template>
  <el-menu class="app-menu" mode="horizontal">
    <el-menu-item index="1" disabled>
      <img
        class="app-menu__logo"
        src="/img/bad-mothafuckin-logo.jpg"
        alt="Bad Mothafucking Logo"
      />
    </el-menu-item>

    <el-menu-item index="2">
      <router-link to="/">Home</router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link to="/result">Result</router-link>
    </el-menu-item>
  </el-menu>
</template>

<script src="./menu.js"></script>
<style src="./menu.scss" lang="scss" scoped></style>
