<script setup lang="ts">
import { onMounted } from 'vue';
</script>

<template>
    <div class="flex w-full bg-indigo-900 text-white">
        <div id="LineNumber" class="w-12"></div>
        <div id="TextBox" class="w-full h-full p-8 focus:outline-none" contenteditable="true"></div>
    </div>
</template>