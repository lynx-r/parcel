<template>
  <div class="min-h-screen bg-white">
    <header class="border-b border-gray-200 bg-white px-6 py-4">
      <h1 class="text-2xl font-bold text-gray-900">
        FSM Delivery Testing Interface
      </h1>
      <p class="text-sm text-gray-600">
        Parcel Locker Delivery Service Emulator
      </p>
    </header>

    <div class="flex h-[calc(100vh-88px)] flex-col">
      <div>Main content area with resizable panels</div>
      <div class="flex-1 flex flex-col">
        <div>Top section: Role Interfaces (40%) and Parcel Lockers (25%)</div>
        <SplitWrapper
          :sizes="[40, 25, 15, 20]"
          class="flex flex-1 border-b border-gray-200 w-full"
        >
          <SplitItem>
            <div>Role Interfaces Panel (40%)</div>
            <div class="border-r border-gray-200 overflow-auto">
              <RoleInterfacesPanel />
            </div>
          </SplitItem>

          <SplitItem class="flex flex-col">
            <div>Parcel Lockers Panel (25%)</div>
            <div class="border-r border-gray-200 overflow-auto">
              <ParcelLockersPanel />
            </div>
          </SplitItem>

          <SplitItem class="flex flex-col">
            <div>Test Queue Panel (15%)</div>
            <div class="border-r border-gray-200 overflow-auto">
              <TestQueuePanel />
            </div>
          </SplitItem>

          <SplitItem class="flex flex-col">
            <div>Logs Panel (20%)</div>
            <div class="overflow-auto">
              <LogsPanel />
            </div>
          </SplitItem>
        </SplitWrapper>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SplitItem, SplitWrapper } from 'vue3-split'

// Main dashboard layout
</script>
