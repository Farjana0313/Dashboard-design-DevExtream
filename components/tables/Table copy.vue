<template>
    <div>
        <DxDataGrid id="gridContainer" :customize-columns="customizeColumns" :data-source="dataSource" key-expr="id"
            :show-borders="true">
            <DxScrolling row-rendering-mode="virtual" />
            <DxPaging :page-size="10" />
            <DxPager :visible="true" :allowed-page-sizes="pageSizes" :display-mode="displayMode"
                :show-page-size-selector="showPageSizeSelector" :show-info="showInfo"
                :show-navigation-buttons="showNavButtons" />
        </DxDataGrid>
        <div class="options">
            <div class="caption">Options</div>
            <div class="option-container">
                <div class="option">
                    <DxSelectBox id="dispalyModes" :items="displayModes" :input-attr="{ 'aria-label': 'Display Mode' }"
                        display-expr="text" value-expr="value" v-model:value="displayMode" />
                </div>
                <div class="option">
                    <DxCheckBox id="showPageSizes" text="Show Page Size Selector"
                        v-model:value="showPageSizeSelector" />
                </div>
                <div class="option">
                    <DxCheckBox id="showInfo" text="Show Info Text" v-model:value="showInfo" />
                </div>
                <div class="option">
                    <DxCheckBox id="showNavButtons" text="Show Navigation Buttons" :disabled="isCompactMode"
                        v-model:value="showNavButtons" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import {
    DxDataGrid,
    DxScrolling,
    DxPager,
    DxPaging,
    type DxDataGridTypes,
} from 'devextreme-vue/data-grid';
import DxSelectBox from 'devextreme-vue/select-box';
import DxCheckBox from 'devextreme-vue/check-box';
import { type DisplayMode } from 'devextreme-vue/common';
import { generateData } from '../data/data.ts';
import { type PagerPageSize } from 'devextreme-vue/common/grids';

const dataSource = generateData(100000);
const displayModes: {
    text: string,
    value: DisplayMode,
}[] = [
        { text: 'Display Mode \'full\'', value: 'full' },
        { text: 'Display Mode \'compact\'', value: 'compact' },
    ];
const pageSizes: (number | PagerPageSize)[] = [5, 10, 'all'];

const displayMode = ref(displayModes[0].value);
const showPageSizeSelector = ref(true);
const showInfo = ref(true);
const showNavButtons = ref(true);

const isCompactMode = computed(() => displayMode.value === 'compact');

const customizeColumns = (columns: DxDataGridTypes.Column[]) => {
    columns[0].width = 70;
};
</script>