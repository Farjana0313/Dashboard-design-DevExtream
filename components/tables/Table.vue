<template>
    <div class="mt-12 bg-white p-4 rounded shadow-md">
        <h2 class="text-2xl font-bold mb-4">User List</h2>
        <div>
            <div v-if="loading" class="text-gray-600 mb-2">Loading users...</div>
            <DxDataGrid v-else :data-source="users" :show-borders="true" key-expr="id">
                <DxColumn data-field="name" caption="Name" />
                <DxColumn data-field="email" caption="Email" />
                <DxColumn data-field="age" caption="Age" />
                <DxColumn data-field="phone" caption="Phone" />
                <DxColumn data-field="address" caption="Address" />
                <DxColumn data-field="company" caption="Company" />
                <DxPaging :page-size="10" />
                <DxPager :visible="true" :allowed-page-sizes="pageSizes" :display-mode="displayMode"
                    :show-page-size-selector="showPageSizeSelector" :show-info="showInfo"
                    :show-navigation-buttons="showNavButtons" />
            </DxDataGrid>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/userStore'
import {
    DxDataGrid, DxColumn, DxPager,
    DxPaging
} from 'devextreme-vue/data-grid'
const pageSizes: (number | PagerPageSize)[] = [5, 10, 'all'];

const displayModes: {
    text: string,
    value: DisplayMode,
}[] = [
        { text: 'Display Mode \'full\'', value: 'full' },
        { text: 'Display Mode \'compact\'', value: 'compact' },
    ];
const displayMode = ref(displayModes[0].value);
const showPageSizeSelector = ref(true);
const showInfo = ref(true);
const showNavButtons = ref(true);
const userStore = useUserStore()
const { fetchUsers } = userStore

onMounted(() => {
    fetchUsers()
})

const users = computed(() => userStore.users)
const loading = computed(() => userStore.loading)
</script>