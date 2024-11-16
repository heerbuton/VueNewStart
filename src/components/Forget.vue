<template>
  <div id="all">
    <div class="login-container">
        <div class="header">
          <img src="@/assets/LOGO.png" alt="logo" class="logo" />
          <h1>兼职桥</h1>
        </div>
        <h1>兼职桥，更懂大学生的兼职网站</h1>
        <form @submit.prevent="resetPassword" id="Submit">
          <div>
            <label for="username">用户名/账号:</label>
            <input type="text" v-model="username" id="username" required>
          </div>
          <div>
            <label for="password">密码:</label>
            <input type="password" v-model="password" id="password" placeholder="6-16位,建议包括大小写字母/数字" required pattern="[A-Za-z0-9]{6,16}" title="6-16位，建议大小写字母、数字">
          </div>
          <div>
            <label for="confirmPassword">请再输一遍密码:</label>
            <input type="password" v-model="confirmPassword" id="confirmPassword" required>
          </div>
          <button type="submit">重置</button>
        </form>
        <div id="myModal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <p>Form submitted successfully!</p>
            </div>
        </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ForgetReset",
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    resetPassword() {
      if (this.password !== this.confirmPassword) {
        alert('两次输入的密码不一致！');
        return;
      }
      alert('密码重置成功！');
      // 这里可以添加实际的密码重置逻辑，例如调用API等
    }
  },
  mounted(){
      document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('Submit');
            const modal = document.getElementById('myModal');
            const span = document.getElementsByClassName('close')[0];
			
            form.addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent the form from submitting the traditional way
                modal.style.display = 'block'; // Show the modal
            });         
            span.onclick = function() {
                modal.style.display = 'none'; // Hide the modal when the user clicks on <span> (x)
                window.location.href = '/'; // Redirect to homepage after closing the modal
            };
             window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = 'none'; // Hide the modal when the user clicks anywhere outside of it
                    window.location.href = '/'; // Redirect to homepage after closing the modal
                }
            };
    });
  }
}
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

.header {
  display: flex;
  align-items: center;
}

.logo {
  width: 300px;
  height: auto;
  margin-right: 10px;
}

.login-container {
  width: 80vh;
  margin: auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#Submit {
  width: 35vh;
}
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
form > div {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input[type="text"], input[type="password"] {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
button {
  width: 100%;
  padding: 10px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}
button:hover {
  background-color: #45a049;
}
</style>
