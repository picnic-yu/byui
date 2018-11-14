<template>
 <section class="page">
   <h2>基础组件</h2>
    <h4>按钮</h4>
    <yu-button>普通</yu-button>
    <yu-button type="primary"   >主要</yu-button>
    <yu-button type="error"  >错误</yu-button>
    <yu-button type="warning" disabled> 警告 禁止</yu-button>
    <yu-button plain>简约</yu-button>
    <yu-button type="text" >文字</yu-button>
    <yu-button loading type="success">loading状态</yu-button>
    <yu-button bg-color="#fc0" color="#e0439a" border-color="#fc0">自定义颜色</yu-button>
    <br/><br/>
    <yu-button bg-color="#fcb" color="#e0439a" border-color="#fcb" block no-radius class="btn__block">无圆角块状</yu-button>
    <br/>
    <yu-button round long>100%宽圆角</yu-button>
    <br/><br/>
    
 </section>
</template>

<script type="text/ecmascript-6">
 export default {
 components: {},

 props: {},

 data() {
 return {

 }
 
 },

 watch: {},

 methods: {},

 mounted() {
   console.log(this)
 },

 }
</script>

<style lang='' scoped>
 
</style>
