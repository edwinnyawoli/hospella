<template>
    <div>
        <NavBar></NavBar>
        <section class="w-full p-8 pt-24 md:p-16 flex flex-col-reverse md:flex-row h-[calc(100vh-16px)]">
            <div class="flex-1 flex flex-col text-center md:text-start md:px-16 justify-center space-y-4">
                <h1 class="text-3xl md:text-6xl font-semibold">We provide you the <span class="text-green-700">best medical
                        care</span> wherever you
                    are</h1>
                <h3 class="text-xl">Affordable and effective health care from licensed providers, in-person.</h3>
                <button
                    class="btn rounded-3xl bg-green-700 text-white md:w-64 hover:last:translate-x-1 hover:bg-green-600">Find
                    nearest kiosk
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                        stroke="#ffffff">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                                fill="#ffffff"></path>
                        </g>
                    </svg>
                </button>
            </div>
            <div class="flex-1">
                <ClientOnly>
                    <GhanaMap></GhanaMap>
                </ClientOnly>
            </div>
        </section>
        <section class="md:px-24 p-8 py-16 bg-blue-100">
            <div class="flex flex-col md:flex-row gap-8">
                <div class="flex-col justify-center flex-1 md:text-xl space-y-2">
                    <h3 class="text-4xl font-semibold">We provide modern <span class="text-green-700">service care</span>
                    </h3>
                    <h5>Our innovative health kiosks make modern health care easily accessible, even it remote
                        areas.</h5>
                    <p>It offers
                        fully
                        compliant clinical examination and treatment rooms including general, OB-Gyn, X-ray, pediatric, ear
                        nose
                        and
                        throat, ophthalmic, dental and dialysis, as well as designs for mass casualty, central sterile
                        processing,
                        administration and a fully functioning operating suit with positive air and sterile corridor.</p>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 flex-1 gap-2">
                    <div style="background-image: url(images/1.jpg)" alt=""
                        class="bg-cover min-h-64 rounded-md hover:scale-105"></div>
                    <div style="background-image: url(images/2.jpg)" alt=""
                        class="bg-cover h-64 rounded-md hover:scale-105"></div>
                    <div style="background-image: url(images/3.jpg)" alt=""
                        class="bg-cover h-64 rounded-md hover:scale-105"></div>
                    <div style="background-image: url(images/4.jpg)" alt=""
                        class="bg-cover h-64 rounded-md hover:scale-105"></div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div class="grid grid-flow-col gap-4">
                <NuxtLink to="/about" active-class="font-bold" class="hover:font-bold">About us</NuxtLink>
                <NuxtLink to="/contact" active-class="font-bold" class="hover:font-bold">Contact</NuxtLink>
                <!-- <NuxtLink to="/press" active-class="font-bold" class="hover:font-bold">Press kit</NuxtLink> -->
            </div>
            <div>
                <div class="grid grid-flow-col gap-4">
                    <a href="https://www.twitter.com/" class="hover:scale-105"><svg xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" class="fill-current">
                            <path
                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
                            </path>
                        </svg></a>
                    <a href="https://www.youtube.com/" class="hover:scale-105"><svg xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" class="fill-current">
                            <path
                                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z">
                            </path>
                        </svg></a>
                    <a href="https://www.facebook.com/" class="hover:scale-105"><svg xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" class="fill-current">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z">
                            </path>
                        </svg></a>
                </div>
            </div>
            <div>
                <p>Copyright © 2023 - All right reserved by Hospella</p>
            </div>
        </footer>
    </div>
</template>

<style scoped>
section {
    min-height: calc(100vh - 16px);
}
</style>