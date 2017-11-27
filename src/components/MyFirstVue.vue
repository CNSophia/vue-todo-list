<template>
  <div>
    <h1>Welcome my first vue! {{name}}</h1>
    <input v-model="name">
    <div v-for="name in nameList">
      <p>{{name}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'MyFirstVue',
    data () {
      return {
        name: 'Sophia',
        nameList: [
          'Sophia',
          'D.Yang',
          'Tom'
        ]
      }
    }
  }
</script>
