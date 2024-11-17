<template>
  <div class="settings-page">
    <!-- 左侧菜单 -->
    <div class="sidebar">
      <ul>
        <li>
          <div class="menu-item" @click="toggleMenu('setting1')">
            <i class="icon">🏠</i> 设置1
            <span class="arrow" :class="{ open: isMenuOpen.setting1 }">▼</span>
          </div>
          <ul v-if="isMenuOpen.setting1" class="submenu">
            <li
              v-for="item in settings.setting1"
              :key="item.id"
              @click="selectSetting(item)"
              :class="{ active: selectedSetting.id === item.id }"
            >
              {{ item.name }}
            </li>
          </ul>
        </li>
        <li>
          <div class="menu-item" @click="toggleMenu('setting2')">
            <i class="icon">✉️</i> 设置2
            <span class="arrow" :class="{ open: isMenuOpen.setting2 }">▼</span>
          </div>
        </li>
        <li>
          <div class="menu-item" @click="toggleMenu('setting3')">
            <i class="icon">👤</i> 设置3
            <span class="arrow" :class="{ open: isMenuOpen.setting3 }">▼</span>
          </div>
        </li>
      </ul>
    </div>

    <!-- 右侧展示区域 -->
    <div class="content">
      <h2>{{ selectedSetting.name }}</h2>
      <p>{{ selectedSetting.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndividualComponent",
  data() {
    return {
      // 菜单是否展开
      isMenuOpen: {
        setting1: true,
        setting2: false,
        setting3: false,
      },
      // 左侧设置选项
      settings: {
        setting1: [
          { id: 1, name: "具体设置1", description: "这里是具体设置1的内容。" },
          { id: 2, name: "具体设置2", description: "这里是具体设置2的内容。" },
          { id: 3, name: "具体设置3", description: "这里是具体设置3的内容。" },
        ],
        setting2: [],
        setting3: [],
      },
      // 当前选中的设置
      selectedSetting: { id: 1, name: "具体设置1", description: "这里是具体设置1的内容。" },
    };
  },
  methods: {
    // 切换菜单的展开状态
    toggleMenu(menu) {
      this.isMenuOpen[menu] = !this.isMenuOpen[menu];
    },
    // 选择设置选项
    selectSetting(setting) {
      this.selectedSetting = setting;
    },
  },
};
</script>

<style scoped>
.settings-page {
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}

/* 左侧菜单样式 */
.sidebar {
  width: 20%;
  background-color: #ffffff;
  border-right: 1px solid #ddd;
  padding: 10px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s;
}

.menu-item:hover {
  background-color: #f0f0f0;
}

.icon {
  margin-right: 10px;
}

.arrow {
  transition: transform 0.3s;
}

.arrow.open {
  transform: rotate(180deg);
}

.submenu {
  padding-left: 20px;
}

.submenu li {
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submenu li:hover {
  background-color: #f0f0f0;
}

.submenu li.active {
  background-color: #007bff;
  color: white;
  font-weight: bold;
}

/* 右侧展示区域样式 */
.content {
  flex-grow: 1;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  margin: 10px;
}

.content h2 {
  margin: 0 0 10px;
  font-size: 24px;
}

.content p {
  color: #666;
  line-height: 1.5;
}
</style>
