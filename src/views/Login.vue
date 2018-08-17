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
            // 这里应该对密码加密
            return {name : this.username, password : this.password};
        }

        private login(): void {
            let _this  = this
            const params = this.getParams();
            this.isBtnLoading = true;
            if(!params.name && !params.password){
                _this.$message({
                    message:  '账号或密码不能为空',
                    type: 'error',
                    duration: 0,// 不自动关闭
                    showClose : true, // 显示关闭按钮
                })
                return
            }
            loginApi.request.r({
                name : params.name,
                password: params.password,
            }).then((obj)=>{
                _this.$message({
                    message:  '登录成功',
                    type: 'success',
                    duration: 0,// 不自动关闭
                    showClose : true, // 显示关闭按钮
                })
                _this.isBtnLoading = false;
                // 不应该使用cookie 保存token 可以使用sessionStorage和localStorge

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
