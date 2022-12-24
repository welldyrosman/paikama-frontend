<template>
    <div class="box-galleries row mt-3">
        <div class="col-9">
            <Carousel :settings="settings" :breakpoints="breakpoints">
                <Slide v-for="slide,i in images" class="img-comments" :key="slide">
                    <img :src="$getImage(slide?.image)" v-if="slide.image" class="img-ulasan rounded" />
                </Slide>

                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </div>
        <div class="col-3">
            <div class="f-20 f-med">Foto dari pembeli</div>
            <a class="link-primary f-12">Lihat Lebih Banyak Foto</a>
        </div>
    </div>
</template>
<script lang="ts">
import type CommentPic from '@/types/CommentPic';
import 'vue3-carousel/dist/carousel.css'
export default {
    props:{
        images:{
            type:Array<CommentPic>,
            default:[]
        }
    },
    data() {
        return {
            settings: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
            breakpoints: {
                // 700px and up
                700: {
                    itemsToShow: 3,
                    snapAlign: 'center',
                },
                // 1024 and up
                1024: {
                    itemsToShow: 3,
                    snapAlign: 'start',
                },
            },
        }
    },
}
</script>
<style scoped lang="scss">
@use '@/assets/colorVariable.scss';

.img-ulasan {
    width: 9rem;
}
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
    margin-right: 0.5rem;

    img {
        flex-shrink: 0;
        min-width: 100%;
        min-height: 100%
    }
}

.box-galleries {
    border: 1px solid colorVariable.$grey100;
    padding: 0.5rem;
    border-radius: 0.7rem;
}
</style>