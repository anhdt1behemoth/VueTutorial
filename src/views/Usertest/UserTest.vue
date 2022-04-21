<template>
    <div class="us">
       <UserRou/>
        <router-view class="us__content" />
        <router-view name="helper" class="us_content us__content--helper" />
    </div>
</template>
<script>
import UserRou from './UserRou.vue'
export default {
  components: { UserRou }
}
</script>
