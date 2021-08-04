<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-expansion-panels>
        <v-expansion-panel
          v-for="(item,i) in 5"
          :key="i"
        >
          <v-expansion-panel-header>
            TITULO DA TAREFA
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Paçoca
          </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
    </v-col>
  </v-row>
</template>
