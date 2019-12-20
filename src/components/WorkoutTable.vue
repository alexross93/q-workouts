<template>
<div>
  <div>Test</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      data: this.loadData()
    }
  },
  methods: {
  },
  mounted () {
    var url = 'http://my-json-server.typicode.com/akselsoft/kazojson/casefiles/22039'
    const config = { method: 'get', url: url }
    this.$axios(config).then(result => {
      this.details = result.data.decisions
    }, error => {
      this.error = error
    })
  }
}
</script>
