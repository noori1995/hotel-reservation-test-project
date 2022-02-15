<template>
    <button @click="$emit('click')" class="base-button" :class="`size-${size}`">
        <slot />
    </button>
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            default: 'sm',
            validator: function (value) {
                // The value must match one of these strings
                return ['sm', 'md', 'lg'].indexOf(value) !== -1
            }
        }
    }
}
</script>