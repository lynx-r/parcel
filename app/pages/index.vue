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

    <div class="flex h-[calc(100vh-88px)]">
      Main content area with resizable panels
      <div class="flex-1 flex flex-col">
        Top section: Role Interfaces (40%) and Parcel Lockers (25%)
        <div class="flex flex-1 border-b border-gray-200">
          Role Interfaces Panel (40%)
          <div class="w-[40%] border-r border-gray-200 overflow-auto">
            <RoleInterfacesPanel />
          </div>

          Parcel Lockers Panel (25%)
          <div class="w-[25%] border-r border-gray-200 overflow-auto">
            <ParcelLockersPanel />
          </div>

          Test Queue Panel (15%)
          <div class="w-[15%] border-r border-gray-200 overflow-auto">
            <TestQueuePanel />
          </div>

          Logs Panel (20%)
          <div class="w-[20%] overflow-auto">
            <LogsPanel />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Main dashboard layout
</script>
