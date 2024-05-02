<script setup>
import {RouterLink} from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
library.add(faEnvelope,faGithub, faLinkedin)
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>
<template>
  <div class="topBarContainer">
    <div class="titleRow">
      <div class="titleContainer">
        <h1>{{title}}</h1>
      </div>
      <div class="socialsContainer">
        <div class="socialIcon"><a href="https://www.linkedin.com/in/robert-shelton-4b5836a6/" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']"/></a></div>
        <div class="socialIcon"><a href="https://github.com/RWShelton" target="_blank"><font-awesome-icon :icon="['fab', 'github']"/></a></div>
        <div class="socialIcon"><a href=""><font-awesome-icon :icon="['fas', 'envelope']"/></a></div>
      </div>
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
.titleRow{
  padding-top:12px;
  padding-left:40px;
  height:20%;
  color:#002e5f;
  display:flex;
  justify-content: space-between;
}
.socialsContainer{
  display:flex;
  align-items:center;
  padding:24px;
}
.socialIcon{
  padding:6px;
  font-size:24px;
}
.socialIcon > a{
  color:#002e5f;
  transition: .5s;
}
.socialIcon > a:hover{
  color:#FF4D4D;
  transition:.5s;
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
