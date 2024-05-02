<template>
    <div class="aboutMe">
        <div class="headshotContainer">
            <img class="headshot" src="@/assets/headshot.jpg">
        </div>
        <div class="aboutMeBlurb">
            <p>
                My name is Robert Shelton, and I've been a web developer for 9 years. My recent work has been a combination of JavaScript based front ends and REST API development, focused on creating responsive, accessible, and robust web experiences for a wide variety of users. If you are interested in working together, feel free to reach out to me via <a href="">email</a> or check out my <a href="https://github.com/RWShelton" target="_blank">GitHub</a> or <a href="https://www.linkedin.com/in/robert-shelton-4b5836a6/" target="_blank">LinkedIn</a>. 
            </p>
        </div>
    </div>
</template>

<style scoped>
    .aboutMe{
        display:flex;
        align-items: center;
    }
    @media(max-width:800px){
        .aboutMe{
            display:block;
        }
        .headshotContainer, .aboutMeBlurb{
            display:flex;
            justify-content: center;
        }
    }
    .headshot{
        border-radius: 50%;
        max-height:300px;
    }
    .aboutMeBlurb{
        padding-left:48px;
    }
    a{
        color:aqua !important;
        transition:.3s;
    }
    a:hover{
        color:white !important;
        transition:.3s;
    }
</style>