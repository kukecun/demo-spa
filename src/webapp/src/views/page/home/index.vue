
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
        <MenuAside :menuList="menuAside.children" :openedsType="openedsType"></MenuAside>
      </aside>

      <!--右侧group区-->
      <section class="g-content">
        <UploadFile :multi="true" :fileUrl="fileUrl" :fileAccept="fileAccept"></UploadFile>

        <a href="javascript:" @click="goPage">跳转路由</a>
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

import testAPI from '@/services/test';

export default {

  data () {
    return {
      fileUrl: "/api/upload/file",
      fileAccept: "image/png,image/jpeg,image/gif,image/jpg",
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

      let list = this.menuList, R;

      for(let i=0; i<list.length; i++) {
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

  },

  mounted () {
    
  }
};
</script>
