<script setup>
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
          <ul>
            <li class="mainNavItem">
              <a >About Me</a> 
            </li>
            <li class="mainNavItem">
              <a href="Resume">Resume</a>
            </li>
          </ul>
        </nav>
    </div>
  </div>
</template>

<style scoped>

.titleContainer{
  height:20%;
}
.mainNav{
border-top:2px solid grey;
border-bottom:2px solid grey;
width:100%;
height:40%;
}

.mainNavItem{
    display:inline-block;
    padding:12px;
  }
</style>
