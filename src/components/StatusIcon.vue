<template>
  <div class="icons score-icons">
    <i v-if="open" class="fas icon-active fa-arrow-alt-circle-left fa-lg"></i>
    <i v-else class="fas icon-default fa-arrow-alt-circle-left fa-lg"></i>
  </div>
</template>

<script>
export default {
  name: 'StatusIcon',
  props: {
    open: Boolean,
  },
};
</script>

<style scoped>
i {
  font-size: 22px;
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
  transform: rotate(-90deg);
}
</style>
