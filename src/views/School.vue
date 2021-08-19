<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title class="bg-header">
            <div class="header">
                <h1>School</h1>
                <ion-button href="/">Login</ion-button>
            </div>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
            <ion-title class="bg-header">
                <div class="header">
                    <h1>School</h1>
                    <ion-button href="/">Login</ion-button>
                </div>
            </ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="container">
        <div class="container">
          <ion-button href="/home">Home</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar,
    IonButton
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'School',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton
  }
});
</script>

<style scoped>
.bg-header {
  background-color: #b2bec3;
  color: #488AFF;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.container {
  height: 93.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dfe6e9;
}
</style>