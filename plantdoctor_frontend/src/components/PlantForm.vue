<template>
  <v-container>
    <h2>Pflanze anlegen</h2>
    <v-form>
      <v-text-field v-model="name" label="Name" required/>
      <v-text-field v-model="size" label="Größe in cm" required/>
      <v-text-field v-model="watering" label="Wann muss die Pflanze gegossen werden?" required/>
      <v-btn @click="submit">Pflanze anlegen</v-btn>
    </v-form>
    <v-snackbar v-if="snackbar" v-model="snackbar">
      Pflanze wurde erfolgreich angelegt!
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  name: "PlantForm",
  data() {
    return {
      name: '',
      size: 0,
      watering: '',
      snackbar: false,
      lastPlant: {},
    };
  },
  methods: {
    submit() {
      this.$axios.post('/plants', {name: this.name, size: this.size, watering: this.watering})
      .then((response) => {
        this.lastPlant = response.data;
        this.snackbar = true;
        this.$emit('update:plants');
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>

</style>