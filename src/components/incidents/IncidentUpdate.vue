<template>
  <div class="flex flex-wrap mt-5">
    <div class="w-full md:w-3/12">
      <div class="font-medium text-lg title" :class="`text-${titleColor}`">
        {{ title }}
      </div>
      <div class="date text-color-light">
        {{ date }}
      </div>
    </div>
    <div class="w-full md:w-9/12">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'incident-update',
})
export default class extends Vue {
  @Prop()
  title!: string

  @Prop({ default: 'color' })
  titleColor!: string

  @Prop()
  date!: Date
}
</script>
