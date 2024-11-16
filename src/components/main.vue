<template>
  <div class="container">
    <!-- 顶部导航栏 -->
    <nav class="navbar">
      <div class="logo">KFBB</div>
      <div class="nav-links">
        <a href="#" class="active"><i class="fas fa-home"></i> 首页</a>
        <a href="#"><i class="fas fa-edit"></i> 发布兼职</a>
        <a href="#"><i class="fas fa-comment"></i> 评价中心</a>
        <a href="#"><i class="fas fa-comments"></i> 聊天中心</a>
        <a href="#"><i class="fas fa-user"></i> 个人中心</a>
      </div>
      <div class="avatar">头像</div>
    </nav>

    <!-- 搜索和筛选区域 -->
    <div class="search-container">
      <select class="dropdown">
        <option>兼职类型</option>
      </select>
      <select class="dropdown">
        <option>兼职薪资</option>
      </select>
      <select class="dropdown">
        <option>兼职时间</option>
      </select>
      <input type="text" class="search-input" placeholder="搜索内容" />
      <button class="search-btn">搜索</button>
      <button class="reset-btn">重置</button>
    </div>

    <!-- 内容区域 -->
    <div class="content">
      <div class="empty-message">AI图件1</div>
      <button class="details-btn">详情</button>
    </div>

    <!-- 分页区域 -->
    <div class="pagination">
      <button>&lt;</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button class="active">4</button>
      <button>5</button>
      <button>...</button>
      <button>100</button>
      <button>&gt;</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
};
</script>

<style scoped>
.container {
  background-color: #fff5a3;
  min-height: 100vh;
  text-align: center;
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
  color: #888;
}

.empty-message {
  display: inline-block;
  margin: 20px 0;
}

.details-btn {
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #f0f0f0;
  border: none;
  cursor: pointer;
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
