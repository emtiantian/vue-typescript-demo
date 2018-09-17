<template>
    <Map map-auto-change="autoChange" map-ame="name" map-type="type" map-style="style" map-zoom="zoom" ></Map>
</template>

<script lang="ts">
  import { Component,Prop,Vue } from 'vue-property-decorator';
  @Component
  export default class map extends Vue{
    @Prop private zoom!: number;
    @Prop private name!: string;
    @Prop private conter!: object;
    @Prop({default:["google","baidu"]}) private type :string[];



  }
</script>

<style scoped>

</style>
