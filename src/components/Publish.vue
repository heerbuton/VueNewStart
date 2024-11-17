<template>
  <div class="job-posting-form">

    <form @submit.prevent="handleSubmit">
      <!-- 标题输入 -->
      <div class="form-group">
        <label for="title">标题<span class="required">*</span></label>
        <input type="text" id="title" v-model="formData.title" required />
      </div>
      <hr>
      <div class="type">
          <label for="salary-min">薪资范围</label>
          <input type="number" id="salary-min" placeholder="最低薪资" v-model.number="formData.salary.min" />
          ——
          <input type="number" id="salary-max" placeholder="最高薪资" v-model.number="formData.salary.max" />
      <!-- 兼职类型（可选） -->
          <label for="part-time-type">兼职类型（可选）</label>
          <select id="part-time-type" v-model="formData.partTimeType">
           <option value="full-time">全职</option>
           <option value="part-time">兼职</option>
            <!-- 可以根据需要添加更多选项 -->
        </select>
      </div>
      <!-- 薪资范围 -->
      <hr>
      <!-- 描述信息 -->
      <div class="form-group description">
        <label for="description">描述信息</label>
        <textarea id="description" rows="10" v-model="formData.description" placeholder="请描述兼职相关信息，建议格式：具体兼职内容+兼职时间+兼职地点+应聘要求”"></textarea>
      </div>

      <!-- 按钮 -->
      <div class="button-group">
        <button type="submit">发布</button>
        <button type="button" @click="handleCancel">返回</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PublishComponent',
  data() {
    return {
      formData: {
        title: '',
        salary: {
          min: null,
          max: null
        },
        partTimeType: '',
        description: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      // 处理提交逻辑
      console.log('Submitted:', this.formData);
      // 这里可以添加向后端API提交数据的逻辑
    },
    handleCancel() {
      // 处理取消/返回逻辑
      console.log('Cancelled');
      // 这里可以根据实际情况处理页面跳转或关闭弹窗等操作
    }
  }
};
</script>

<style scoped>
.job-posting-form {
  display:flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

input[type="text"] {
  width: 150px; /* 设置宽度为200像素 */
  height:20px;
}


.form-group label {
  display: block;
  margin-bottom: 5px;
}

.type{
  display:flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}

.form-group input[type="number"],
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.required {
  color: red;
}

.salary-range input {
  width: calc(50% - 20px); /* 计算宽度以适应两个输入框加上中间的横杠 */
  display: inline-block; /* 使其在一行显示 */
  margin-right: 10px; /* 输入框之间的间距 */
}

.button-group{
  display:flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}

.button-group button {
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
}

.button-group button:last-child {
  background-color: gray;
}

hr {
  margin: 20px 0; /* 在水平线上下添加空间 */
  border: none; /* 如果你不需要边框的话 */
  height: 0; /* 如果你不需要可见的水平线的话 */
}

</style>
