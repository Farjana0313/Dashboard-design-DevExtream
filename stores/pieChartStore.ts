// stores/pieChartStore.ts
import { defineStore } from 'pinia';

export const usePieChartStore = defineStore('pieChart', {
  state: () => ({
    pieData: [
      { country: 'USA', medals: 110 },
      { country: 'China', medals: 100 },
      { country: 'Russia', medals: 72 },
      { country: 'Britain', medals: 47 },
      { country: 'Australia', medals: 46 },
      { country: 'Germany', medals: 41 },
      { country: 'France', medals: 40 },
      { country: 'South Korea', medals: 31 },
    ],
  }),
  actions: {
    updatePieData(newData: { country: string; medals: number }[]) {
      this.pieData = newData;
    },
  },
});
