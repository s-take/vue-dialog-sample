<template>
  <v-container>
    <v-row>
      <div class="text-xs-center">
        <v-btn slot="activator" color="red lighten-2" @click="showDialog(1)" dark>Click Me ID=1</v-btn>
        <app-dialog ref="dialog"></app-dialog>
      </div>
    </v-row>
    <br />
    <v-row>
      <div class="text-xs-center">
        <v-btn slot="activator" color="red lighten-2" @click="showDialog(2)" dark>Click Me ID=2</v-btn>
        <app-dialog ref="dialog"></app-dialog>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import TestDialog from "../components/Dialog.vue";
import store from "@/store";

export default {
  data() {
    return {
      text: "Test"
    };
  },
  methods: {
    showDialog(id) {
      console.log(id);
      store.commit("setrouteId", id);
      this.$refs.dialog.open();
    }
  },
  components: {
    appDialog: TestDialog
  }
};
</script>