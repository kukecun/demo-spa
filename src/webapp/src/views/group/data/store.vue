<template>
  <div class="page-data-store">
    page-data-store
    <a href="javascript:" @click="goPage">回到首页</a>
  </div>
</template>
<script>

export default {
  data () {
    return {
      ruleForm: {
        
      },
      rules: {
        
      }
    };
  },
  components:{

  },
  computed: {

  },
  methods: {
    goPage(){
      this.$router.push({name: 'home'})
    },
  },
  mounted () {

  }
};
</script>
