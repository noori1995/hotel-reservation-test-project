<template>
    <div>
        <img src="@/assets/icons/star.svg" v-for="i in Math.floor(count)" :key="i.number" />
        <!-- TODO: wee need half star icon for numbers like 3.5 , 4.5 , ... -->
    </div>
</template>

<script>
export default {
    props: {
        count: {
            type: Number,
            required: true
        }
    }    
}
</script>
