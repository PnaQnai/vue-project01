<template>
<!-- 商品评论 -->
    <div>
        <comment :id="this.$route.params.id"></comment>
    </div>
</template>

<script>
import comment from '../subcomponents/newsComment.vue'
export default {
    components:{
        comment
    }
}
</script>

<style>

</style>
