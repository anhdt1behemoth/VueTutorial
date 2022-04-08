<template>
    <div class="us">
        <h2>User Settings</h2>
        <UserSettingsNav />
        <router-view class="us__content" />
        <router-view name="helper" class="us_content us__content--helper" />
    </div>
</template>

<script>
import UserSettingsNav from '../NestedNamedView/UserSettingsNav.vue'
export default {
  components: { UserSettingsNav }
}
</script>
