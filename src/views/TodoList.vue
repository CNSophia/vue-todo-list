<template>
  <Row :gutter="16">
    <Col span="8" offset="8">
      <Input v-model="thing" placeholder="请输入待办事项..." style="width: 300px;" @on-enter="addThing"></Input>
      <Button type="primary" @click="addThing">添加</Button>
      <div v-if="todoList.length === 0">无待办事项</div>
      <div v-else>
        <p v-for="(item,index) in todoList">
          {{item}}
          <Button type="error" size="small" @click="deleteThing(index)">删除</Button>
        </p>
      </div>
    </Col>
  </Row>
</template>
<script>
  export default {
    name: 'TodoList',
    data () {
      return {
        thing: '',
        todoList: []
      }
    },
    methods: {
      addThing () {
        this.todoList.push(this.thing)
        this.thing = ''
      },
      deleteThing (index) {
        this.todoList.splice(index, 1)
      }
    }
  }
</script>
