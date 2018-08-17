<template>
    <Error>{{$t('m.'+errormassage)}}</Error>
</template>

<script lang="ts">

  import {Component, Prop, Vue} from 'vue-property-decorator';
  // import Router from 'vue-router'

  @Component
  export default class error extends Vue{
    @Prop() errormassage!: string ;
    @Prop() time?: number = 5000;
    // 这里应该有接口定义
    @Prop() reRouter?: any = this.$router;


  }

</script>

<style scoped>

</style>
