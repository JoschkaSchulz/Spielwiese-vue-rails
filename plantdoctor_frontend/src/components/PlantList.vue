<template>
  <v-container>
    <h1>Liste aller Pflanzen</h1>

    <div v-if="busy">
      <v-progress-circular indeterminate/>
    </div>
    <div v-else>
      <v-row>
        <v-col cols="2" class="font-weight-bold">
          Pflanze
        </v-col>
        <v-col cols="2" class="font-weight-bold">
          Größe in cm
        </v-col>
        <v-col cols="6" class="font-weight-bold">
          Wie oft muss die Pflanze gegeossen werden
        </v-col>
        <v-col cols="2" class="font-weight-bold">
          Aktionen
        </v-col>
      </v-row>
      <v-row
          v-for="plant in $store.state.plants"
          :key="plant.id">
        <v-col cols="2">
          {{ plant.name }}
        </v-col>
        <v-col cols="2">
          {{ plant.size }}
        </v-col>
        <v-col cols="6">
          {{ plant.watering }}
        </v-col>
        <v-col cols="2">
          <v-btn @click="statusReport(plant)">Statusreport</v-btn>
        </v-col>
      </v-row>
    </div>
    <plant-form v-on:update:plants="updatePlants" />
  </v-container>
</template>

<script>
import PlantForm from "@/components/PlantForm";
import {SET_PLANT, SET_PLANTS} from "@/store/mutations";
export default {
  name: "PlantList",
  components: {PlantForm},
  data() {
    return {
      plants: [],
      busy: true,
    };
  },
  methods: {
    updatePlants() {
      this.busy = true;
      this.$axios.get('/plants')
        .then((response) => {
          this.$store.commit(SET_PLANTS, response.data);
          this.busy = false;
        })
    },
    statusReport(plant) {
      this.$store.commit(SET_PLANT, plant);
      this.$router.push({name: 'Plant'});
    }
  },
  mounted() {
    this.updatePlants();
  }
}
</script>

<style scoped>

</style>