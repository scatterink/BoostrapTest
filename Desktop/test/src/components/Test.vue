  
<template>
  <div>
    <div v-for="section in sections"
         v-bind:key="section.title">
      <h2 v-text="section.title" />
      <div>
        <p v-text="section.content" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Test',
  data: () => ({
    sections: [
      {
        title: 'Section one',
        content: 'Content for section 1'
      }, {
        title: 'Section two',
        content: 'Content for section 2'
      }, {
        title: 'Section three',
        content: 'Content for section 3'
      }, {
        title: 'Section four',
        content: 'Content for section 4'
      }
    ]
  })
};
</script>
<style scoped>
</style>


