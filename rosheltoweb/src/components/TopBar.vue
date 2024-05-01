<script setup>
import {RouterLink} from 'vue-router'
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>
<template>
  <div class="topBarContainer">
    <div class="titleContainer">
        <h1>{{title}}</h1>
    </div>
    <div class="mainNav">
        <nav>
          <ul class="mainNavList">
              <router-link :to="{name: 'home'}" class="mainNavItem"><li>About Me</li></router-link>
              <router-link :to="{name: 'resume'}" class="mainNavItem"><li>Resume</li></router-link>
          </ul>
        </nav>
    </div>
  </div>
</template>

<style scoped>
.topBarContainer{
  background:linear-gradient(to bottom, #FFD699, #FF8666);
}
.titleContainer{
  padding-top:12px;
  padding-left:40px;
  height:20%;
  color:#002e5f;
}
.mainNavList{
  margin-top:0;
  margin-bottom:0;
  display:inline-block;
}
.mainNav{
  width:100%;
  height:40%;       
}

li{
  display:inline-block;
  padding:12px;
  height:100%;
  transition:1s;
  border-radius:5px;
  color:#002e5f;
  margin:12px;
}

li:hover{
  background-color:#FF4D4D;
  transition:1s;
  color:#002e5f;
}
.router-link-active > *{
  background-color:#002e5f;
  color:white;
}
</style>
