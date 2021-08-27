<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title class="bg-header">
            <div class="header">
                <h1>Idade</h1>
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
                    <h1>Idade</h1>
                    <ion-button href="/">Login</ion-button>
                </div>
            </ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="container">
        <div class="container">
          <div class="bg">
            <ion-item class="item">
              <ion-label>Data de Nascimento</ion-label>
              <ion-input type="date" v-model="valorInput"></ion-input>
            </ion-item>
            <ion-button expand="block" @click="calcularIdade">Calcular Idade</ion-button>
            <ion-card class="card">
              <ion-card-header>
                <ion-card-title>{{idade}}</ion-card-title>
              </ion-card-header>
            </ion-card>
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
    IonInput,
    IonCard,
    IonCardHeader,
    IonCardTitle
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Idade',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonItem,
    IonLabel,
    IonInput,
    IonCard,
    IonCardHeader,
    IonCardTitle
  },
  methods: {
    calcularIdade() {
      const dataNasc = new Date(this.valorInput);
      const hoje = new Date();
      const idade = hoje.getFullYear() - dataNasc.getFullYear();
      this.idade = idade;
      console.log(`A sua idade é: ${idade}`);
    }
  },
  data() {
    return {
      valorInput: '',
      idade: 0
    }
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

.card {
  margin: 40px 0px 0px 0px;
}
</style>