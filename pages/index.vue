<template>
  <div>
    <h1>Here is your playground</h1>
  </div>
  <div>
    <div class="flex justify-between gap-4">
      <BarChart />
      <PieChart />
    </div>
    <Table />
  </div>
</template>

<script setup lang="ts">
import BarChart from '~/components/chart/BarChart.vue';
import PieChart from '~/components/chart/PieChart.vue';
import Table from '~/components/tables/Table.vue';

</script>

<style scoped></style>
