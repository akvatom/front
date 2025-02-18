<script setup>
import Flicking from "@egjs/vue3-flicking";

const props = defineProps({
    panels: {
        required: true,
        type: Array,
    },
    panelIndex: {
        required: false,
        type: Number,
        default: 0,
    },
    selected: {
        required: false,
        type: Number,
    },
    uniqueID: {
        required: true,
        type: String,
    },
})
const flicking = ref(null);

const timeout = ref(null);
watch(() => props.selected, newVal => {
    clearTimeout(timeout.value);
    timeout.value = setTimeout(() => {
        flicking.value.moveTo(newVal);
    }, 300);
})

const emits = defineEmits(['onChange', 'moveThrough'])

const updateTransform = e => {
    e.currentTarget.panels.forEach(panel => {
        if (
            (panel.progress < 0.5 && panel.progress > 0) ||
            (panel.progress < 0 && panel.progress > -0.5)
        ) emits('moveThrough', panel.index);

        const rotateVal = -panel.progress * 20;
        const sinRot = Math.sin(Math.abs(rotateVal * Math.PI / 180));
        const depth = 150 * sinRot * sinRot;
        panel.element.style.transform = `translateZ(-${depth}px) rotateX(${rotateVal}deg)`;
    });
}

const onChanged = e => {
    emits('onChange', e);
}

onMounted(() => {
    const element = document.getElementsByClassName(props.uniqueID)[0];
    const el = element.getElementsByClassName("flicking")[0];
    el.addEventListener("mouseenter", () => {
        disableScroll();
        el.addEventListener("wheel", (e) => {
            if (e.deltaY > 0 && !flicking.value.animating && flicking.value.currentPanel.index + 1 !== flicking.value.panelCount) flicking.value.next();
            else if (e.deltaY < 0 && !flicking.value.animating && flicking.value.currentPanel.index !== 0) flicking.value.prev();
        });
    });
    el.addEventListener("mouseleave", () => {
        enableScroll();
        el.removeEventListener("wheel", () => { });
    });

    wheelEvent.value = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
})

const wheelEvent = ref(null);
function disableScroll() {
    window.addEventListener(wheelEvent.value, preventDefault, { passive: false });
    window.addEventListener('DOMMouseScroll', preventDefault, false);
}
function enableScroll() {
    window.removeEventListener(wheelEvent.value, preventDefault, { passive: false });
    window.addEventListener('DOMMouseScroll', preventDefault, false);
}

function preventDefault(e) {
    e.preventDefault();
}
</script>

<template>
    <div class="rounded-lg bg-bg" :class="uniqueID">
        <Flicking class="relative h-[180px] w-full overflow-y-hidden flicking"
            :options="{ horizontal: false, align: 'center', defaultIndex: panelIndex }" :hideBeforeInit="true"
            @ready="updateTransform" @move="updateTransform" @changed="onChanged" ref="flicking">
            <div class="py-2 text-base font-bold text-darkBlue leading-5 text-center" v-for="item, index in panels"
                :key="index">
                {{ item }}
            </div>
            <template #viewport>
                <div class="absolute-center border-y border-dividers w-full h-9"></div>
                <div class="bg-bg bg-opacity-60 absolute w-full left-0 top-0 h-[72px] z-[1]"></div>
                <div class="bg-bg bg-opacity-60 absolute w-full left-0 bottom-0 h-[72px] z-[1]"></div>
            </template>
        </Flicking>
    </div>
</template>