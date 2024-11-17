<template>
  <div class="chat-app">
    <!-- 左侧联系人列表 -->
    <div class="contact-list">
      <ul>
        <li
          v-for="user in users"
          :key="user.id"
          @click="selectUser(user)"
          :class="{ active: selectedUser && selectedUser.id === user.id }"
        >
          <img :src="user.avatar" alt="头像" class="avatar" />
          <span>{{ user.name }}</span>
        </li>
      </ul>
    </div>

    <!-- 中间聊天窗口 -->
    <div class="chat-window">
      <div class="messages">
        <div
          v-for="(message, index) in messages"
          :key="index"
          class="message"
          :class="{ 'from-user': message.from === 'user', 'from-other': message.from === 'other' }"
        >
          <div class="bubble">{{ message.text }}</div>
        </div>
      </div>
      <div class="input-area">
        <input
          v-model="newMessage"
          placeholder="请输入"
          @keyup.enter="sendMessage"
        />
        <button @click="sendMessage">发送</button>
      </div>
    </div>

    <!-- 右侧用户信息展示 -->
    <div class="user-info" v-if="selectedUser">
      <img :src="selectedUser.avatar" alt="头像" class="user-avatar" />
      <h3>{{ selectedUser.name }}</h3>
      <p>{{ selectedUser.info }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatComponent",
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Alice",
          avatar: "https://via.placeholder.com/40",
          info: "Alice 的个人信息",
        },
        {
          id: 2,
          name: "Bob",
          avatar: "https://via.placeholder.com/40",
          info: "Bob 的个人信息",
        },
        {
          id: 3,
          name: "Charlie",
          avatar: "https://via.placeholder.com/40",
          info: "Charlie 的个人信息",
        },
        {
          id: 4,
          name: "Diana",
          avatar: "https://via.placeholder.com/40",
          info: "Diana 的个人信息",
        },
        {
          id: 5,
          name: "Eve",
          avatar: "https://via.placeholder.com/40",
          info: "Eve 的个人信息",
        },
        {
          id: 6,
          name: "Frank",
          avatar: "https://via.placeholder.com/40",
          info: "Frank 的个人信息",
        },
        {
          id: 7,
          name: "Grace",
          avatar: "https://via.placeholder.com/40",
          info: "Grace 的个人信息",
        },
      ],
      selectedUser: null, // 当前选中的用户
      messages: [], // 聊天记录
      newMessage: "", // 新消息
    };
  },
  methods: {
    // 选择用户
    selectUser(user) {
      this.selectedUser = user;
      this.messages = []; // 切换用户时清空消息记录
    },
    // 发送消息
    sendMessage() {
      if (!this.newMessage.trim()) return;
      this.messages.push({ from: "user", text: this.newMessage });
      this.newMessage = "";
      // 模拟对方回复
      setTimeout(() => {
        this.messages.push({ from: "other", text: "收到您的消息！" });
      }, 1000);
    },
  },
};
</script>

<style scoped>
.chat-app {
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}

/* 联系人列表 */
.contact-list {
  width: 20%;
  background-color: #ffffff;
  border-right: 1px solid #ddd;
  overflow-y: auto;
  padding: 10px;
}

.contact-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-list li {
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.2s;
}

.contact-list li.active,
.contact-list li:hover {
  background-color: #f0f0f0;
}

.contact-list .avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

/* 聊天窗口 */
.chat-window {
  width: 60%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 10px;
}

.messages {
  flex-grow: 1;
  overflow-y: auto;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.message {
  display: flex;
  margin-bottom: 10px;
}

.message.from-user {
  justify-content: flex-end;
}

.message .bubble {
  max-width: 60%;
  padding: 10px;
  border-radius: 10px;
  background-color: #e0f7da;
  color: #333;
}

.message.from-user .bubble {
  background-color: #dcedc8;
}

.input-area {
  display: flex;
  border-top: 1px solid #ddd;
}

.input-area input {
  flex-grow: 1;
  padding: 10px;
  border: none;
  outline: none;
}

.input-area button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

.input-area button:hover {
  background-color: #0056b3;
}

/* 用户信息展示 */
.user-info {
  width: 20%;
  background-color: #ffffff;
  padding: 10px;
  text-align: center;
  border-left: 1px solid #ddd;
}

.user-info .user-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.user-info h3 {
  margin: 10px 0 5px;
}

.user-info p {
  color: #666;
}
</style>
