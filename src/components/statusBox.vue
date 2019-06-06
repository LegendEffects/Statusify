<template>
    <div class="status" :class="'status-'+state">
        <span class="message">{{message}}</span>
    </div>
</template>

<script>
export default {
    name: 'status-box',
    props: ['message', 'state'],

}
</script>

<style scoped>
.status {
    color: #fff;
    font-size: 1.3rem;
    border-radius: 10px;
    padding: 1.1rem 1.25rem 1rem;
    font-weight: 300;
    margin-bottom: 50px;
}
</style>
