<template>
  <div class="score-wrapper">
    <div class="score">
      <div class="title-btn score-header" @click="toggleScoreOrder('Title')">
        <p id="score-title">
          {{ title }}
        </p>
        <StatusIcon
          class="mock-status-icon"
          size="18px"
          iconType="fa-arrow-up"
          rotation="rotate(-180deg)"
          :open="titleDirection"
        />
      </div>
      <div
        class="composer-btn score-header"
        @click="toggleScoreOrder('Composer')"
      >
        <p id="score-composer">
          {{ composer }}
        </p>
        <StatusIcon
          class="mock-status-icon"
          size="18px"
          iconType="fa-arrow-up"
          rotation="rotate(-180deg)"
          :open="composerDirection"
        />
      </div>
      <div
        class="dancetype-btn score-header"
        @click="toggleScoreOrder('Dancetype')"
      >
        <p id="score-dancetype">
          {{ dancetype }}
        </p>
        <StatusIcon
          class="mock-status-icon"
          size="18px"
          iconType="fa-arrow-up"
          rotation="rotate(-180deg)"
          :open="dancetypeDirection"
        />
      </div>
      <div class="icons score-icons hidden">
        <i v-if="versionsActive" class="fas fa-chevron-circle-down fa-lg"></i>
        <i v-else class="fas fa-chevron-circle-up fa-lg"></i>
      </div>
    </div>
    <div v-if="versionsActive" class="score-versions">
      <div v-for="version in versions" :key="version">
        <div class="score-version hidden">
          <p id="version-title">{{ version.name }}</p>
          <div class="icons">
            <i class="fas fa-expand-alt fa-lg"></i>
            <a :href="version.url" download="download">
              <i class="fas fa-download fa-lg"></i>
            </a>
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import StatusIcon from '@/components/StatusIcon.vue';

export default {
  name: 'MusicScore',
  props: {
    title: String,
    dancetype: String,
    composer: String,
    versions: Array,
  },
  components: {
    StatusIcon,
  },
  methods: {
    toggleScoreOrder(identifier) {
      let direction = '';

      switch (identifier) {
        case 'Title':
          this.titleDirection = !this.titleDirection;
          direction = this.titleDirection;
          break;
        case 'Composer':
          this.composerDirection = !this.composerDirection;
          direction = this.composerDirection;
          break;
        case 'Dancetype':
          this.dancetypeDirection = !this.dancetypeDirection;
          direction = this.dancetypeDirection;
          break;
      }

      if (direction) {
        direction = 'asc';
      } else {
        direction = 'desc';
      }

      this.$emit('toggle-order', identifier, direction);
    },
  },
  data() {
    return {
      versionsActive: false,
      pdfActive: false,
      pdfLink: '',
      // True === asc.
      // False === desc.
      titleDirection: true,
      composerDirection: true,
      dancetypeDirection: true,
    };
  },
};
</script>

<style>
.score-header:hover .mock-status-icon i {
  color: #d57b01;
}
</style>

<style scoped>
.score-header {
  margin: 0;
}

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

.score {
  display: flex;
  min-height: 50px;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  border-radius: 5px;
  padding: 20px;
  transition: all 100ms ease-in-out;
}

.score p {
  font-weight: bold;
}

.score-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.score-versions {
  border: 1px solid rgba(14, 19, 57, 0.1);
  background-color: #fafafa;
  border-radius: 5px;
  margin-top: 10px;

  width: 92%;
}

.score-version {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 75px;
  padding: 10px 30px;
  word-break: break-word;
  cursor: pointer;
  transition: all 100ms ease-in-out;
}

#version-title {
  max-width: 80%;
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

.title-btn,
.dancetype-btn,
.composer-btn {
  cursor: pointer;
  display: flex;
  justify-content: left;
  align-items: center;
}

.title-btn {
  font-size: 24px;
  width: 525px;
}

.composer-btn {
  width: 200px;
  justify-content: center;
}

.dancetype-btn {
  width: 145px;
  justify-content: center;
}

.dancetype-btn,
.composer-btn {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

#score-title,
#score-dancetype,
#score-composer {
  margin-right: 5px;
}

p {
  margin: 0;
  letter-spacing: 1px;
}

@media screen and (max-width: 1200px) {
  .score {
    flex-direction: column;
  }

  .score-versions {
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

  .score-wrapper {
    display: none;
  }
}
</style>
