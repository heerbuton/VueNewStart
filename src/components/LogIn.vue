<template>
  <div class="login-page">
    <div class="header">
      <img src="@/assets/LOGO.png" alt="logo" class="logo" />
      <h1>兼职桥</h1>
    </div>
	<div class="login-main">
	<div class="slogan">
      <p id="line1">梦想交汇，机遇无限</p>
      <p id="line2">舞台广阔，自我绽放</p>
      <p id="line3">成长同行，财富共享</p>
      <p id="line4">邂逅英才，共创辉煌</p>
      <p id="line5">加入我们，启航非凡</p>
    </div>
    <div class="login-form">
      <div class="form-group">
        <label for="username">账号</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div class="form-group">
        <label for="password">密码</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div class="forgot-password">
        <a href="/forget">忘记密码</a>
      </div>
      <div class="buttons">
        <button @click="login">LogIn</button>
        <button @click="goToHome">NEW</button>
      </div>
    </div>
	</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$router.push('/main');
    },
    goToHome() {
        this.$router.push('/new');
    }
  }
};

window.onload = function() {
  const pElements = document.querySelectorAll('.slogan p');

  pElements.forEach((p, index) => {
    // 延迟每个段落的动画开始
    p.style.animationDelay = `${index * 2}s`; // 延迟时间递增
    p.style.opacity = 0; // 使段落开始时可见，并触发动画
  });
};

</script>

<style scoped>
.login-page {
  background-color: #ffeb70;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  font-family: '宋体', sans-serif;
}

.login-main{
	width: 100vh;
	display: flex;
	justify-content: space-between; /* 将两个子 div 水平分布在两半 */
	align-items: center; /* 垂直居中，如果你希望它们在页面中心 */
	align-items: center;
	flex-direction: row;
}

.header {
  display: flex;
  align-items: center;
}

.logo {
  width: 200px;
  height: auto;
  margin-right: 10px;
}


h1 {
  font-size: 36px;
  color: #000;
}

.slogan {
  text-align: center;
  font-size: 18px;
  color: #000;
  margin: 20px 0;
  width: 50%; /* 占父容器宽度的一半 */
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  flex-direction: column;
  font-family: 'Arial', sans-serif; /* 设置字体 */
  
}

.slogan p {
  margin: 10px;
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  opacity: 0;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 1.5s steps(30, end) forwards;
}

@keyframes typing {
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 70%;
    opacity: 1;
  }
}

.slogan p.visible {
  opacity: 1;
  border-right: none;
  animation: none; /* 停止闪烁动画 */
}

.login-form {
  width: 50%; /* 占父容器宽度的一半 */
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  background-color: #ffeb70;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
  color: #000;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.forgot-password {
  text-align: right;
  margin-bottom: 15px;
}

.forgot-password a {
  color: #000;
  font-size: 14px;
}

.buttons {
  display: flex;
  justify-content: space-between;
}

button {
  width: 45%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #a0d6b4;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #8bc49a;
}
</style>
