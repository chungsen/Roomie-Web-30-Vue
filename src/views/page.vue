<template>
  <div class="page-container">
    <a href="https://example.com" target="_blank" rel="noreferrer noopener">
      Link
    </a>
    <div class="page-container1"></div>
  </div>
</template>

<script>
export default {
  name: 'Page',
  metaInfo: {
    title: 'Page - Roomie Web 3.0',
    meta: [
      {
        property: 'og:title',
        content: 'Page - Roomie Web 3.0',
      },
    ],
  },
}
</script>

<style scoped>
.page-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.page-container1 {
  flex: 0 0 auto;
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 100px;
  display: flex;
  align-items: flex-start;
}
</style>
