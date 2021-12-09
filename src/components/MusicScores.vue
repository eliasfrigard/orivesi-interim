<template>
  <div class="ui container">
    <MockScore
      @toggle-order="toggleOrder"
      title="Nimi"
      dancetype="Tanssilaji"
      composer="Säveltäjä"
      mock="true"
    />

    <MusicScore
      v-for="score in musicScores"
      :key="score.id"
      :title="score.Title"
      :dancetype="score.Dancetype"
      :description="score.Description"
      :composer="score.Composer"
      :versions="score.Scores"
      :audio="score.Audio"
      :videoArray="score.Video"
      :youtube="score.Youtube"
    />
  </div>
</template>

<script>
import axios from 'axios';

import MusicScore from '@/components/MusicScore.vue';
import MockScore from '@/components/MockScore.vue';

export default {
  components: {
    MusicScore,
    MockScore,
  },
  data() {
    return {
      musicScores: [],
      // Initial sort values.
      sortParameter: 'Title',
      sortDirection: 'asc',
    };
  },
  computed: {
    sortOrder() {
      return '?_sort=' + this.sortParameter + ':' + this.sortDirection;
    },
  },
  created() {
    this.getScores();
  },
  methods: {
    toggleOrder(identifier, direction) {
      this.sortParameter = identifier;
      this.sortDirection = direction;
      this.getScores();
    },
    getScores() {
      axios
        .get('https://orivesiadmin.net/music-scores' + this.sortOrder)
        .then((response) => {
          this.musicScores = response.data;
        });
    },
  },
};
</script>

<style scoped>
.titles {
  display: flex;
  padding: 20px;
  display: flex;
  justify-content: space-around;
}

.titles p {
  font-weight: bold;
  font-size: 30px;
}

i {
  font-size: 22px;
  margin: 0 8px;
  opacity: 0;
}
</style>
