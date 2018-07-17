
<style lang="sass">
  @import '~@/styles/page/home/index.scss';
  @import '~@/styles/components/menu/index.scss';
</style>
<template>
  <div class="g-box">

    <!--头部-->
    <div class="g-header">

      <!--logo-->
      <div class="g-logo"></div>

      <!--导航-->
      <nav class="g-nav menu-top">
        <MenuTop :menuList="menuList"></MenuTop>
      </nav>

      <!--个人信息-->
      
    </div>
    
    <!--主内容区-->
    <div class="g-container">
      
      <!--左侧菜单-->
      <aside class="g-aside">
        <MenuAside v-if="menuAside" :menuList="menuAside.children" :openedsType="openedsType"></MenuAside>
      </aside>

      <!--右侧group区-->
      <section class="g-content">
        <UploadFile 
        :multi="true"
        :fileUrl="fileUrl"
        :fileAccept="fileAccept"
        :fileMaxLen="fileMaxLen"
        @registerUploadFile="registerUploadFile"
        ref="refUploadFile" ></UploadFile>

        <a href="javascript:" @click="goPage">跳转路由test</a>
        <router-view></router-view>
      </section>
    </div>
  </div>
</template>

<script>

// 菜单
import MenuTop from '@/views/components/menu/top.vue';
import MenuAside from '@/views/components/menu/aside.vue';

import UploadFile from '@/views/components/upload/file.vue';

import { mapActions, mapState } from 'vuex';

export default {

  data () {
    return {
      fileUrl: "http://10.200.179.153/file/upload",
      fileAccept: "image/png,image/jpeg,image/gif,image/jpg",
      fileMaxLen: 5,
    };
  },

  components:{
    MenuTop,
    MenuAside,
    UploadFile,
  },

  computed: {
    
    menuList(){
      return this.$store.getters['menu/menuList'];
    },

    menuAside(){

      let list = this.menuList, R,
          len = list.length;

      if(len <= 0) return false;

      for(let i=0; i<len; i++) {
        if(list[i].name == this.menuTypeName) {
          R = list[i];
          break;
        }
      }

      return R;
    },

    openedsType(){
      return this.$store.getters['menu/menuTypeInfo'].openedsType;
    },

    menuTypeName(){
      return this.$store.getters['menu/menuTypeInfo'].name;
    },
  },

  methods: {

    goPage(){
      this.$router.push({name: 'dataStore'})
    },

    registerUploadFile(data){
      console.log("registerUpload>>>>>>>>>>>>>>>>>")
      console.log(data);
    },
  },

  mounted () {}
};
</script>
