<script setup>
import { useRoute } from 'vue-router'
import { store } from '../store.js'
import supabase from '../supabase'
import { reactive } from 'vue';

const route = useRoute()

let post = reactive({})

const fetchPost = async (id) => {
  const found = store.posts.find(x => x.id == id)
  if (found) {
    post = found;
    return;
  }

  let { data, error } = await supabase
    .from('posts')
    .select()
    .eq('id', id)
    .single()

  Object.assign(post, data)
}

fetchPost(route.params.id)
</script>

<template>
  <article class="post container mx-auto">
    <h2 class="text-2xl">{{ post.title }}</h2>
    <p class="text-stone-500 text-xs mb-4">{{ post.date }}</p>
    <p class="leading-relaxed">{{ post.description }}</p>
  </article>
</template>
