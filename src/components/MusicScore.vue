<template>
  <div class="score-wrapper">
    <!-- Main container and titles -->
    <div class="score" @click="toggleVersions">
      <p id="score-title">{{ title }}</p>
      <p id="score-composer">{{ composer }}</p>
      <p id="score-dancetype">{{ dancetype }}</p>
      <div class="icons score-icons">
        <i v-if="versionsActive" class="fas fa-chevron-circle-down fa-lg"></i>
        <i v-else class="fas fa-chevron-circle-up fa-lg"></i>
      </div>
    </div>

    <!-- Description -->
    <div v-if="versionsActive" class="information-container">
      <div @click="toggleDescription" class="information-dropdown">
        <p>Description</p>
        <i class="fas fa-chevron-circle-up fa-lg"></i>
      </div>

      <hr v-if="descriptionActive" />

      <!-- <div v-html="albumText"></div> -->
      <div v-if="descriptionActive" class="score-description">
        <h3>Description title.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque,
          expedita recusandae doloremque optio fuga. Harum doloribus sequi
          cupiditate dolorem eius? Nesciunt doloribus consequatur necessitatibus
          distinctio eaque adipisci assumenda laboriosam.
        </p>
      </div>
    </div>

    <!-- Audio -->
    <div v-if="versionsActive" class="information-container">
      <div @click="toggleAudioContainer" class="information-dropdown">
        <p>Audio</p>
        <i class="fas fa-chevron-circle-up fa-lg"></i>
      </div>

      <hr v-if="audioContainerActive" />

      <!-- <div v-html="albumText"></div> -->
      <div v-if="audioContainerActive" class="score-audio">
        <audio controls class="audio-players">
          <source
            src="https://orivesi-strapi-bucket.s3.eu-north-1.amazonaws.com/12_Mimas_2701ce1e8f.mp3"
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>

        <audio controls class="audio-players">
          <source
            src="https://orivesi-strapi-bucket.s3.eu-north-1.amazonaws.com/12_Mimas_2701ce1e8f.mp3"
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
        <audio controls class="audio-players">
          <source
            src="https://orivesi-strapi-bucket.s3.eu-north-1.amazonaws.com/12_Mimas_2701ce1e8f.mp3"
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>

    <!-- Video -->

    <!-- Versions -->
    <div v-if="versionsActive" class="information-container">
      <div v-for="version in versions" :key="version">
        <div @click="openPdf" class="score-version">
          <p id="version-title">{{ version.name }}</p>
          <div class="icons">
            <i @click="openPdf" class="fas fa-expand-alt fa-lg"></i>
            <a :href="version.url" download="download">
              <i class="fas fa-download fa-lg"></i>
            </a>
          </div>
        </div>
        <hr />
      </div>
    </div>

    <div v-if="pdfActive" class="pdf-wrapper">
      <div class="pdf-controls">
        <div @click="closePdf" class="left-controls">
          <i class="fas fa-arrow-left"></i>
          <p id="return-message"><b>Palaa takaisin nuottisivulle.</b></p>
        </div>
        <div @click="closePdf" class="right-controls">
          <i class="fas fa-times"></i>
        </div>
      </div>

      <embed
        id="pdf-viewer"
        src="https://orivesi-strapi-bucket.s3.eu-north-1.amazonaws.com/Capri_Fischer_1ja2_V_Lja_Alttoviulustemma_ffe907d4b9.pdf"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicScore',
  props: {
    title: String,
    dancetype: String,
    composer: String,
    versions: Array,
    mock: Boolean,
  },
  data() {
    return {
      versionsActive: false,
      descriptionActive: false,
      audioContainerActive: false,
      videoContainerActive: false,
      pdfActive: false,
      pdfLink: '',
    };
  },
  methods: {
    toggleVersions() {
      this.versionsActive = !this.versionsActive;
    },
    toggleDescription() {
      this.descriptionActive = !this.descriptionActive;
    },
    toggleAudioContainer() {
      this.audioContainerActive = !this.audioContainerActive;
    },
    openPdf() {
      this.pdfActive = true;
    },
    closePdf() {
      this.pdfActive = false;
    },
    downloadScore(version) {
      window.location.href = version.url;
    },
  },
};
</script>

<style scoped>
.hidden {
  opacity: 0;
}

.pdf-wrapper {
  background-color: #323639;
  top: 0;
  height: 100vh;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
}

.pdf-controls {
  color: white;
  width: 100%;
  height: 4vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
}

.pdf-controls i {
  color: white;
}

.left-controls {
  display: flex;
  align-items: center;
}

.left-controls:hover p,
.left-controls:hover i,
.right-controls:hover,
.right-controls:hover i {
  color: #d57b01;
  cursor: pointer;
}

#pdf-viewer {
  top: 4vh;
  height: 96vh;
  width: 100%;
  position: absolute;
}

.score-audio {
  padding: 30px;
}

.audio-players {
  width: 47%;
  margin: 10px;
}

.score-wrapper {
  margin: 10px 0;
}

.score {
  cursor: pointer;
  display: flex;
  min-height: 75px;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background-color: #fafafa;
  border: 1px solid rgba(14, 19, 57, 0.1);
  border-radius: 5px;
  padding: 20px;
}

.score p {
  font-weight: bold;
}

.score-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.information-container {
  border: 1px solid rgba(14, 19, 57, 0.1);
  background-color: #fafafa;
  border-radius: 5px;
  margin-top: 10px;

  width: 92%;
}

.information-dropdown {
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  cursor: pointer;
}

.score-description {
  padding: 30px;
}

.score-version {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 75px;
  padding: 10px 30px;
  word-break: break-word;
  cursor: pointer;
}

#version-title {
  max-width: 80%;
}

.score:hover,
.score-version:hover,
.information-dropdown:hover {
  transition: all 75ms ease-in-out;
}

.score:hover,
.score-version:hover,
.information-dropdown:hover {
  background-color: #f3f3f3;
}

.score:hover i {
  opacity: 1;
}

i {
  font-size: 22px;
  margin: 0 8px;
  opacity: 0.75;
  color: black;
}

i:hover {
  color: #d57b01;
}

#score-title {
  width: 540px;
}

#score-composer {
  width: 200px;
}

#score-dancetype {
  width: 130px;
}

#score-dancetype,
#score-composer {
  font-size: 18px;
  font-weight: normal;
  text-align: center;
}

p {
  letter-spacing: 1px;
}

@media screen and (max-width: 1200px) {
  .score {
    flex-direction: column;
  }

  .information-container {
    width: 100%;
  }

  #score-title,
  #score-dancetype,
  #score-composer {
    text-align: center;
    width: 100%;
    word-wrap: break-word;
  }

  .score-icons {
    margin-top: 10px;
  }
}
</style>
