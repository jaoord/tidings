<script setup>
import store from '../store.js'

const posts = store.posts

const getWordCount = (str) => (str.split(' ').length)

</script>

<template>
    https://www.youtube.com/watch?v=UP2mHUpcv6g
    <div class="home">
        <main class="container mx-auto">


            <div class="post-item mb-4 cursor-pointer" v-for="item, itemIndex in posts" :key="itemIndex"
                @click="$router.push(`/post/${item.id}`)">
                <h2 class="text-slate-900 text-2xl font-bold">{{ item.title }}</h2>
                <p>{{ getWordCount(item.description) }} words | published {{ item.date }}</p>
            </div>

        </main>

    </div>

</template>