<template>
  <div class="stats">
    <h1>Stats</h1>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of notes</td>
          <td>{{storeNotes.totalNotesCount}}</td>
        </tr>
        <tr>
          <td>Total of characters</td>
          <td>{{storeNotes.totalCharacterestCount}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useStoreNotes } from '@/stores/storeNotes';

const storeNotes = useStoreNotes();

</script>