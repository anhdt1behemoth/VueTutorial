<template>
    <div>
        <table>
            <tbody>
                <tr>
                    <th>ID</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
  name: 'InfoView',
  data () {
    return {
      usernameIput: ''
    }
  },
  computed: {
    username () {
      return this.$store.state.username
    },
    // ...mapGetters(['getUsername', 'getAge']),
    age () {
      return this.$store.state.age
    }
  }
}
</script>
