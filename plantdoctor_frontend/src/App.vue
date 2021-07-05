<template>
  <v-app id="inspire">
    <v-app-bar
        app
        color="white"
        flat>
      <v-container>
        <v-container class="py-0 fill-height">
          <v-icon>mdi-sprout-outline</v-icon>
          <span class="pl-2 font-weight-bold">Pflanzendoctor</span>

          <v-spacer />

          <span class="px-2"> {{ $store.state.user ? $store.state.user.email : '' }} </span>
          <span class="blue--text"> Abmelden </span>
        </v-container>
      </v-container>
    </v-app-bar>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet
                min-height="70vh"
                rounded="lg">
              <router-view/>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
