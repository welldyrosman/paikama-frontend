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
            packSelected: {},
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
                this.packSelected = {};
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
            lng: this.stores.cities.long
        };
        for (var i = 0; i < cities.length; i++) {
            if (i == 20) {
                break
            }
            this.packages.push({
                "id": i + 1,
                "title": "Trip Kepulauan Nusa Penida By Travel GO!",
                "description": "Impian para pelancong ketika berada di Indonesia adalah pelesiran ke\n            Labuan\n            Bajo. Desa di Provinsi Nusa Tenggara Timur ini pun memiliki destinasi wisata yang apik dan\n            ciamik, mulai dari wisata sejarah, budaya, hingga panorama alam.\n            Banyak destinasi wisata yang bisa kamu kunjungi. Salah satu daya tarik Labuan Bajo adalah\n            kawasan habitat hewan endemik, yakni Komodo yang berada di Taman Nasional Komodo. Tak pelak,\n            banyak pelancong berlomba-lomba berkunjung melihat indahnya NTT. Soalnya, Pulau Komodo\n            merupakan habitat asli binatang purba komodo bernaung.\n            Selain itu ada Pink Beach sebagai pesona pantai surga di Labuan Bajo. Pantai ini disebut\n            Pink Beach karena pasirnya yang berwarna pink, berasal dari alga dan serpihan karang\n            berwarna merah yang bercampur dengan pasir putih. Selain keindahan pantainya, Pink Beach\n            juga terkenal dengan kehidupan bawah lautnya yang cantik sehingga cocok untuk snorkeling\n            atau diving.",
                "city": cities[i].title,
                "country": "Indonesia",
                "star": 5,
                "comments": 1053,
                "price_before": 400000,
                "price": 350000,
                "positions": {
                    "lat": cities[i].lat as number,
                    "lng": cities[i].long as number
                },
                "packages": [
                    {
                        "id": 1,
                        "title": "Nusa Penida Barat",
                        "price_before": 400000,
                        "price": 345000,
                        "pricelist": [],
                        "itenarary": [
                            {
                                "id": 1,
                                "title": "Hari Pertama di Penida Barat",
                                "rundowns": [
                                    {
                                        "id": 1,
                                        "title": "10.00 WIB",
                                        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi\n                                            semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in\n                                            sodales vehicula...."
                                    },
                                    {
                                        "id": 2,
                                        "title": "11.00 WIB",
                                        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi\n        semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in\n        sodales vehicula...."
                                    },
                                    {
                                        "id": 3,
                                        "title": "15.00 WIB",
                                        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi\n        semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in\n        sodales vehicula...."
                                    },
                                    {
                                        "id": 4,
                                        "title": "19.00 WIB",
                                        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi\n        semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in\n        sodales vehicula...."
                                    }
                                ]
                            }
                        ],
                        "includes": [
                            {
                                "id": 1,
                                "title": "Akses masuk ke objek wisata"
                            },
                            {
                                "id": 2,
                                "title": "Makan siang"
                            },
                            {
                                "id": 3,
                                "title": "Air mineral botol"
                            },
                            {
                                "id": 4,
                                "title": "Transportasi ke dan dari hotel"
                            },
                            {
                                "id": 5,
                                "title": "Driver/pemandu berbahasa Inggris dasar"
                            },
                            {
                                "id": 5,
                                "title": "Perahu bersama antara Pelabuhan Sanur dan Nusa Penida (Senilai IDR300.000)"
                            },
                            {
                                "id": 6,
                                "title": "Pajak daerah (IDR25.000))"
                            },
                            {
                                "id": 7,
                                "title": "Transportasi pribadi di Nusa Penida"
                            }
                        ],
                        "excludes": [
                            {
                                "id": 1,
                                "title": "Pengeluaran pribadi lainnya"
                            },
                            {
                                "id": 2,
                                "title": "Tip"
                            },
                            {
                                "id": 3,
                                "title": "Peralatan snorkeling"
                            },
                            {
                                "id": 4,
                                "title": "Snorkeling opsional di Crystal Bay, Manta Bay, atau Gamat Bay (tambahan)"
                            }
                        ],
                        "additionalInfos": [
                            {
                                "id": 1,
                                "title": "Jika rentan mabuk kendaraan, kamu disarankan untuk minum obat mabuk laut 1 jam sebelum beraktivitas"
                            },
                            {
                                "id": 2,
                                "title": "Harap diperhatikan infrastruktur di Nusa Penida masih dalam tahap pengembangan sehingga kamu akan melewati jalanan yang belum rata dan tidak mulus"
                            },
                            {
                                "id": 3,
                                "title": "Sanur adalah pelabuhan tradisional, kamu mungkin akan agak basah saat hendak menaiki kapal. Sangat direkomendasikan mengenakan celana pendek atau pakaian pantai"
                            },
                            {
                                "id": 4,
                                "title": "Tour ini menggunakan transportasi perahu cepat bersama, dan dapat terjadi penundaan waktu keberangkatan"
                            }
                        ]
                    },
                ],
                "guidelist": [
                    {
                        "id": 1,
                        "title": "Bahasa Indonesia"
                    },
                    {
                        "id": 2,
                        "title": "Bahasa Korea"
                    },
                    {
                        "id": 3,
                        "title": "Bahasa English"
                    },
                    {
                        "id": 4,
                        "title": "Bahasa Wanita"
                    }
                ],
                "tripkind": [
                    {
                        "id": 1,
                        "title": "Open Trip"
                    },
                    {
                        "id": 2,
                        "title": "Private Trip"
                    }
                ],
                "agency": {
                    "id": 1,
                    "title": "Travel Go!",
                    "lasttime": "sdsfsd",
                    "logo": "image/website/travel/travel-logo.jpg",
                    "joinYM": "Dessember 2023",
                    "messages": []
                },
                "images": [
                    {
                        "id": 1,
                        "paths": "image/website/package/pack-1.jpg"
                    },
                    {
                        "id": 2,
                        "paths": "image/website/package/pack-3.jpg"
                    },
                    {
                        "id": 3,
                        "paths": "image/website/package/pack-5.jpg"
                    },
                    {
                        "id": 4,
                        "paths": "image/website/package/pack-7.jpg"
                    }
                ]
            });
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
  