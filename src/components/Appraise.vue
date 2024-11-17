<template>
  <div class="event-list">
    <h2>评价中心</h2>
    <ul>
      <li
        v-for="event in events"
        :key="event.id"
        @click="showEventDetails(event)"
        class="event-item"
      >
        {{ event.name }}
      </li>
    </ul>
    <div v-if="selectedEvent" class="event-details">
      <h3>事件详情</h3>
      <p><strong>名称：</strong>{{ selectedEvent.name }}</p>
      <p><strong>描述：</strong>{{ selectedEvent.description }}</p>
      <p><strong>时间：</strong>{{ selectedEvent.time }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppraiseComponent",
  data() {
    return {
      // 默认的事件列表
      events: [
        {
          id: 1,
          name: "事件 1",
          description: "这是事件 1 的详细描述。",
          time: "2024-11-17 10:00",
        },
        {
          id: 2,
          name: "事件 2",
          description: "这是事件 2 的详细描述。",
          time: "2024-11-17 11:00",
        },
        {
          id: 3,
          name: "事件 3",
          description: "这是事件 3 的详细描述。",
          time: "2024-11-17 12:00",
        },
        {
          id: 4,
          name: "事件 4",
          description: "这是事件 4 的详细描述。",
          time: "2024-11-17 13:00",
        },
        {
          id: 5,
          name: "事件 5",
          description: "这是事件 5 的详细描述。",
          time: "2024-11-17 14:00",
        },
        {
          id: 6,
          name: "事件 6",
          description: "这是事件 6 的详细描述。",
          time: "2024-11-17 15:00",
        },
      ],
      selectedEvent: null, // 当前选中的事件
    };
  },
  methods: {
    // 显示选中事件的详情
    showEventDetails(event) {
      this.selectedEvent = event;
    },
  },
};
</script>

<style scoped>
.event-list {
  padding: 20px;
  font-family: Arial, sans-serif;
}

ul {
  list-style: none;
  padding: 0;
}

.event-item {
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.event-item:hover {
  background-color: #f0f0f0;
}

.event-details {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  background: #f9f9f9;
}
</style>
