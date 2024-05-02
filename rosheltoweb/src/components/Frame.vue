<script setup>
import TopBar from './TopBar.vue';
import Ocean from './Ocean.vue';
</script>

<template>
    <div class="wrapper">
  
      <header>
          <TopBar title="Robert Shelton"/>
      </header>
      <main>
        <div class="oceanContainer">
          <Ocean/>
        </div>
        <div class="contentContainer">
          <div class="contentPanel">
            <slot>
              There's no content here. 
            </slot>
          </div> 
        </div>
        
      </main>
    <footer>
    </footer>
  </div>
</template>

<style scoped>
header{
    min-height:10vh;
}
main{
    background:linear-gradient(to bottom, #001f3f , black);
    color:white;
}
.oceanContainer{
  height:120px;
}
.contentContainer{
  padding:48px;
  height:80%;
}
.contentPanel{
  padding:24px;
  border-radius:5px;
  /*background-color:#ddeefd;*/
  color:white;
  opacity:90%;
  height:auto;
}
footer{
    height:25vh;
    background-color:black;
    color:white;
}

</style>