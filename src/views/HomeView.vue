<template>
  <div>

    <ComponentHeader></ComponentHeader>
    <ComponentPreloaders></ComponentPreloaders>

  </div>
  
</template>

<script>
import ComponentHeader from '../components/ComponentHeader.vue';
import ComponentPreloaders from '../components/ComponentPreloaders.vue';

// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
   ComponentPreloaders,
   ComponentHeader

  }
}
</script>
