<template>
  <div id="app">
    <keep-alive>
      <router-view @translate-currentid="currentSongId = $event" />
    </keep-alive>
    <Player v-if="currentSongId" :current-song-id="currentSongId"></Player>
  </div>
</template>
<script>
import Player from "@/views/Player.vue";
export default {
  components: {
    Player
  },
  data() {
    return {
      currentSongId: null
    };
  }
};
</script>
<style></style>
