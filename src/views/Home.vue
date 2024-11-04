<script setup>
import { store } from '../store.js'
import supabase from '../supabase'

const fetchPosts = async () => {
  let { data: posts, error } = await supabase
    .from('posts')
    .select('*')

  store.posts = posts
}

const getWordCount = (str) => (str.split(' ').length)
fetchPosts()
</script>

<template>
  <div class="home">
    <main class="container mx-auto">

      <div v-if="!store.posts"> There are no posts.</div>
      <div v-else>
        <div class=" post-item mb-4 cursor-pointer" v-for="item, itemIndex in store.posts" :key="itemIndex"
          @click="$router.push(`/post/${item.id}`)">
          <h2 class="text-slate-900 text-2xl font-bold">{{ item.title }}</h2>
          <p>{{ getWordCount(item.description) }} words | published {{ item.created_at }}</p>
        </div>
      </div>
    </main>
  </div>
</template>
