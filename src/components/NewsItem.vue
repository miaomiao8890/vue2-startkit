<template>
  <li>
    {{ item.contentid }}
  </li>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
<style>

</style>
