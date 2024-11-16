<template>
  <div id="all">
  <div id="new">
    <div class="header">
      <img src="@/assets/LOGO.png" alt="logo" class="logo" />
      <h1>兼职桥</h1>
    </div>
    <h1>First, let's create your account</h1>
    <form @submit.prevent="handleSubmit" id="Submit">
      <label for="username">用户名/账号:</label>
      <input type="text" id="username" v-model="username"  required>

      <label for="password">密码:</label>
      <input type="password" id="password" v-model="password" placeholder="6-16位,建议包括大小写字母/数字" required pattern="[A-Za-z0-9]{6,16}" title="6-16位，建议大小写字母、数字">

      <label for="confirmPassword">确认密码:</label>
      <input type="password" id="confirmPassword" v-model="confirmPassword" required>

      <button type="submit" id="registerButton">注册</button>
    </form>
    <p v-if="existingUser">已有账号? <a href="/">登录</a></p>
  </div>
  </div>  
</template>

<script>
export default {
  name: "testNewpage",
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      existingUser: true // This can be dynamically set based on actual user state
    }
  },
  methods: {
    handleSubmit() {
      // Add form validation and submission logic here
      alert('Form submitted!');
    }
  },
}

document.addEventListener('DOMContentLoaded', function() {
	const passwordInput = document.getElementById('password');
	const confirmPasswordInput = document.getElementById('confirmPassword');
	const registerButton = document.getElementById('registerButton');
		
    registerButton.addEventListener('click', function(event) {
        event.preventDefault(); // 防止表单提交
        // validatePasswords();
        if (passwordInput.value === confirmPasswordInput.value) {
            alert("注册成功！");
            // 在这里可以添加进一步的处理逻辑，例如提交表单数据到服务器
        } else {
            alert("密码不匹配，请重新输入。");
        }
    });
});

</script>

<style scoped>
#all {
  width: 100vw;
  height: 100vh;
  background-color: #ffeb70;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#new {
  width: 80vh;
  margin: auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.header {
  display: flex;
  align-items: center;
}

.logo {
  width: 300px;
  height: auto;
  margin-right: 10px;
}

#Submit {
  width: 35vh;
}
label {
  display: block;
  margin-top: 10px;
}
input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
}
button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #0F40F5;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 20px;
}
button:hover {
  background-color: #45a049;
}
</style>
