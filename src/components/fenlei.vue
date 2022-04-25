<template>
   <ul class="catagtory">
        <li 
        @click="$store.commit('fenlei/updateCurrentFenlei',item.id)"
         :class='{select:item.id===currentfenlei}' v-for="item in fenlei" :key="item.id">{{item.name}}</li>

      </ul>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters(['fenlei','currentfenlei'])
    },
    created () {
        this.$store.dispatch('fenlei/getFenlei')
    }

}
</script>

<style>

</style>