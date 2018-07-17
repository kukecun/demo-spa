<template>
  <el-menu :default-active="activeType" mode="horizontal" @select="handleSelect">
    <el-menu-item v-for="item in menuList" :index="item.name" :key="item.name" v-if="item.hidden == 0">
      <router-link :to="{ path: item.path }">{{item.meta.title}}</router-link>
    </el-menu-item>
  </el-menu>
</template>
<script>

export default {
  data () {
    return {

    };
  },
  props: ['menuList'],
  computed: {
    activeType(){
      return this.$store.getters['menu/menuTypeInfo'].name;
    },
  },
  methods: {
    handleSelect(key, keyPath){
      
    }
  },
  mounted () {
    
  }
};
</script>
