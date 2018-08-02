<template>
    <div class="login-content">

    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import my18n from '../components/common/Myi18n';

    @Component
    export default class login extends Vue {
        // @Prop() private msg!: string;


    }
</script>

<style scoped lang="less">
    .login-content{
        background: skyblue;
        width:  1rem;
    }
</style>