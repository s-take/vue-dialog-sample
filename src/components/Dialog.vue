<template>
  <v-dialog v-model="dialog" persistent width="500">
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>Privacy Policy</v-card-title>

      <v-card-text>ID is {{ routeid }}</v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="close()">I accept</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      dialog: false
    };
  },
  computed: {
    ...mapGetters({
      routeid: "routeId"
    })
  },
  methods: {
    open() {
      this.dialog = true;
      console.log(this.newId);
    },
    close() {
      this.dialog = false;
    }
  }
};
</script>
