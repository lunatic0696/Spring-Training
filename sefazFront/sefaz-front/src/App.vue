<template>
  <v-app id="inspire">
    <v-app-bar
      app
      shrink-on-scroll
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col
            v-for="tarefa of tarefas"
            :key="tarefa.id"
            cols="4"
          >
          <td>sdfsdfsfs</td>
            <v-card height="200">
              <v-card-title>Título</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Tarefa from './services/tarefas'

export default {

data(){
  return{
    tarefas: []
  }
},

mounted(){
  Tarefa.listar().then(resposta => {
    console.log(resposta.data.content)
    this.tarefas = resposta.data.content
  })
  }
}

</script>

<style>

</style>
