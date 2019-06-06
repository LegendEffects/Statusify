<template>
    <div class="banner">
        <span class="cornerInfo">{{cornertext}}</span>
        <span class="title">{{title}}</span>
    </div>
</template>

<script>
export default {
    name: 'page-header',
    props: ['title', 'cornertext'],
}
</script>

<style scoped>
.banner {
    width: 100%;
    height: 300px;
    background-size: cover;
    text-align: center;
    margin-bottom: 50px;
    background-image: linear-gradient(323deg, #36D1DC 5%, #5B86E5);
}
.cornerInfo {
    position: absolute;
    top: 2%;
    left: 2%;
    font-size: .95rem;
    color: #fff;
    font-variant-numeric: tabular-nums;
}
.title {
    text-align: center;
    line-height: 300px;
    font-size: 3rem;
    color: #fff;
    font-weight: 800;
}
</style>
