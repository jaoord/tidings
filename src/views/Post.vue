<script setup>
import { useRoute } from 'vue-router'
import store from '../store.js'


const route = useRoute()

const post = store.posts.find(x => x.id == route.params.id)


</script>

<template>
    <article class="post container mx-auto">
        <h2 class="text-2xl">{{ post.title }}</h2>
        <p class="text-stone-500 text-xs mb-4">{{ post.date }}</p>
        <p class="leading-relaxed">{{ post.description }}</p>
    </article>
</template>