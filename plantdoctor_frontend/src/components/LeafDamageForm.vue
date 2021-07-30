<template>
  <v-container>
    <h2>Blattschaden aufnehmen</h2>
    <v-form>
      <v-radio-group v-model="brown">
        <v-radio label="Braun trocken" value="brownDry"/>
        <v-radio label="Braun feucht" value="brownWet"/>
      </v-radio-group>
      <v-checkbox label="Gelb" v-model="yellow"/>
      <v-checkbox label="verliert Blätter" v-model="losingLeaves"/>
      <v-text-field v-model="parasites" label="Parasiten"/>
      <v-btn @click="submit">Pflanze anlegen</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "LeaveDamageForm",
  data() {
    return {
      brown: '',
      yellow: false,
      losingLeaves: false,
      parasites: '',
    };
  },
  methods: {
    submit() {
      const data = {
        wetBrown: this.brown === 'brownWet',
        dryBrown: this.brown === 'brownDry',
        yellow: this.yellow,
        losingLeaves: this.losingLeaves,
        parasites:  this.parasites,
        plant_id: this.$store.state.currentPlant.id,
      };

      this.$axios.post('/leave_damages', data);
    }
  }
}
</script>

<style scoped>

</style>
