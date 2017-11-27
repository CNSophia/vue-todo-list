<template>
  <Row type="flex" justify="center" align="middle">
    <Input v-model="value" placeholder="Enter something..." style="width: 300px"></Input>
  </Row>
</template>

<script>
  export default {
    name: 'Welcome',
    data () {
      return {
        value: ''
      }
    }
  }
</script>
