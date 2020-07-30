<template>
  <div class="nav-box">
    <div class="inner-nav">
      <div class="nav-tabs">
        <Menu
          ref="menu"
          :theme="theme"
          :open-names="openNames"
          accordion
          @on-select="menuClick"
          :active-name="menuName"
        >
          <RenderMenu v-for="item in menus" :menuList="item" :key="item.id" />
        </Menu>
      </div>
    </div>
  </div>
</template>
<script>
import Urls from "../../service/Urls";
import menuConf from "@/constants/menuConf";
import RenderMenu from "./RenderMenu";

export default {
  props: ["module"],
  components: {
    RenderMenu: RenderMenu
  },
  data() {
    return {
      menuConf: JSON.parse(JSON.stringify(menuConf)), // 拷贝
      menus: [],
      theme: "light",
      activeMenu: "",
      openNames: [],
      menuName: "",
      openNamesObj: {},
      permission: []
    };
  },
  created() {
    // if (!sessionStorage.getItem('menus')) {
    this.menuData();
    // }
    // else {
    //     let tmp = this.$route.path.split('/')[1];
    //     console.log(tmp);
    //     if (tmp == 'case') {
    //         this.menus.push(JSON.parse(sessionStorage.getItem('menus'))[0]);
    //     }

    //     if (tmp == 'projects') {
    //         this.menus.push(JSON.parse(sessionStorage.getItem('menus'))[1]);
    //     }
    //     if (this.menus && this.menus.length) {
    //         this.getOpenNames(this.menus);
    //         this.menuClick(this.$route.name)
    //         this.menuName = this.$route.name;
    //         this.openNames = this.openNamesObj[this.menuName] || [];
    //         var opentmp = this.$route.path.split('/')
    //         this.openNames.push(opentmp[1]); //默认展开1级菜单
    //         this.$nextTick(() => {
    //             this.$refs.menu.updateOpened();
    //             this.$refs.menu.updateActiveName();
    //         });
    //     }
    // }
  },
  watch: {
    $route: function(to) {
      if (this.menus && this.menus.length) {
        this.menuName = to.name;
        this.openNames = this.openNamesObj[this.menuName] || [];
        // this.openNames.push(this.module);//默认展开1级菜单
        this.$nextTick(() => {
          this.$refs.menu.updateOpened();
          this.$refs.menu.updateActiveName();
        });
      }
    }
  },
  methods: {
    menuData() {
      this.menus = this.menuConf[0].children;
      if (this.menus && this.menus.length) {
        this.getOpenNames(this.menus);
        this.menuClick(this.$route.name);
        this.menuName = this.$route.name;
        this.openNames = this.openNamesObj[this.menuName] || [];
        var opentmp = this.$route.path.split("/");
        this.openNames.push(opentmp[1]); //默认展开1级菜单
        this.$nextTick(() => {
          this.$refs.menu.updateOpened();
          this.$refs.menu.updateActiveName();
        });
      }
    },
    menuClick(item) {
      if (item == "case") {
        this.$router.push({
          name: "p_consultations"
        });
        this.activeMenu = "p_consultations";
      } else {
        this.$router.push({
          name: item
        });
        this.activeMenu = item;
      }
    },
    getOpenNames(menu_conf, parent) {
      let that = this;
      parent = parent || "";
      /**
       * 递归生成最里层菜单对应的父级菜单的name。(选中菜单后，刷新页面自动展开改菜单之上的所有父级菜单)
       * {
       *    menuItem:[subMenuName]
       * }
       **/
      menu_conf.map(item => {
        sub(item.name);
        if (item.children) {
          that.getOpenNames(item.children, item.name);
        }
      });

      function sub(name) {
        if (!that.openNamesObj[name]) {
          if (parent) {
            that.openNamesObj[name] = that.openNamesObj[parent].slice();
          } else {
            that.openNamesObj[name] = [];
          }
        }
        that.openNamesObj[name].push(name);
      }
    }
  }
};
</script>

<style lang="scss">
.nav-box {
  position: relative;
  height: 100%;
  // border-right: 1px solid #eee;
}

.inner-nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
