<template>
  <div class="score-wrapper">
    <!-- Main container and titles -->
    <div class="score" @click="toggleVersions">
      <p id="score-title">{{ title }}</p>
      <p id="score-composer">{{ composer }}</p>
      <p id="score-dancetype">{{ dancetype }}</p>

      <StatusIcon :open="versionsActive" />
    </div>

    <!-- Description -->
    <div v-if="versionsActive && description" class="information-container">
      <div @click="toggleDescription" class="information-dropdown">
        <div class="container-title">
          <i class="fas fa-align-center"></i>
          <p>Kuvaus / Sanat</p>
        </div>

        <StatusIcon :open="descriptionActive" />
      </div>

      <hr v-if="descriptionActive" />

      <div
        v-if="descriptionActive"
        class="score-description"
        v-html="descriptionSanitized"
      ></div>
    </div>

    <!-- Audio -->
    <div
      v-if="versionsActive && audio.length > 0"
      class="information-container"
    >
      <div @click="toggleAudioContainer" class="information-dropdown">
        <div class="container-title">
          <i class="fas fa-music"></i>
          <p>Äänitteet</p>
        </div>

        <StatusIcon :open="audioContainerActive" />
      </div>

      <hr v-if="audioContainerActive" />

      <div v-if="audioContainerActive" class="score-audio">
        <div v-for="track in audio" :key="track.id" class="audio-wrapper">
          <p class="audio-title">{{ track.name }}</p>
          <audio controls class="audio-players">
            <source :src="track.url" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>

    <!-- Video -->
    <div
      v-if="versionsActive && (videoArray.length > 0 || youtube)"
      class="information-container"
    >
      <div @click="toggleVideoContainer" class="information-dropdown">
        <div class="container-title">
          <i class="fas fa-video"></i>
          <p>Videot</p>
        </div>

        <StatusIcon :open="videoContainerActive" />
      </div>

      <hr v-if="videoContainerActive" />

      <div v-if="videoContainerActive" class="score-video">
        <div class="video-container">
          <div
            v-for="video in videoArray"
            :key="video.id"
            class="video-wrapper"
          >
            <p class="video-title">{{ video.name }}</p>

            <iframe
              class="video-frame"
              :height="videoHeight"
              :width="videoWidth"
              :src="video.url"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div class="video-container">
          <div v-for="video in youtubeArray" :key="video" class="video-wrapper">
            <iframe
              class="video-frame"
              :height="videoHeight"
              :width="videoWidth"
              :src="'https://www.youtube.com/embed/' + video"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    <!-- Versions -->
    <div v-if="versionsActive" class="information-container">
      <div v-for="version in versions" :key="version.id">
        <div @click="openPdf(version.url, version.name)" class="score-version">
          <p id="version-title">{{ version.name }}</p>
          <div class="icons">
            <i
              @click="openPdf(version.url, version.name)"
              class="fas fa-expand-alt fa-lg"
            ></i>
            <!-- <a @click="download(version.url, version.name)"> -->
            <a @click.stop="download(version.url, version.name)">
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

      <embed id="pdf-viewer" :src="pdfURL" />
    </div>
  </div>
</template>

<script>
import StatusIcon from '@/components/StatusIcon.vue';

import DOMPurify from 'dompurify';
import { marked } from 'marked';

export default {
  name: 'MusicScore',
  components: {
    StatusIcon,
  },
  props: {
    title: String,
    dancetype: String,
    composer: String,
    description: String,
    versions: Array,
    audio: Array,
    videoArray: Array,
    youtube: String,
  },
  computed: {
    videoHeight: function () {
      return this.videoWidth * 0.5632;
    },
    videoWidth: function () {
      const informationContainerWidth = document.querySelectorAll(
        '.information-container'
      )[0].offsetWidth;

      // If mobile, return 100%.
      if (this.isMobile) return informationContainerWidth - 60;

      // Else return part of div as value.
      return (informationContainerWidth - 60) * 0.48;
    },
    isMobile: function () {
      return window.innerWidth < 768;
    },
  },
  data() {
    return {
      versionsActive: false,
      descriptionActive: false,
      audioContainerActive: false,
      videoContainerActive: false,
      pdfActive: false,
      pdfLink: '',
      descriptionSanitized: '',
      youtubeArray: [],
      pdfURL: '',
    };
  },
  created() {
    if (this.description) {
      this.descriptionSanitized = DOMPurify.sanitize(marked(this.description));
    }

    if (this.youtube) {
      this.youtubeArray = this.youtube.split('\n');
    }
  },
  methods: {
    toggleVersions() {
      this.versionsActive = !this.versionsActive;

      if (this.versionsActive === false) {
        this.descriptionActive = false;
        this.audioContainerActive = false;
        this.videoContainerActive = false;
      }
    },
    toggleDescription() {
      this.descriptionActive = !this.descriptionActive;
    },
    toggleAudioContainer() {
      this.audioContainerActive = !this.audioContainerActive;
    },
    toggleVideoContainer() {
      this.videoContainerActive = !this.videoContainerActive;
    },
    openPdf(URL, name) {
      if (URL.split('.').pop() === 'pdf') {
        this.pdfActive = true;
        this.pdfURL = URL;
      } else {
        this.download(URL, name);
      }
    },
    closePdf() {
      this.pdfActive = false;
    },

    download(URL, name) {
      const anchor = document.createElement('a');
      anchor.href = URL;
      anchor.download = name;
      anchor.target = '_blank';

      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
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
  z-index: 10;
  height: 100vh;
  width: 100%;
  position: fixed;
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

.score-audio,
.score-video {
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
}

.audio-wrapper {
  width: 48%;
  margin: 10px 0;
}

.audio-players,
.video-players {
  width: 100%;
  margin: 20px 0;
}

.audio-title {
  margin-bottom: 5px;
}

.video-title {
  margin-bottom: 15px;
}

.video-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.video-wrapper {
  margin-bottom: 30px;
  display: inline;
}

.video-frame {
  /*   width: 467px;
  height: 263px;
 */
}

.score-wrapper {
  margin: 20px 0;
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

.container-title {
  display: flex;
  align-items: center;
  margin-left: -6px;
}

.container-title i {
  margin-right: 20px;
  color: #d57b01;
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
  width: 75%;
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

.score p,
.container-title p,
#version-title,
#return-message {
  margin: 0;
}

.icon-default {
  transition: transform 0.3s;
}

.icon-hover {
  transition: transform 0.3s;
  transform: rotate(-90deg);
}

@media screen and (max-width: 1200px) {
  .score {
    flex-direction: column;
  }

  .video-container {
    justify-content: center;
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

  .score-description {
    padding: 30px;
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  #version-title {
    width: 70%;
  }

  .audio-wrapper {
    width: 100%;
  }
}
</style>
