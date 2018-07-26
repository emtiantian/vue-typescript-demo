## 本文件夹功能
1. 国际化定义页面文字显示内容
### 使用方式
1. 引入vue-i18n `yarn vue-i18n`
2. 在main.js中加入使用使用插件的方式引入项目    
      `import vuei18n from 'vue-i18n';//引入组件`   
      `Vue.use(vuei18n) //插件形式挂载国际化组件`
3. 在页面中使用定义好的名称组件会根据本地表示挑选显示文字
      `locale: 'zh-CN',    // 语言标识`
      `//this.$i18n.locale // 通过切换locale的值来实现语言切换这个样设置会根据浏览器文字设置选择语言`
4. 在`component/common/i18n.ts` 实现自动切换和手动切换功能