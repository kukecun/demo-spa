<template>
  <el-menu class="menu-aside" 
    :default-openeds="openedsType" 
    :unique-opened="true" 
    :default-active="activeType">

    <AsideList :menuList="menuList"></AsideList>
  </el-menu>
</template>
<script>

import AsideList from './components/asideList.vue';

export default {
  name: 'treeMenu',
  data () {
    return {
      activeType: "svgCollectionAdd",
    };
  },
  props: ['menuList', 'openedsType'],

  components:{
    AsideList,
  },
  computed: {

  },
  methods: {
  },
  mounted () {
    
  }
};
</script>
