<template>
  <div class="ui container">
    <!--     <div class="titles">
      <p id="score-title">Nuotti</p>
      <p id="score-composer">Säveltäjä</p>
      <p id="score-dancetype">Tanssilaji</p>

      <div class="icons score-icons">
        <i class="fas fa-chevron-circle-down fa-lg"></i>
      </div>
    </div> -->

    <MockScore
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
      :composer="score.Composer"
      :versions="score.Scores"
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
    };
  },
  created() {
    axios.get('https://orivesiallstars.net/music-scores').then((response) => {
      this.musicScores = response.data;
    });
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

#score-title {
  width: 540px;
  font-size: 30px;
  margin-left: -4px;
}

#score-composer {
  width: 200px;
  text-align: center;
  font-size: 23px;
}

#score-dancetype {
  width: 130px;
  text-align: center;
  font-size: 23px;
}

i {
  font-size: 22px;
  margin: 0 8px;
  opacity: 0;
}
</style>
