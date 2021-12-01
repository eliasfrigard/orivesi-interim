<template>
  <div id="score-container ui container">
    <div class="ui container score-header">
      <div class="titles">
        <h1>ORIVESI</h1>
        <h1 class="orange">ALL STARS</h1>
      </div>
    </div>
    <MusicScores />

    <br />
  </div>
</template>

<script>
import MusicScores from '@/components/MusicScores.vue';

export default {
  name: 'App',
  components: {
    MusicScores,
  },
};
</script>

<style>
.orange {
  color: #d57b01;
  opacity: 1;
}

.score-header {
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.score-header .titles {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16vh;
}

.score-header h1 {
  font-size: 70px;
  font-weight: bold;
  margin: 0;
  margin-left: 14px;
}

.score-header h2 {
  font-size: 26px;
  margin: 0;
}

.score-header h1,
.score-header h2 {
  display: inline-block;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.score-container {
  min-height: 100vh;
}

.header {
  top: 100vh;
}

:root {
  --accent-color: #d57b01;
  --accent-hover: #eca202;
}

::selection {
  color: white;
  background: #d57b01; /* WebKit/Blink Browsers */
}

::-moz-selection {
  color: white;
  background: #d57b01; /* Gecko Browsers */
}

.accent-background ::selection {
  color: #d57b01;
  background: white; /* WebKit/Blink Browsers */
}

html {
  font-family: 'Antonio', sans-serif;
  letter-spacing: 0.5px;
}

h1 {
  font-size: 84px;
  font-weight: bold;
  letter-spacing: 1px;
}

h2 {
  font-size: 55px;
  font-weight: bold;
  letter-spacing: 1px;
}

h3 {
  font-size: 24px;
  letter-spacing: 1px;
}

p,
th,
td {
  font-family: 'Athiti', sans-serif;
  font-size: 20px;
  line-height: 35px;
  margin: 25px 0;
}

hr {
  opacity: 0.1;
}

a {
  font-family: 'Athiti', sans-serif;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  color: var(--accent-color);
  line-height: 35px;
}

a:hover {
  color: var(--accent-hover);
}
</style>
