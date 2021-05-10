<template>
    <div class="show-box">
        <div class="title">{{msg.title}}</div>
        <div class="article">{{msg.article}}</div>
    </div>
</template>

<script>
export default {
    name: 'ShowBox',
    props: {
        msg: Object
    }
}
</script>

<style scoped lang="scss">
.title {
    margin: 20px;
    font-size: 36px;
    font-weight: 600;
}

.article{
    font-size: 20px;
}
</style>
