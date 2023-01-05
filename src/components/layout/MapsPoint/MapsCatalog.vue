<template>
    <GMapMap :center="center" :options="options" :zoom="10" map-type-id="terrain" style="width: 100%; height: 30rem">
        <GMapCluster :minimumClusterSize="5" :styles="styleopt" :zoomOnClick="true">
            <GMapMarker :label="{ text: `IDR 9.000.000`, color: selected == m.id ? 'white' : 'black' }" :icon='{
                path: "M94.56,0H6.33C2.83,0,0,3.55,0,7.93V18.4c0,4.38,2.83,7.93,6.33,7.93H43.62l6.21,10.13L56,26.33H94.56c3.5,0,6.33-3.55,6.33-7.93V7.93C100.89,3.55,98.06,0,94.56,0Z",
                fillColor: selected == m.id ? "black" : "white",
                left: -100,
                scaledSize: { width: 1000, height: 77 },
                fillOpacity: 1,
                anchor: {
                    x: 48, y: 35
                },
                labelColor: "red",
                strokeWeight: 0,
                labelOrigin: { x: 50, y: 12 },
            }' :key="index" v-for="(m, index) in packages" :position="m.positions" :clickable="true" :draggable="false"
                @click="selectPoint(m)">
                <GMapInfoWindow style="top: 38px !important;cursor:pointer;" 
                   :opened="selected === m.id">
                    <div style="max-width:230px ;">
                        <CatalogCardVue v-if="selected === m.id" :package="packSelected" :seq="1" />
                    </div>
                </GMapInfoWindow>
            </GMapMarker>
        </GMapCluster>
    </GMapMap>
</template>
<script lang="ts">
import packages from "@/stores/packages.json"
import cities from "@/stores/indoposition.json"
import { useCityStore } from '@/stores/city'
import type Package from "@/types/Package";
import CatalogCardVue from "@/components/widget/CatalogCard.vue";
export default {
    setup() {
        const stores = useCityStore();
        return {
            stores
        };
    },
    data() {
        return {
            packSelected: {} as Package,
            selected: null,
            colorBox: "white",
            styleopt: [
                {
                    textColor: "black",
                    url: "/src/assets/image/icons/m-01.png",
                    height: 52,
                    width: 53,
                },
                {
                    textColor: "black",
                    url: "/src/assets/image/icons/m-02.png",
                    height: 55,
                    width: 56,
                },
                {
                    textColor: "black",
                    url: "/src/assets/image/icons/m-03.png",
                    width: 66,
                },
                {
                    textColor: "black",
                    url: "/src/assets/image/icons/m-01.png",
                    height: 77,
                    width: 78,
                },
                {
                    textColor: "black",
                    url: "/src/assets/image/icons/m-03.png",
                    height: 89,
                    width: 90,
                },
            ],
            center: { lat: -3.7963, lng: 97.0068 },
            packages: [] as Array<Package>,
            options: {
                styles: [
                    {
                        elementType: "labels.text.fill",
                        stylers: [
                            {
                                color: "#616161",
                            },
                        ],
                    },
                ]
            },
            circleOptions: {
                strokeColor: "#FF0000",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#FF0000",
                fillOpacity: 0.35,
            },
        };
    },
    methods: {
        selectPoint(m: any) {
            if (!m) {
                this.selected = null
                this.packSelected = {} as Package;
            } else {
                this.selected = m.id;
                this.packSelected = m;
                this.center = m.position;
            }
        }
    },
    mounted() {
        //console.log(this.stores.cities.lat);
        this.center = {
            lat: this.stores.cities.lat,
            lng: this.stores.cities.lng
        };
        for (var i = 0; i < cities.length; i++) {
            if (i == 20) {
                break
            }
         
        }
    },
    components: { CatalogCardVue }
};
</script>
  
<style lang="scss">
.gm-style img {
    max-width: 100% !important;
}

.gm-style-iw-tc::after {
    display: none !important;
    visibility: hidden;
}

.gm-style-iw.gm-style-iw-c {

    background-color: transparent !important;
    overflow: hidden !important;
    box-shadow: none;
    max-height: 361px !important;

    .gm-style-iw-d {
        max-height: max-content !important;
        overflow: hidden !important;
    }
}

.cluster {
    div {
        // top: 9px;
        // left: -11px;
        font-weight: bold;
    }

    img {
        height: 30px !important;
        left: 13px;
        top: -8px;
    }
}
</style>
  