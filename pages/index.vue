<template>
  <kalendar
    :configuration="config"
    :appointments="appointments"
    :existing_appointments="appointments"
  />
</template>

<script>
import consola from 'consola'

export default {
  data() {
    return {
      config: {
        view_type: 'week',
        cell_height: 20,
        scrollToNow: true,
        military_time: true,
        read_only: true,
        day_starts_at: 0,
        day_ends_at: 24,
        overlap: true,
        past_event_creation: true
      },
      appointments: [
        {
          from: '2019-10-27T17:00:00.900Z',
          to: '2019-10-27T19:00:00.900Z',
          data: {
            title: 'sample event',
            description: 'sample description'
          }
        }
      ],
      new_appointment: {}
    }
  },
  mounted() {
    consola.log(this.$kalendar)
    /* this.appointments.push(this.appointments[0]) */
  }
}
</script>
