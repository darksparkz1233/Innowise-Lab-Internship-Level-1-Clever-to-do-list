<template>
  <div class="main-wrapper" id="root">
      <div class="title">
          <p>{{ title }}</p>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Clever ToDo-List'
        }
    }
}
</script>

<style scoped>
.title {
    font-family: 'BenchNine', sans-serif;
    font-size: 2rem;
    font-weight: bold;

    color: rgb(0, 0, 0);
}
    .subtitle {
        color: rgb(41, 41, 41);
        font-size: 20px;
    }
</style>
