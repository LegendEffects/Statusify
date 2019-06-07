<template>
    <div class="component--status">
        <div class="status" :class="'status-'+state">
            <span class="message">{{message}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'status-box',
    props: ['message', 'state'],

}
</script>