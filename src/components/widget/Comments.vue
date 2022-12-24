<template>
    <div>
        <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
                <img :src="$getImage(comment?.member?.info.profil_pic)" class="user-ava me-3" />
                <div class="text-grey500">{{ comment.member?.name }}</div>
            </div>
            <div class="f-12 text-grey500 text-end">{{ comment.created_at }}</div>
        </div>
        <Stars class="mt-3" :star=5 />
        <div class="comments mt-3">
            {{ comment.comment }}
        </div>
        <a class="link-primary mt-5">Lihat Lebih Banyak</a>
        <div class="d-flex my-3">
            <div v-for="(slide, index) in comment.images" class="img-comments" :key="index">
                <img :src="$getImage(slide?.image)" v-if="slide.image" class="img-fluid rounded" />
            </div>
        </div>
        <div class="d-flex mt-3 text-grey500">
            <i class="bi bi-hand-thumbs-up me-3"></i>
            Bermanfaat
        </div>
    </div>
</template>
<script lang="ts">
import Stars from './Stars.vue';
import type Comment from '@/types/Comment';
export default {
    props: {
        comment: {
            type: Object as () => Comment,
            default: {
            }
        }
    },
    components: { Stars }
}
</script>
<style lang="scss" scoped>
.img-comments {
    @media only screen and (max-width: 500px) {
        width: 100px !important;
        height: 60px !important;
    }

    width: 140px !important;
    height: 100px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-right: 1rem;

    img {
        flex-shrink: 0;
        min-width: 100%;
        min-height: 100%
    }
}

.user-ava {
    height: 32px;
    width: 32px;
    border-radius: 100%;
}
</style>