<template>
    <span class="bg-white px-1 mx-1 text-light-blue xs-font-size border border-light-blue">
        {{ text }}
    </span>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
    }
}
</script>