<template>
  <div class="container">
    <!-- 顶部导航栏 -->
    <nav class="navbar">
      <div class="logo">
         <img src="@/assets/LOGO.png" class="logop" />
      </div>
      <div class="nav-links">
        <a href="#" @click.prevent="activeIndex = 0" :class="{ active: activeIndex === 0 } "><i class="fas fa-home"></i> 首页</a>
        <a href="#" @click="changeComponent('PublishComponent')" @click.prevent="activeIndex = 1" :class="{ active: activeIndex === 1 }"><i class="fas fa-edit"></i> 发布兼职</a>
        <a href="#" @click="changeComponent('AppraiseComponent')" @click.prevent="activeIndex = 2" :class="{ active: activeIndex === 2 }"><i class="fas fa-comment"></i> 评价中心</a>
        <a href="#" @click="changeComponent('ChatComponent')" @click.prevent="activeIndex = 3" :class="{ active: activeIndex === 3 }"><i class="fas fa-comments"></i> 聊天中心</a>
        <a href="#" @click="changeComponent('IndividualComponent')" @click.prevent="activeIndex = 4" :class="{ active: activeIndex === 4 }"><i class="fas fa-user"></i> 个人中心</a>
      </div>
      <div class="avatar">
          <img src="头像图片路径" alt="头像" v-if="isLogin" />
      </div>
    </nav>

    <!-- 搜索和筛选区域 -->
    <div class="search-container">
      <select class="dropdown">
        <option>兼职类型1</option>
        <option>兼职类型2</option>
        <option>兼职类型3</option>
        <option>兼职类型4</option>
      </select>
      <select class="dropdown">
        <option>兼职薪资1</option>
        <option>兼职薪资2</option>
        <option>兼职薪资3</option>
        <option>兼职薪资4</option>
      </select>
      <select class="dropdown">
        <option>兼职时间1</option>
        <option>兼职时间2</option>
        <option>兼职时间3</option>
        <option>兼职时间4</option>
      </select>
      <input type="text" class="search-input" placeholder="搜索内容" />
      <button class="search-btn">搜索</button>
      <button class="reset-btn">重置</button>
    </div>

    <div class="show">
        <!-- 使用动态组件切换内容 -->
       <component :is="currentComponent" ></component>
    </div>

    <!-- 分页区域 -->
    <div class="pagination">
      <button @click="prevPage">&lt;</button>
      <button v-for="n in totalPage" :key="n" @click="changePage(n)" :class="{ 'active': currentPage === n }">{{ n }}</button>
      <button @click="nextPage">&gt;</button>
    </div>
  </div>
</template>

<script>
import PublishComponent from './Publish.vue';
import AppraiseComponent from './Appraise.vue';
import ChatComponent from './ChatComponent.vue';
import IndividualComponent from './Individual.vue';
export default {
  name: "FunctionPage",
  components: {
      PublishComponent,
      AppraiseComponent,
      ChatComponent,
      IndividualComponent
  },
  data() {
    return {
      activeIndex: 1, // 当前激活的导航索引
      isLogin: false, // 是否登录
      currentPage: 1, // 当前分页
      totalPage: 5, // 总共多少页
      currentComponent: 'PublishComponent',
    };
  },
  methods: {
    changeComponent(componentName) {
          this.currentComponent = componentName;
     },
    changePage(page) {
      this.currentPage = page;
      // 更新数据或调用接口获取当前页的数据
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.changePage(this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPage) {
        this.changePage(this.currentPage + 1);
      }
    }
  }
};
</script>

<style scoped>
.container {
  background-color: #fff5a3;
  min-height: 100vh;
  text-align: center;
  justify-content: space-between;
  padding: 20px;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff5a3;
  padding: 10px;
}

.logo {
  font-weight: bold;
  font-size: 1.5em;
}

.show {
  width: 70vw;
  height: 60vh;
  margin-left: 30vh;
}

.nav-links a {
  margin: 0 10px;
  color: #333;
  text-decoration: none;
  padding: 5px 10px;
}

.nav-links a.active {
  background-color: #a6f3ff;
  border-radius: 5px;
}

.avatar {
  border-radius: 50%;
  background-color: #ccc;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  float: right;
}

.logop {
  width: 200px;
  height: auto;
}

.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
  
.dropdown, .search-input, .search-btn, .reset-btn {
  margin: 0 5px;
  padding: 10px;
  font-size: 1em;
}
  
.search-input {
  width: 200px;
}
  
.search-btn, .reset-btn {
  background-color: #ccc;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
  
.content {
  margin-top: 40px;
  font-size: 1.2em;
  width: 90vw;
  height: 60vh;
}
  
.empty-message {
  display: inline-block;
  margin: 20px 0;
}
  
.pagination {
  margin-top: 30px;
}
  
.pagination button {
  background-color: #f0f0f0;
  border: none;
  padding: 5px 10px;
  margin: 0 2px;
  cursor: pointer;
}
  
.pagination button.active {
  background-color: #a6f3ff;
  border-radius: 5px;
}
</style>
