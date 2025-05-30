<template>
  <v-container>
    <v-tabs v-model="activeTab" grow>
      <v-tab v-for="(recipe, index) in recipes" :key="index">
        {{ recipe.tabTitle }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="activeTab">
      <v-tab-item>
        <v-table>
          <tbody>
            <tr
              v-for="(item, i) in recipes[activeTab].tables"
              :key="i"
              @click="openDialog(item)"
              style="cursor: pointer"
            >
              <td>{{ item.title }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-tab-item>
    </v-tabs-items>

    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title>{{ selected?.title }}</v-card-title>
        <v-card-text>
          <p><strong>材料:</strong> {{ selected?.ingredients }}</p>
          <p><strong>調味料:</strong> {{ selected?.seasoning }}</p>
          <p><strong>手順:</strong> {{ selected?.process }}</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text @click="dialog = false">閉じる</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import recipesJson from '@/components/json/recipes.json'

const recipes = ref<any[]>([])
const activeTab = ref(0)
const dialog = ref(false)
const selected = ref<any | null>(null)

onMounted(() => {
  recipes.value = recipesJson
})

function openDialog(item: any) {
  selected.value = item
  dialog.value = true
}
</script>
