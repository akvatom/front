<script setup>
const props = defineProps({
    modelValue: {
        required: true,
    },
    placeholder: {
        required: true,
        type: String,
    },
    inputID: {
        required: true,
        type: String,
    },
    type: {
        required: true,
        type: String,
    },
    error: {
        required: false,
        type: String,
    },
    isBirth: {
        required: false,
        type: Boolean,
        default: false,
    },
})

const inputModelValue = ref(props.modelValue)
const emit = defineEmits(['update:modelValue', 'onInput', 'onFocus', 'onBlur'])

const updateValue = (event) => {
    if (props.type == 'tel') {
        let inputValue = inputModelValue.value.replace(/\D/g, '');

        // Ensure the input value doesn't exceed 12 characters
        if (inputValue.length > 12) {
            inputValue = inputValue.substring(0, 12);
        }

        // Format the phone number based on its length
        if (inputValue.length <= 3) {
            inputModelValue.value = "+998 ";
        } else if (inputValue.length <= 5) {
            inputModelValue.value = "+998 " + inputValue.substring(3);
        } else if (inputValue.length <= 8) {
            inputModelValue.value = "+998 " + inputValue.substring(3, 5) + " " + inputValue.substring(5);
        } else if (inputValue.length <= 10) {
            inputModelValue.value = "+998 " + inputValue.substring(3, 5) + " " + inputValue.substring(5, 8) + "-" + inputValue.substring(8);
        } else if (inputValue.length < 12) {
            inputModelValue.value = "+998 " + inputValue.substring(3, 5) + " " + inputValue.substring(5, 8) + "-" + inputValue.substring(8, 10) + "-" + inputValue.substring(10);
        } else if (inputValue.length == 12) {
            inputModelValue.value = "+998 " + inputValue.substring(3, 5) + " " + inputValue.substring(5, 8) + "-" + inputValue.substring(8, 10) + "-" + inputValue.substring(10, 12);
        }
    }
    if (props.isBirth) {
        let inputValue = inputModelValue.value.toString().replace(/\D/g, '');

        if (inputValue.length > 8) {
            inputValue = inputValue.substring(0, 8);
        }
        
        if (inputValue.length == 1) {
            inputModelValue.value = inputValue.substring(0, 1);
        } else if (inputValue.length == 2) {
            inputModelValue.value = inputValue.substring(0, 2);
        } else if (inputValue.length == 3) {
            inputModelValue.value = inputValue.substring(0, 2) + "." + inputValue.substring(2, 3);
        } else if (inputValue.length == 4) {
            inputModelValue.value = inputValue.substring(0, 2) + "." + inputValue.substring(2, 4);
        } else if (inputValue.length > 0 && inputValue.length <= 8) {
            inputModelValue.value = inputValue.substring(0, 2) + "." + inputValue.substring(2, 4) + "." + inputValue.substring(4, 8);
        }
    }
    emit('update:modelValue', inputModelValue.value);
}

watch(() => props.modelValue, newVal => {
    inputModelValue.value = newVal;
})
</script>

<template>
    <div class="flex flex-col gap-2">
        <div class="relative">
            <input :type="type" @input="updateValue" v-model="inputModelValue" :id="inputID" @focus="emit('onFocus')"
                @blur="emit('onBlur')"
                :class="{ '!bg-[#FFEBF2] hover:!bg-[#E5D7E4] active:!bg-[#CCC3D6] focus:!bg-white focus:!border-red': error }"
                class="block h-12 w-full p-4 pt-[26px] text-sm caret-blue text-darkBlue placeholder:text-[#92A3C3] transition-200 bg-bg hover:bg-[#DBE3F0] active:bg-[#C2CEE1] focus:bg-white focus:active:bg-white border border-[rgba(0,0,0,0)] focus:border-blue outline-none focus:outline-none rounded-lg appearance-none focus:ring-0 peer"
                placeholder=" " />
            <label :for="inputID" draggable="false"
                class="absolute select-none text-base leading-normal text-secondary duration-300 transform -translate-y-2 scale-75 top-3 origin-[0] start-[17px] peer-focus:text-darkBlue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[2px] peer-focus:scale-75 peer-focus:-translate-y-2">
                {{ $t(placeholder) }}</label>
        </div>
        <p class="text-red text-xs leading-normal" v-if="error">{{ $t(error) }}</p>
    </div>
</template>