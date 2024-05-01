<template>
    <div class="ocean">
        <svg class="wave wave-svg-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 120" preserveAspectRatio="none">
        <path d="M0 30 C150 60 350 0 500 30 C650 60 850 0 1000 30 V100 H0 V30 Z"  />
        <defs>
            <linearGradient id="wave-secondary-gradient" x2="0%" y2="100%">
            <stop offset="50%" stop-color="#356e9f" />
            <stop offset="100%" stop-color="#3176a7" />
            </linearGradient>
        </defs>
        </svg>

        <svg class="wave wave-svg-tertiary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path d="M0 30 C150 60 350 0 500 30 C650 60 850 0 1000 30 V100 H0 V30 Z" />
        <defs>
            <linearGradient id="wave-tertiary-gradient" x2="0%" y2="100%">
            <stop offset="50%" stop-color="#3176a7" />
            <stop offset="100%" stop-color="#001f3f" />
            
            </linearGradient>
        </defs>
        </svg>
    </div>
</template>

<style scoped>
.ocean {
    position: relative;
    overflow: hidden;
    height:20%;
    background:linear-gradient(to bottom, #FF8666, #FF4D4D);
}
.wave{
  position: absolute;
  left: 0;
  top: auto;
  width: 200%; /* Double the width to accommodate two SVGs */
  height: 100%;
  
}

.wave-svg-secondary {
  animation: moveWave 10s linear infinite; /* Adjust animation duration as needed */
  fill: url(#wave-secondary-gradient);
  opacity:90%;
}


.wave-svg-tertiary{
  animation: moveWave 10s linear infinite; /* Adjust animation duration as needed */
  fill: url(#wave-tertiary-gradient);
}

@keyframes moveWave {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%); /* Move to the left by half of the total width */
  }
}

</style>
