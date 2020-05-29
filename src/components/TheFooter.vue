<template>
  <footer>
    <p class="rights">&copy; 2020 😋 Project based on Udemy Course 💟 Prepared by Jakub Kruszyński</p>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  width: 100vw;
  position: fixed;
  bottom: 5px;
  margin: 0;
  border-top: 2px solid #ccc;
  color: #888;
  z-index: -1;
}

footer p.rights {
  text-align: center;
  padding-top: 10px;
  font-size: 0.8em;
}
</style>