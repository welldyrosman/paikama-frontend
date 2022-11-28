<template>
    <main>
        <div class="detail-title f-sbold f-18 mb-2"> {{ packStore.packView.title }}</div>
        <div class="detail-title f-sbold f-16 mb-2"> {{ package['title'] }}</div>
        <div class="item-detail">
            <i>
                <IconBase iconName="compare" width="1rem" height="1rem">
                    <IconPlane />
                </IconBase>
            </i><span>{{kindtrip.title}}</span>
        </div>
        <div class="item-detail"><i class="bi bi-calendar3"></i><span> {{cartStore.date}}</span>
        </div>
        <div class="item-detail"><i class="bi bi-translate"></i><span> {{langtrip.title}}</span>
        </div>
        <div class="item-detail"><i class="bi bi-arrow-clockwise"></i> <span> Bisa Refund</span>
        </div>
    </main>
</template>
<script lang="ts">
import IconBase from '@/components/IconBase.vue';
import IconPlane from '@/components/icons/IconPlane.vue';
import { useCartStore } from '@/stores/cart';
import { usePackStore } from '@/stores/package';
import type Info from '@/types/Info';
interface packageType{
    id:number,
    title:string,
}
export default{
    setup() {
        const cartStore = useCartStore();
        const packStore = usePackStore();
        return {
            cartStore,packStore
        }
    },
    components:{IconBase,IconPlane},
    props:{
        package:{
            type:Object,
            default:{} as packageType
        },
        date:{
            type:Date,
            default:null
        },
        kindtrip: {
            type: Object as () => Info,
            default: {
                title: "Belum Memilih Paket"
            }
        },
        langtrip: {
            type: Object as () => Info,
            default: {
                title: "Belum Memilih Paket"
            }
        }
    }
}
</script>
<style scoped lang="scss">
@use '@/assets/colorVariable.scss';

.item-detail {
    i {
        margin-right: 1rem;
    }

    span {
        color: colorVariable.$grey600;
    }

    margin-bottom: 0.5rem;
}

</style>