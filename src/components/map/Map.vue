<template>
    <Map mapAutoChange="autoChange" mapName="name" mapType="type" mapStyle="style" mapZoom="zoom" ></Map>
</template>

<script lang="ts">
  import { Component,Prop,Vue } from 'vue-property-decorator';
  @Component
  export default class map extends Vue{
    @Prop private zoom!: number;
    @Prop private name!: string;
    @Prop private conter!: object;
    @Prop({default:["google","baidu"]}) private type :Maplib.mapType[];
    @Prop({default:"100%"}) private width: string;
    @Prop({default:"100%"}) private height: string;
    @Prop({default:true}) private autoChange: boolean;
    @Prop({default:""}) private style: string;
    @Prop({default:""}) private marks:Maplib.marks;
    @Prop({default:true}) private  draggable: boolean;
    @Prop({default:true}) private  autoMarksContent: boolean;
    @Prop({default:false}) private hideLogo: boolean;




  }
</script>

<style scoped>

</style>
