<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title class="bg-header">
            <div class="header">
                <h1>Login</h1>
            </div>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
            <ion-title class="bg-header">
                <div class="header">
                    <h1>Login</h1>
                </div>
            </ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="container">
        <div class="container">
          <div class="bg">
            <ion-item class="item">
              <ion-label position="floating">Email</ion-label>
              <ion-input type="email"></ion-input>
            </ion-item>
            <ion-item class="item">
              <ion-label position="floating">Senha</ion-label>
              <ion-input type="password"></ion-input>
            </ion-item>
            <ion-button expand="block" href="/home">Login</ion-button>
          </div>
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
    IonButton,
    IonItem,
    IonLabel,
    IonInput
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Login',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonItem,
    IonLabel,
    IonInput
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

.bg {
  padding: 20px;
  border-radius: 5px;
  background-color: #b2bec3;
}

.item {
  margin: 0px 0px 40px 0px;
}
</style>