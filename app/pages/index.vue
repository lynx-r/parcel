<template>
  <SplitWrapper :sizes="[40, 25, 15, 20]" class="flex">
    <SplitItem>
      <RoleInterfacesPanel />
    </SplitItem>

    <SplitItem>
      <ParcelLockersPanel />
    </SplitItem>

    <SplitItem>
      <TestQueuePanel />
    </SplitItem>

    <SplitItem>
      <LogsPanel />
    </SplitItem>
  </SplitWrapper>
</template>

<script setup lang="ts">
import { SplitItem, SplitWrapper } from 'vue3-split'

// Main dashboard layout
</script>
