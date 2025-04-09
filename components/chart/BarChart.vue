<template>
  <div id="chart-demo" class="mt-12 bg-white p-4 rounded shadow-md w-1/2">
    <DxChart
      :data-source="filteredData"
      :customize-point="customizePoint"
      title="Temperature in Seattle: October 2017"
    >
      <DxSize :height="420" />
      <DxValueAxis>
        <DxLabel
          :customize-text="customizeLabelText"
          :visible="true"
        />
      </DxValueAxis>
      <DxSeries
        argument-field="day"
        value-field="t"
        type="bar"
      />
      <DxLegend :visible="false" />
      <DxExport :enabled="true" />
      <DxLoadingIndicator :enabled="true" />
    </DxChart>
    <div class="action">
      <div class="label">
        Choose a temperature threshold, &deg;C:
      </div>
      <DxSelectBox
        id="choose-temperature"
        :data-source="temperature"
        :input-attr="{ 'aria-label': 'Temperature' }"
        :value="threshold"
        :on-value-changed="changeTemperature"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useBarChartStore } from '../stores/barChartStore'; // Adjust path if needed

import DxChart, {
  DxValueAxis,
  DxLabel,
  DxLegend,
  DxExport,
  DxSeries,
  DxSize,
  DxLoadingIndicator,
} from 'devextreme-vue/chart';
import DxSelectBox, { type DxSelectBoxTypes } from 'devextreme-vue/select-box';

// Use store
const barChartStore = useBarChartStore();
const { threshold, filteredData } = storeToRefs(barChartStore);

// Chart config
const temperature = [2, 4, 6, 8, 9, 10, 11];
const palette = ['#C3A2CC', '#B7B5E0', '#E48CBA'];
let paletteIndex = 0;

function customizeLabelText({ valueText }: { valueText: string }) {
  return `${valueText}°C`;
}

function changeTemperature({ value }: DxSelectBoxTypes.ValueChangedEvent) {
  barChartStore.setThreshold(value);
}

function customizePoint() {
  const color = palette[paletteIndex];
  paletteIndex = (paletteIndex + 1) % palette.length;
  return { color };
}
</script>

<style>
.action {
  width: 330px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.action .dx-selectbox {
  width: 90px;
}
</style>