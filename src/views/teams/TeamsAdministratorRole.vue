<template>
  <CardHeader>
    <CardHeaderHeading>Administrator role</CardHeaderHeading>

    <template #button>
      <CardHeaderButton :icon-component="IconAdd" @click="modalStore.newTeamModal = true"
        >New team</CardHeaderButton
      >
      <TeamsNewModal />
    </template>
  </CardHeader>
  <SettingsCard class="divide-y">
    <SettingsCardRowRoute
      v-for="team in teamsStore.adminTeams"
      :key="team.id"
      :url="`/teams/${team.id}`"
    >
      {{ team.name }}
    </SettingsCardRowRoute>
    <SettingsCardRowMessage v-if="!teamsStore.adminTeams.length">
      No teams created yet
    </SettingsCardRowMessage>
  </SettingsCard>
</template>

<script setup lang="ts">
import CardHeader from '@/components/CardHeader/CardHeader.vue'
import CardHeaderHeading from '@/components/CardHeader/CardHeaderHeading.vue'
import CardHeaderButton from '@/components/CardHeader/CardHeaderButton.vue'
import IconAdd from '@/components/icons/streamline/regular/IconAdd.vue'
import TeamsNewModal from '@/views/teams/TeamsNewModal.vue'
import { useModalsStore } from '@/stores/modals'
import SettingsCard from '@/components/SettingsCard/SettingsCard.vue'
import SettingsCardRowRoute from '@/components/SettingsCard/SettingsCardRowRoute.vue'
import { useTeamsStore } from '@/stores/teams'
import SettingsCardRowMessage from '@/components/SettingsCard/SettingsCardRowMessage.vue'

const modalStore = useModalsStore()
const teamsStore = useTeamsStore()
</script>
