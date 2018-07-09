
<template>
  <div class="menu-aside-list">
    <label v-for="item in menuList" :index="item.name" :key="item.name">
      <el-menu-item v-if="item.children.length == 0">
        <router-link :to="{ path: item.path }">{{item.meta.title}}</router-link>
      </el-menu-item>

      <el-submenu v-if="item.children.length > 0" :index="item.name" :key="item.name">
        <template slot="title">
          <span style="padding:0;">{{item.meta.title}}</span>
        </template>
        <tree-menu v-if="!!item.children.length" :menuList="item.children"></tree-menu>
      </el-submenu>
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

  },
  methods: {
    
  },
  mounted () {
    
  }
};
</script>
