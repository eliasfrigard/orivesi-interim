<template>
  <div class="icons score-icons">
    <i
      v-if="open"
      :style="{ transform: rotation, fontSize: size }"
      :class="iconType"
      class="fas icon-active fa-lg"
    ></i>
    <i
      v-else
      :style="{ fontSize: size }"
      :class="iconType"
      class="fas icon-default fa-lg"
    ></i>
  </div>
</template>

<script>
export default {
  name: 'StatusIcon',
  props: {
    open: {
      type: Boolean,
    },
    rotation: {
      type: String,
      default: 'rotate(-90deg)',
    },
    iconType: {
      type: String,
      default: 'fa-arrow-alt-circle-left',
    },
    size: {
      type: String,
      default: '22px',
    },
  },
};
</script>

<style scoped>
.score-icons {
  display: flex;
  justify-content: center;
  align-items: center;
}

i {
  margin: 0 8px;
  opacity: 0.75;
  color: black;
}

i:hover {
  color: #d57b01;
  cursor: pointer;
}

.icon-default {
  transition: transform 0.3s;
}

.icon-active {
  transition: transform 0.3s;
}
</style>
