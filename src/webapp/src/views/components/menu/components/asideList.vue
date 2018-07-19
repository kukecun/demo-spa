
<template>
  <div class="menu-aside-list">
    <label v-for="item in menuList" :index="item.name" :key="item.name">

      <el-menu-item :default-active="activeType" :index="item.name">
        <router-link :to="{ path: item.path }">{{item.meta.title}}</router-link>
      </el-menu-item>

      <!--菜单递归，目前不需求-->
      <!-- <el-submenu v-if="item.children.length > 0 && item.level != 2" :index="item.name" :key="item.name">
        <template slot="title">
          <span>{{item.meta.title}}</span>
        </template>

        <tree-menu v-if="!!item.children.length" :menuList="item.children"></tree-menu>
      </el-submenu> -->
    </label>
  </div>
</template>
<script>

export default {
  name: 'treeMenu',
  data () {
    return {

    };
  },
  props: ['menuList'],
  computed: {
    activeType(){
      return this.$store.getters['menu/menuTypeAside'].name;
    },
  },
  methods: {
    
  },
  mounted () {
    
  }
};
</script>
