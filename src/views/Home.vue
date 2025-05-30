<template>
  <div class="home">
      <h1 class="title--text">
        うちのごはん
      </h1>
  <v-container>

    <v-tabs v-model="activeTab" grow background-color="transparent">
  <v-tab v-for="(recipe, index) in recipes" :key="index">
    {{ recipe.tabTitle }}
  </v-tab>
</v-tabs>

<v-tab-items v-model="activeTab">
  <v-tab-item>
    <v-table class="tab">
      <tbody>
        <tr
          v-for="(item, i) in recipes[activeTab]?.tables"
          :key="i"
          @click="openDialog(item)"
          style="cursor: pointer"
        >
          <td>{{ item.title }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-tab-item>
</v-tab-items>


    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title class="modal">{{ selected?.title }}</v-card-title>
          <v-card-text class="recipe-text">
            <div
            v-for="(field, index) in fields"
            :key="index"
            class="section"
            >
            <p class="label">{{ field.label }}</p>
            <p>{{ selected?.[field.key] }}</p>
            <hr
            v-if="index < fields.length - 1"
            class="divider"
            />
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import recipesJson from '@/components/json/recipes.json'

const recipes = ref<any[]>([])
const activeTab = ref(0)
const dialog = ref(false)
const selected = ref<any | null>(null)

const fields = [
  { label: '材料:', key: 'ingredients' },
  { label: '調味料:', key: 'seasoning' },
  { label: '手順:', key: 'process' }
]

onMounted(() => {
  recipes.value = recipesJson
})

function openDialog(item: any) {
  selected.value = item
  dialog.value = true
}
</script>

<style>
.home {
  background-color: #FFFBE6;
  min-height: 100vh;
}
.tab {
  background-color: #FFFBE6 !important;
  color: #11634a
}
.title--text {
  padding-top: 30px;
  color: #11634a;
  text-align: center;
  font-weight: bold;
}
.modal {
  background-color: #FFFBE6;
}
.recipe-text .label {
  font-weight: bold;
  margin-bottom: 10px;
}

.recipe-text .section {
  margin-bottom: 12px;
  white-space: pre-line;
}

.recipe-text .divider {
  border: none;
  border-top: 1px dashed #ccc;
  margin: 12px 0;
}
</style>