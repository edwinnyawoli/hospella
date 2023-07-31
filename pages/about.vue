<template>
    <div>
        <section class="md:px-24 p-8 py-24 bg-blue-50 space-y-8">
            <div class="flex-col justify-center flex-1 md:text-lg space-y-4 text-center">
                <h1 class="text-3xl md:text-4xl font-semibold">About us</h1>
                <h3>Our innovative health kiosks make modern health care easily accessible, even it remote
                    areas.</h3>
                <p class="md:px-[4vw] hidden">It offers
                    fully
                    compliant clinical examination and treatment rooms including general, OB-Gyn, X-ray, pediatric, ear
                    nose
                    and
                    throat, ophthalmic, dental and dialysis, as well as designs for mass casualty, central sterile
                    processing,
                    administration and a fully functioning operating suit with positive air and sterile corridor.</p>
            </div>
            <div class="flex flex-wrap justify-center gap-8 pt-8">
                <div v-for="s in services" class="card w-96 bg-base-100 shadow-xl">
                    <figure><img class="aspect-[4/3]" :src="s.image" alt="Trailer 1" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            {{ s.title }}
                        </h2>
                        <p> {{ s.description }}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const services = ref([
    {
        "title": "Easy to deploy",
        "description": "Under 10,000 lbs. they are easy to move with pickup truck",
        "image": "./images/1.jpg"
    },
    {
        "title": "Generate power",
        "description": "Redundant power removes the need to grid connection",
        "image": "./images/2.jpg"
    },
    {
        "title": "Manufacture water",
        "description": "Storage, filtration and water from air technologies available",
        "image": "./images/3.jpg"
    },
    {
        "title": "Connected",
        "description": " Cellular and Satellite connectivity options ensure communications",
        "image": "./images/4.jpg"
    },
]);
</script>