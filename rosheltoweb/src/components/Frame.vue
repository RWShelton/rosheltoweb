<script setup>
import TopBar from './TopBar.vue';
import Ocean from './Ocean.vue';
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
    <div class="wrapper">
  
      <header>
          <TopBar title="roshelto"/>
      </header>
      <main>
        <Ocean/>
        <slot>
            There's no content here. 
        </slot>
      </main>
    <footer>
    </footer>
  </div>
</template>

<style scoped>
header{
    min-height:10vh;
    background:black;
    color:white;
}
main{
    background:linear-gradient(to bottom, #001f3f 30%, black 100%)  ;
    color:white;
    height:75vh;
}
footer{
    height:25vh;
    background-color:black;
    color:white;
}
</style>