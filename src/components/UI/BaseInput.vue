<template>
    <div class="base-input d-flex flex-row">
        <template>
            <b-icon v-if="icon" :icon="icon" class="icon"/>
            <b-form-input @change="$emit('change', $event)" :list="`datalist-${id}`" :type="type" :placeholder="placeholder" :class="[`size-${size}`, icon ? 'have-icon':'no-icon']" />
            <datalist v-if="datalist" :id="`datalist-${id}`">
                <option v-for="data in datalist" :key="data.code">{{ data.label }}</option>
            </datalist>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        },
        datalist: {
            type: Array,
            required: false
        },
        placeholder: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: false
        },
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