<template>
  <v-container>
    <v-row>
      <v-col cols="2" align="left">Name:</v-col>
      <v-col cols="10" align="left">{{ $store.state.currentPlant.name }}</v-col>

      <v-col cols="2" align="left">Größe:</v-col>
      <v-col cols="10" align="left">{{ $store.state.currentPlant.size }}cm</v-col>

      <v-col cols="2" align="left">Wann gießen:</v-col>
      <v-col cols="10" align="left">{{ $store.state.currentPlant.watering }}</v-col>
    </v-row>
    <v-divider />
    <v-btn @click="leaveDamage">Blattschaden aufnehmen</v-btn>
  </v-container>
</template>

<script>
export default {
  name: "PlantInfo",
  methods: {
    leaveDamage() {
      this.$router.push({name: 'LeaveDamage'});
    }
  }
}
</script>