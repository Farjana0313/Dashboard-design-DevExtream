<template>
    <div class="mt-12 bg-white p-4 rounded shadow-md w-1/2">
      <DxPieChart id="pie" :data-source="pieData" palette="Bright" title="Olympic Medals in 2008">
        <DxSeries argument-field="country" value-field="medals">
          <DxLabel :visible="true" :customize-text="formatLabel" position="columns">
            <DxConnector :visible="true" :width="0.5" />
            <DxFont :size="16" />
          </DxLabel>
        </DxSeries>
        <DxLegend
          :column-count="4"
          orientation="horizontal"
          item-text-position="right"
          horizontal-alignment="center"
          vertical-alignment="bottom"
        />
        <DxExport :enabled="true" />
      </DxPieChart>
    </div>
  </template>
  

<script setup lang="ts">
import DxPieChart, {
  DxSeries,
  DxLegend,
  DxLabel,
  DxConnector,
  DxFont,
  DxExport,
} from 'devextreme-vue/pie-chart';

import { storeToRefs } from 'pinia';
import { usePieChartStore } from '../stores/pieChartStore'; // Adjust path if needed

const pieChartStore = usePieChartStore();
const { pieData } = storeToRefs(pieChartStore);

const formatLabel = ({ valueText, percentText }) => `${valueText} (${percentText})`;
</script>


<style>
#pie {
    height: 440px;
}
</style>