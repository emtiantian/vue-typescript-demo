<template>
    <div class="login">
        <h1>{{$t('m.'+appname)}}</h1>
        <el-form class="login-form">
        <el-form-item>
            <el-input :autofocus="true"
                      placeholder="请输入账号"
                      v-model="username">
            </el-input>
            <el-input type="password"
                      placeholder="请输入账号"
                      v-model="password">
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-button style="width:100%" @click.native="login" type="primary" :loading="isBtnLoading">{{btnText}}
            </el-button>
        </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import loginApi from '../api/login';
    import instance from '../api/index';
    @Component
    export default class Login extends Vue {
        // !:是表示必须参数 ?:是表示非必须
        // 可以使用拼接字符串的模式使用i18n
        @Prop() private appname?: string = 'appname';
        @Prop() private btnText?: string = '登录';
        private username: string = '';
        private password: string = '';
        private isBtnLoading: boolean = false;

        private getParams(): {name: string, password: string} {
            return {name : this.username, password : this.password};
        }

        private login(): void {
            const params = this.getParams();
            this.isBtnLoading = true;
            // this.$message.error('name:' + params.name + 'password:' + params.password);
            // 测试别人rap2 怎么实现的根据参数返回不同响应的
            instance.defaults.headers.common['Authorization'] = 'Bearer roottoken';
            loginApi.request.r({
                Authorization: 'admintoken1',
            }).then((res: any) => {
                this.$message.error('name:' + res.data.name );
            });
        }
    }
</script>

<style scoped lang="less">
    .login {
        background: skyblue;
        width: 400px;
        margin: auto;
        text-align: center;
    }
</style>