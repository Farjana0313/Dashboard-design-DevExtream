// stores/barChartStore.ts
import { defineStore } from "pinia";
import weatherData from "../components/data/monthWeather.json";

export const useBarChartStore = defineStore("barChart", {
  state: () => ({
    threshold: 2,
    originalData: weatherData,
  }),
  getters: {
    filteredData: (state) => {
      return state.originalData.filter((item) => item.t > state.threshold);
    },
  },
  actions: {
    setThreshold(newThreshold: number) {
      this.threshold = newThreshold;
    },
  },
});
