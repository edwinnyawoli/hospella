<template>
    <div>
        <section class="w-full p-8 pt-24 md:p-16 flex flex-col-reverse md:flex-row h-[calc(100vh-16px)]">
            <div class="flex-1 flex flex-col text-center md:text-start md:px-16 justify-center space-y-4">
                <h1 class="text-3xl md:text-6xl font-semibold">We provide you the <span class="text-green-700">best medical
                        care</span> wherever you
                    are</h1>
                <h3 class="text-lg">Affordable and effective health care from licensed providers, at your fingertips.</h3>
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
                <GhanaMap></GhanaMap>
            </div>
        </section>


        <!-- Mission and Vission -->
        <section class="md:px-24 p-8 py-16 bg-blue-50 space-y-8">
            <div class="flex-col justify-center flex-1 md:text-xl space-y-2 text-center">
                <h1 class="text-3xl md:text-4xl font-semibold mb-4">Who we are</h1>
                <p class="md:px-24">We are an electronic hospital just a click away and right at your finger tips.</p>
                <p class="md:px-24">Our innovative health kiosks make modern healthcare easily accessible, even in remote
                    areas. We provide you with the best medical care wherever you are.</p>
            </div>
            <div class="flex flex-col md:flex-row gap-6">
                <div class="flex-1"><iframe class="md:w-[40vw] md:h-[50vh]" src="https://www.youtube.com/embed/r_r_5ngID2Y"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe></div>
                <div class="flex flex-col flex-1 gap-4 md:gap-8">
                    <div>
                        <h3 class="text-2xl font-semibold">Mission</h3>
                        <p>To be the most accessible and cost effective electronic health care provider</p>
                    </div>
                    <div>
                        <h3 class="text-2xl font-semibold">Vision</h3>
                        <p>We aim to bridge the gap between patients and health care providers and to be the most trusted
                            electronic health care provider by 2028 in Africa and beyond</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Facilities -->
        <section class="md:px-24 p-8 py-16 bg-blue-50 hidden">
            <div class="flex-col justify-center flex-1 md:text-lg space-y-16 text-center">
                <h1 class="text-3xl md:text-4xl font-semibold">Available Facilities</h1>
                <div v-for="f in facilities" class="flex flex-col md:flex-row justify-around facility gap-8">
                    <!-- Images -->
                    <div class="images flex flex-row flex-1 relative">
                        <img v-for="i in f.images" class="w-[30vw] rounded" :src="i" alt="Trailer 1" />
                    </div>
                    <div class="flex flex-col flex-1 justify-center">
                        <h3 class="font-semibold">{{ f.title }}</h3>
                        <p>{{ f.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Core values -->
        <section class="md:px-24 p-8 py-16 bg-blue-50">
            <div class="flex-col justify-center flex-1 md:text-lg space-y-16 text-center">
                <h1 class="text-3xl md:text-4xl font-semibold">Our core values</h1>
                <div class="flex flex-wrap justify-center gap-8">
                    <div v-for="v in coreValues" class="flex flex-col justify-center w-64 h-64 bg-white rounded-full gap-4">
                        <img :src="v.image" alt="" class="w-[35%] h-[35%] mx-auto">
                        <h4>{{ v.title }}</h4>
                    </div>
                </div>
            </div>
        </section>

        <!-- Partnerships -->
        <section class="md:px-24 p-8 py-16 space-y-8">
            <div class="flex-col justify-center flex-1 md:text-xl space-y-4 text-center">
                <h1 class="text-3xl md:text-4xl font-semibold">In partnership with</h1>
                <h3></h3>
            </div>
            <div class="flex flex-wrap justify-center gap-8">
                <img src="/images/sgmc_logo.jpg" alt="" class="h-24">
                <img src="/images/trust_hospital_logo.png" alt="" class="h-24">
                <div class="flex items-center h-24">
                    <svg xmlns="http://www.w3.org/2000/svg" width="213" height="61" version="1.1" id="Layer_1" x="0" y="0"
                        viewBox="0 0 298.3 91.1" style="enable-background:new 0 0 298.3 91.1" xml:space="preserve">
                        <path
                            d="M146.2 5.6h7.7V30c0 4.3-1.3 7.6-4 9.8-6.1 4.5-14.3 4.5-20.4 0-2.7-2.2-4-5.5-4-9.8V5.6h7.7V30c0 2.5.6 4.2 1.8 5.3 2.8 2.2 6.8 2.2 9.6 0 1.2-1.1 1.7-2.9 1.7-5.3l-.1-24.4zm24.6 14.9c-1.9-.1-3.8.9-4.7 2.6v19.5h-7.4V15.1h6.9l.2 3.1c1.9-2.4 4.9-3.8 7.9-3.7 2.3-.1 4.6.7 6.3 2.3 1.6 1.6 2.4 4.3 2.4 8.2v17.5H175V25.1c0-1.8-.4-3-1.1-3.6-.8-.7-1.9-1.1-3.1-1zM187.4 8c0-1 .4-2 1.1-2.7 1.7-1.4 4.3-1.4 6 0 .7.7 1.2 1.7 1.1 2.7 0 1-.4 2-1.1 2.7-1.7 1.4-4.3 1.4-6 0-.7-.7-1.1-1.7-1.1-2.7zm7.9 7.1v27.5h-7.4V15.1h7.4zm19.1 27.4c-1.4.5-2.9.7-4.4.7-2.1.1-4.1-.6-5.8-1.9-1.4-1.2-2.1-3.3-2.1-6.3V20.5H198v-5.4h4.1V8.3h7.4v6.8h4.7v5.4h-4.7v13.8c-.1.8.1 1.7.7 2.3.6.4 1.4.6 2.1.6.4 0 .8 0 1.2-.1.4 0 .7-.1.9-.1v5.5zm26.6-4.3c-1.1 1.4-2.4 2.6-4 3.4-2.1 1.1-4.4 1.6-6.7 1.6-4.3 0-7.7-1.3-10.1-3.9-2.4-2.6-3.7-5.9-3.6-9.4v-1c-.2-3.7 1.1-7.4 3.5-10.2 2.4-2.7 5.8-4.2 9.4-4 4 0 7 1.2 9 3.7s3.1 5.8 3.1 9.8v3.1h-17.5c.2 1.6.9 3.2 2.1 4.3 1.2 1.1 2.9 1.7 4.6 1.6 2.6.1 5.1-1 6.6-3.1l3.6 4.1zm-11.6-17.7c-1.4-.1-2.7.5-3.6 1.6-.9 1.2-1.5 2.6-1.7 4.1h10.2v-.6c0-1.3-.4-2.6-1.2-3.7-.9-1-2.3-1.5-3.7-1.4zm32.7 22.2-.4-2.9c-.8 1-1.8 1.9-3 2.5-1.2.6-2.6.9-4 .9-3.2.1-6.2-1.4-7.9-4-2-3-3-6.5-2.8-10v-.5c0-4.2.9-7.6 2.8-10.2 1.8-2.6 4.8-4 8-3.9 2.6-.1 5 1 6.6 3v-14h7.4v39.1h-6.7zm-10.8-13.5c-.1 1.9.3 3.9 1.2 5.6.8 1.5 2.4 2.5 4.1 2.3 2 .1 3.9-1 4.8-2.8V23.4c-.8-1.8-2.7-3-4.8-2.9-1.7-.1-3.3.8-4.1 2.4-.9 1.8-1.3 3.8-1.2 5.8v.5zm-95.4 20.7V87h-7.6l-14.9-24.5V87h-7.7V49.9h7.7l14.9 24.5V49.9h7.6zM177.4 87c-.4-.8-.6-1.6-.7-2.5-.8.9-1.7 1.6-2.8 2.1-1.3.6-2.7.9-4.2.9-2.4.1-4.8-.8-6.6-2.3-1.8-1.5-2.7-3.6-2.7-5.9-.1-2.6 1.1-5.2 3.2-6.7 2.1-1.6 5.3-2.4 9.5-2.4h3.3v-1.6c.1-1.1-.3-2.2-1-3.1-.8-.8-1.9-1.2-3.1-1.1-2.6 0-3.9 1.1-3.9 3.3H161c0-2.4 1.2-4.7 3.2-6.2 2.5-1.8 5.5-2.7 8.5-2.6 2.8-.1 5.6.7 7.9 2.4 2.1 1.6 3.1 4 3.1 7.3v11.6c0 1.3.1 2.5.3 3.8.2.9.4 1.7.8 2.5v.5h-7.4zm-6.1-5.1c1.1 0 2.2-.3 3.2-.8.8-.4 1.4-1.1 1.9-1.8v-4.8h-3c-1.5-.1-3.1.3-4.3 1.2-.9.8-1.4 1.9-1.4 3 0 .9.3 1.7.9 2.3.8.6 1.8.9 2.7.9zm31.3 4.9c-.7.2-1.3.4-2 .5-.8.1-1.6.2-2.4.2-2.1.1-4.1-.6-5.8-1.9-1.4-1.2-2.1-3.3-2.1-6.3V64.8h-4.1v-5.4h4.1v-6.8h7.4v6.8h4.7v5.4h-4.7v13.8c-.1.8.1 1.7.7 2.3.6.4 1.4.6 2.1.6.4 0 .8 0 1.2-.1.4 0 .7-.1.9-.1v5.5zm3.1-34.5c0-1 .4-2 1.1-2.7 1.7-1.4 4.3-1.4 6 0 1.5 1.5 1.5 3.9 0 5.5-1.7 1.4-4.3 1.4-6 0-.8-.8-1.2-1.8-1.1-2.8zm7.8 7.1V87h-7.4V59.4h7.4zm4.2 14.1V73c-.1-3.6 1.1-7.2 3.4-10 2.3-2.7 5.5-4 9.6-4 4.2 0 7.4 1.3 9.7 4 2.3 2.8 3.5 6.4 3.4 10v.5c.1 3.6-1.1 7.2-3.4 10-2.3 2.7-5.5 4-9.6 4-4.2 0-7.4-1.3-9.7-4-2.3-2.8-3.5-6.4-3.4-10zm7.4-.6v.5c-.1 2 .4 4 1.3 5.7 1.6 2.4 4.9 3.1 7.3 1.5.6-.4 1.1-.9 1.5-1.5.9-1.8 1.3-3.7 1.3-5.7v-.5c.1-2-.4-3.9-1.3-5.7-.9-1.6-2.6-2.6-4.4-2.4-1.8-.1-3.5.8-4.4 2.4-.9 1.8-1.4 3.8-1.3 5.7zm34.5-8c-1.9-.1-3.8.9-4.7 2.7V87h-7.4V59.4h6.9l.3 3.2c1.9-2.4 4.8-3.8 7.9-3.7 2.4-.1 4.7.7 6.4 2.3 1.6 1.6 2.4 4.3 2.4 8.2V87H264V69.4c0-1.8-.4-3-1.1-3.6-1-.7-2.2-1-3.3-.9zm31.6 14.4c0-.8-.4-1.6-1.1-2-1.4-.8-3-1.3-4.5-1.5-2.5-.5-4.9-1.4-7-2.8-1.8-1.2-2.9-3.3-2.8-5.5 0-2.3 1.1-4.5 2.9-6 2-1.7 4.6-2.6 8.1-2.6s6.4.8 8.5 2.5c2 1.5 3.1 3.9 3.1 6.4H291c0-1-.3-1.9-1-2.6-.9-.7-2-1.1-3.2-1-1-.1-2 .2-2.9.8-.6.5-1 1.3-1 2.1s.4 1.6 1.1 2c1.2.7 2.6 1.1 4 1.3 2.6.5 5.1 1.4 7.4 2.7 2 1.2 3 3.2 3 5.9 0 2.4-1.2 4.6-3.1 6-2.1 1.6-4.9 2.4-8.5 2.4-3.8 0-6.8-1-8.8-3-1.9-1.6-3-3.9-3.1-6.3h7c0 1.2.6 2.4 1.6 3.1 1 .6 2.2 1 3.5.9 2.7.2 4.2-.8 4.2-2.8z" />
                        <path class="st0"
                            d="M86.4 83.1c-2.9 1.4-6.1 1.8-9.3 1.1-2.2-.5-4.2-1.2-6.2-2.1l-4.4-1.8c-3.8-1.2-7.9-1.3-11.8-.3h-.4c-3.9-1.1-8-1-11.8.3-1.5.5-2.9 1.2-4.4 1.8-2 .9-4.1 1.7-6.2 2.2-3.1.7-6.4.3-9.3-1.1l-.4-.2c-.1 0-.1 0-.1.1 1.9 2 4.4 3.4 7 4.1 1.8.5 3.7.6 5.5.4 2.8-.4 5.5-1.4 7.8-3l4.2-2.8c1.6-1 3.5-1.4 5.3-1 1 .1.2.6.1.7-2.5 1.2-4.9 2.7-7.1 4.4-1.5 1.1-4.2 3.7-4.2 3.7l2 1.7 2.2-2.4c2.7-2.8 5.8-5.2 9.2-7.1.3-.2.6-.2.9 0 3.4 1.9 6.5 4.3 9.2 7.1l2.2 2.4 2-1.7-4.2-3.7c-2.2-1.7-4.6-3.2-7.1-4.4-.2-.1-.9-.6.1-.7 1.8-.4 3.7 0 5.3 1l4.2 2.8c2.3 1.6 5 2.6 7.8 3 1.8.2 3.7.1 5.5-.4 2.6-.8 5.1-2.2 7-4.1 0 0-.1-.1-.2-.1l-.4.1m9.8-8.7c-1.3 1-2.7 1.7-4.2 2.2-2.1.6-4.4 1-6.6 1-2.9.1-5.7.3-8.6.7-.2 0-.3 0-.2-.1 2.5-1 4.5-3 5.6-5.4l2.8-5.7v-.2c-.2.1-3 2.5-4.3 3.7L76 75.2c-2.1 1.8-4.6 3.1-7.3 3.8h-.1l-.1.1 5.4 1.3c2.3.7 4.7 1.1 7.1 1.3 6.1.6 12-2.2 15.4-7.2 0-.1-.1-.1-.2-.1M105 61c-1.4 1.7-3.1 3.2-5 4.4-1.6 1.1-3.3 2-5.1 2.8-2.3.9-4.4 2.2-6.3 3.7l-.4.3c-.1 0-.1 0-.1-.1s3-3.1 3.9-9.4c.1-2.3.5-4.5 1-6.7v-.2c-2.1 2.6-3.7 5.5-4.8 8.6l-1.8 5.1c-.7 2.3-2 4.4-3.7 6.1l-.2.2v.1c.2 0 .4-.1.6-.1l5.8-1.2c3.2-.5 6.2-1.8 8.8-3.7 2.7-1.9 4.8-4.5 6.3-7.4.4-.8.7-1.6 1-2.4.2-.2.1-.2 0-.1m3.8-15c-.9 2.7-2.5 5.2-4.6 7.2-2.4 2.3-4.6 4.9-6.6 7.5 0 .1-.2 0-.1-.1.8-2.7 1-5.6.6-8.5-.4-2.4-1.4-5-1.7-7.9l-.1-.1c0 .1-.1.2-.1.3-.6 1.9-1 3.8-1.2 5.8-.1 2.4.3 5.5.1 7.9-.2 2.8-.4 5.7-1.7 8.2v.2l6-3.7c2.5-1.6 4.6-3.6 6.3-6 2.2-3.1 3.3-6.7 3.3-10.5v-.4c-.1 0-.2.1-.2.1" />
                        <path class="st0"
                            d="M102.4 47.6c.1 0 .1 0 0 0 0 .1 0 0 0 0 0-.8 0-1.6-.1-2.4-.2-2.8-1.9-5.1-3.4-7.5-1-1.5-1.9-3.1-2.7-4.8 0 0-.1-.1-.2-.1 0 .2 0 1.1.1 1.6.5 4 1.5 8 3 11.8.9 2.4 1.2 4.9 1 7.4 0 .2 0 .2.1.3.9-1.3 2.7-3.1 3.8-4.5s7.1-8.2 4.2-17.6c-.1-.4-.3-.8-.5-1.2l-.1.1c0 6.8-3.3 9.7-4.6 14.3-.3 1.1-.5 1.9-.6 2.6m.1-14-.6-1.6-.4-.9c-1-1.8-2.4-3.4-4.1-4.6-1.4-1.2-2.6-2.5-3.6-4H93.5c.1.3 1 3.3 1.6 4.7 1 1.9 2.2 3.8 3.6 5.4l.3.4c1.7 2.3 3 4.8 3.9 7.5 0 .1.1.1.1.1l1.7-5.2c.6-1.8 1.1-3.7 1.5-5.6.6-4.5-.8-10.2-3.4-13.4 0 0-.1.1-.1.2l.1.4.2.6c.5 2.4.6 5 .1 7.4-.4 1.9-.5 3.9-.5 5.9 0 .3.2 2.8.2 2.9s-.1 0-.2 0M94.5 8.5c.8.8 1.5 1.7 1.9 2.8.7 1.7.9 4.2 1.4 6.1l.9 3.3c0 .1-.1.2-.2.1-1.5-1.8-3.3-3.3-5.4-4.5-1.4-.8-2.5-1.9-3.5-3.1l-.5-.7s-.1-.1-.2 0v.3c.5 2.2 1.5 4.3 3.1 6 1.3 1.2 2.7 2.3 4 3.4 1.7 1.4 3.3 3.1 4.8 4.8 0 0 .1.1.1 0v-1.6l.1-4.8V19c0-1.6-.3-3.3-.9-4.8-1-2.5-2.9-4.5-5.2-5.7-.1-.1-.3-.1-.5-.2 0 0 0 .1.1.2M84.2 3.8c1.4 1.3 2.6 2.8 3.7 4.4 1 1.6 2.1 3 3.5 4.3.9.9 3.6 3 4.3 3.6-.1-.8-1.4-6.5-4.9-9.3-2-1.6-4.4-2.8-6.9-3.4v.2l.3.2m-56 77.9c2.3-.2 4.7-.6 6.9-1.3l5.4-1.3h.1s0-.1-.1-.1h-.1c-2.7-.7-5.2-2-7.4-3.8l-4.7-4.5L24 67v.2c.4.6 1.9 3.9 2.8 5.7 1.1 2.5 3.1 4.4 5.6 5.4.1.1 0 .1-.2.1-2.8-.4-5.7-.6-8.6-.7-2.2 0-4.5-.4-6.6-1-1.5-.5-2.9-1.2-4.2-2.2h-.2c2 2.8 4.8 5 8 6.2 2.5.8 5 1.1 7.6 1m-2.3-5.9c.2 0 .3.1.6.1v-.1l-.2-.2c-1.7-1.7-2.9-3.8-3.7-6.1l-1.8-5.1c-1.1-3.1-2.7-6-4.8-8.6v.2c.6 2.2.9 4.4 1.1 6.7.9 6.2 3.9 9.2 3.9 9.3s0 .2-.1.1l-.4-.3c-1.9-1.5-4-2.8-6.3-3.7-1.8-.8-3.5-1.7-5.1-2.8-1.9-1.2-3.6-2.7-5-4.4H4c.3.8.6 1.6 1 2.4 1.5 2.9 3.7 5.5 6.4 7.4 2.6 2 5.6 3.3 8.8 3.7 1.9.5 3.8 1 5.7 1.4m-16.1-13 6 3.7s.1-.1.1-.2c-1.3-2.6-1.5-5.4-1.7-8.2-.2-2.5.2-5.5.1-7.9-.2-2-.6-4-1.2-5.9 0-.1-.1-.2-.1-.3l-.1.1c-.2 2.9-1.3 5.5-1.7 7.9-.4 2.8-.2 5.7.6 8.5.1.1-.1.2-.1.1-2-2.7-4.2-5.2-6.6-7.5C3 51.1 1.4 48.7.5 46c0 0-.1-.1-.2-.1s0 .2 0 .4c0 3.7 1.1 7.4 3.3 10.5 1.6 2.3 3.7 4.4 6.2 6M8.7 54c.1-.1.1-.1.1-.3-.2-2.5.1-5.1 1.1-7.4 1.4-3.8 2.4-7.7 3-11.8 0-.5.1-1.4.1-1.6-.1 0-.1 0-.1.1-.8 1.7-1.7 3.3-2.7 4.8C8.6 40 7 42.4 6.8 45.2c-.1.8-.1 1.6 0 2.4 0 0 0 .1-.1.1v-.1L6 45.2c-1.4-4.6-4.6-7.5-4.6-14.3l-.1-.1c-.2.4-.3.8-.5 1.2-2.9 9.4 3 16.2 4.2 17.6s2.8 3.1 3.7 4.4M4.5 35.3l1.7 5.2s.1 0 .1-.1c.9-2.7 2.3-5.2 3.9-7.5l.3-.4c1.4-1.7 2.6-3.5 3.6-5.4.6-1.4 1.5-4.4 1.6-4.7H15.4c-1 1.5-2.2 2.8-3.6 4-1.7 1.2-3.2 2.8-4.2 4.7-.1.3-.3.6-.4.9l-.6 1.7s-.1.2-.1 0 .2-2.5.2-2.9c0-2-.2-4-.6-5.9-.5-2.5-.4-5 .1-7.4 0-.2.1-.4.2-.6 0-.1.1-.3.1-.4 0-.1 0-.1-.1-.2-2.6 3.2-4.1 9-3.5 13.4.5 1.9 1 3.8 1.6 5.6m3.6-14.6.1 4.8V27h.1c1.4-1.8 3-3.4 4.7-4.9l4-3.4c1.6-1.7 2.6-3.8 3.1-6v-.3H20l-.5.7c-.9 1.2-2.1 2.3-3.4 3.1-2.4 1.5-4 2.6-5.4 4.5-.1.1-.2.1-.1-.1l.9-3.3c.5-1.9.7-4.4 1.4-6.1.4-1 1.1-2 1.9-2.8v-.2c-.2 0-.3.1-.5.2-2.5 1.3-4.3 3.4-5.3 5.8-.6 1.5-1 3.1-.9 4.8v1.7m5.3-4.7 4.4-3.6c1.3-1.3 2.5-2.7 3.5-4.3 1-1.6 2.3-3.1 3.7-4.4l.3-.3v-.2c-2.5.6-4.9 1.7-6.9 3.4-3.7 2.9-4.9 8.6-5 9.4m40.2 31c.3-.4-.4-.7-.6 0s.3.5.6 0m7.6-17.6c-.3-.1-1.4 1.2-1.2 1.4.5-.3.9-.8 1.2-1.4m.2-.2c.2.1.9-.3.8-.4s-1-.5-1-.3c0 .4.1.6.2.7m13.5 12.4c.4-.1.3-.7 0-.7s-.7.5-.6.5.4.3.6.2M70 28.3c-.3 0-.4.3-.1.5.3.1.5 0 .7-.1.2-.1.4-.3.4-.6s-.4-.7-.2-.9.5.1.7 0 .3-.3.3-.5-.1-.8-.5-.8-.8.8-.8.8c-.1.2-.1.5 0 .7.1.4 0 .9-.5.9M76.6 28.4c0 .2.5 1.5.6 1.8s.2 1.4.4 1.3.2-.7.1-1c-.1-.7-.3-1.5-.5-2.1-.1-.4-.8-1.9-1-1.8s.3 1 .4 1.4-.1.2 0 .4m-3.5-17c.3.1.3-.5-.2-.9s-1.3-.2-1.1 0c.4.3.8.7 1.3.9m-15-4.3c-.7-.4-.1-1-.6-1.4-.6-.2-1.2-.1-1.6.3-.5.6.6.4.9.6s1.3.9 1.4.8 0-.3-.1-.3m4-2c-.9-.4-4.2-.4-4.1.5s1.9 0 2.4 0 2.5-.1 1.7-.5M53 43.7c-.2-.1-.5.1-.6-.1s-.3-.1-.3 0-.1.3.1.5.6.2.8 0c.1-.1.1-.3 0-.4M51.1 37c.3 0 .3-.2.4-.2s0 .2.3.2.6-.7-.3-.7c-.7 0-.6.7-.4.7m1.2.8c-.5-.1-.4.2-.8.2-.6.1-.1-.4-.3-.6-.1-.1-.4.4-.5.7 0 .2 0 .6.2.7l1.9.2c.4 0 0-1.1-.5-1.2m-6.2 6.5c.2 0 .3-.6.2-.9s-.7-.1-.7.1.4.8.5.8m-8 0c0-.2 0-1-.2-1.2s-.2.1-.3.1-.1-.4-.2-.4 0 .6.2 1 .5 1 .5.5m-.2-1.8c.2-.6.3-1.2.3-1.8 0-.5-.3-.9-.4-.9s0 .3.1.8c0 .5-.2 1-.3 1.5 0 .1.2.6.3.4" />
                        <path class="st0"
                            d="M27.7 64.9c14.9 14.9 38.9 14.9 53.8 0s14.9-38.9 0-53.8-38.9-14.9-53.8 0-14.9 39 0 53.8m-9.5-26.1H24c.1 3 .6 5.9 1.5 8.7-.3-.1-.6-.2-.9-.4-.4-.2-.7.1-.8.1-.4 0-.9-.3-.9 0s.4.1.4.3-1 .2-1.1-.2-.3-.8-.4-.3-.5.4-.7.5c-.1.1-.2.3-.2.5s-.5.1-.5.4.3.4.4.7.4.5.2.6-.1-.1-.3 0 .9 3.1 1.1 3-.3-1-.3-1.4.1-.5.4-.7 1.1 1.2 1.4 1-.1-.4.2-.5 1.2 1.3 1.5.9c.2-.3.4.2.4.3.3.5.8.5 1.1 1.1s1 1.7 1.5 1.7.2-.5.4-.5.4.7.7 1.1c.2.3.5.5.9.6.7.9 1.5 1.8 2.3 2.7l-4.1 4.1c-6.3-6.4-9.9-15.1-10-24.3m33.1-8.3-.4.2c-.6.3-1.1.6-1.5 1l-4.1-4.1c2.4-2.1 5.4-3.4 8.5-3.5v5.8c-.7.1-1.4.2-2.1.5.2-.4.6-.8.6-.8s-.7.4-1 .9M48.2 40s0 .1 0 0v.2c0-.2-.1-.3-.2-.5-.1-.1-.2-.2-.3-.2h-.5l-.2.1h-1.4c-.2 0-.3 0-.3-.1-.1-.4.5-.1.9-1.3.1-.1.1-.3.2-.4l.1-.2.1-.1.1-.1c.2-.2.4-.2.6-.2h.2l.2.2.3.6c.1.1.2.1.2.2.2.1.3.2.4.3l.1.1v.1c.1.1.1.1.2.1h.4c.2-.1.2 0 .3 0v.1c0 .1 0 .1-.1.2 0 .1-.1.1-.1.2-.1.1-.2.2-.3.2-.2 0-.4-.1-.5-.1-.1 0-.2 0-.2.1v.5m-11 9.6c-.3-.5-.4-1.2-.4-1.8 0-.6-.2-1.2-.5-1.7-.1-.4-.2-.8-.2-1.2 0-.7-.6-.5-.6-.7s.5 0 .5-.2-.6-1-1.1-1.2-.3-.5-.3-.8c0-.3 0-.6-.2-.8-.1-.4 0-1.1.5-1.1.2 0 .5.2.8 0s.1-.8.1-1.3h2.8c0 .4.1.9.1 1.3-.2.1-.3.3-.2.4.1.1.2.2.3.1.5 2.9 1.8 5.6 3.8 7.8l-4.1 4.1c-.3-.3-.6-.7-.9-1.1v-.3c0-.7-.5-1.1-.7-1.7m-3.6-6.8c-.3-1.2-.4-2.5-.5-3.8h2.4c-.2.3-.7.6-.8.9s-.7 1.3-.3 1.7c.9 1-.2 1.4-.8 1.2m.5 14.8-.5.5-.7-.7c.4-.2.8-.1 1.2.2m6.2-25.7c-.1 0-.1.1-.2.1-.3.3-1.1.2-1 .5s2.2-.7 2.2-.5-.9.5-1.5.8-.8.8-1.8.8c-.5 0-.7.4-.9.7-.3.4-.5.8-.7 1.2 0 .6-.1 1.2-.4 1.8H33c.2-5.1 2.2-10 5.7-13.8l4.1 4.1c-1 1.4-1.9 2.8-2.6 4.3m3.8-3 3.6 3.6h-.4c-.4 0-.4-.3-.7-.3-.6.1-.7.3-.8.2-.4-.4-.9-.7-1.5-1-.7-.2-1.4-.2-2 .1-.1 0-.1.1-.2.1.7-.9 1.4-1.8 2-2.7M39 36c0 .4-.1.8-.1 1.2h-2.1c-.1-.3 0-.6.2-.9.2-.4.7-.6 1.2-.5.2 0 .5.1.8.2m1.8 4.7.2.3c.2.2.4.4.6.3s.7 0 .8 0c.3.1.5.3.7.5.2.3.6.1.9.3s.6.4.2.6.4.6.5.6.2-.2.2-.5c0-.1.2-.5.5-.4s1.2 1.2 1.5.8.1-.9.2-1.1c0-.1.1-.2.2-.2.3.5.5.9.9 1.3l-4.1 4.1c-1.7-1.8-2.9-4.1-3.3-6.6M44 26.4l-4-4.1c3.8-3.5 8.7-5.5 13.8-5.7v5.8c-3.6.1-7 1.5-9.8 4m-5.2-5.3L34.7 17c5.2-4.9 12-7.7 19.1-7.9v5.8c-5.6.2-11 2.4-15 6.2m-1.2 1.1c-3.8 4.1-6 9.4-6.2 15h-5.8c.2-7.1 3-13.9 7.9-19.1l4.1 4.1zm-6.2 16.6c0 1.1.1 2.1.3 3.2-.1 0-.1-.3-.4-.2s-1.4 2-1.9 2.8c-.4.7.2 2.2-.4 2.7-.6.2-1.2.3-1.8.3h-.1c-1-2.8-1.5-5.7-1.6-8.6l5.9-.2zm22.3 35.6c-9.1-.2-17.8-3.8-24.3-10.1l4.1-4.1c5.5 5.2 12.7 8.2 20.2 8.4v5.8zm0-7.4c-7.1-.2-13.9-3-19.1-7.9l.7-.7c.1.1.3.2.5.3.4.2.9.3 1.4.2.4-.1 1.2-.8 1.7-.8s1.3.2 1.8-.1-.3-1.3-.6-1.8c-.1-.1-.1-.2-.2-.3 3.9 3.3 8.9 5.2 14 5.3l-.2 5.8zm0-7.5c-5.1-.2-10-2.2-13.8-5.7l4.1-4.1c1.9 1.7 4.2 3 6.8 3.6-.9.4-1.3 1-1.2 1.5s-.6.8-.6 1.4.8 1 .9 1.6c.1.3.8.8 1.4 1.2.8.2 1.6.3 2.3.2l.1.3zm-.2-8c-.3-.2-.5.2-.9.4-2.8-.4-5.3-1.6-7.4-3.4l4.1-4.1c1.3 1 2.8 1.7 4.4 1.8 0 .2.2.4.2.8s-.3.6-.2.8 1 0 1.1-.3-.3-.5-.4-.8c-.1-.2-.1-.3-.2-.5h.3c.3 0 .6 0 .9-.1.1 0 .2-.1.2-.2s.1-.2.1-.3c0-.1.1-.1.1-.2l.1.1c.1.2.3.8.5.7s.3-1 .2-1.2c-.2-.3-.2-.6 0-.9 0-.1.1-.7.3-.6s0 .6 0 .8c0 .3.2.7.5.5.2-.1.4-.4.6-.3s-.5.3-.6.5.3.3.2.4-.2 0-.3.1.2.7 0 .8-.9.3-1.1.4-.4-.1-.3-.2 0-.5-.2-.5-.2.1-.2.3.2.5.2.6-.3.2-.5.3c-.2.3-.5.6-.8.8-.3.2-.9.2-.9.4s.3.2.4.3c.2.3.3.7-.1.9s-.9-.3-1.1-.2-.3.6-.4 1.2 1.1.8 1.7.5c.4-.2.3-.8.7-1s.3-.6.7-.5.3-.3.7-.3.4.3.9.4c.8.2.8.8.9.5s.2-.5-.4-.7-.9-.9-.4-.7c.6.3 1.1.3 1.2.6s.7.2.8.5c.1.5.5 0 .2-.3s-.2-.4 0-.6.3.1.6-.3-.1-.3-.2-.5 0-1.3.4-1.1.8-.1.6-.2.1-.7.2-.7 0 .4.1.5 1.1-.3 1.2.2-.7.8-.9.8c-.4 0-.7.4-1 .8s-.6.5-.4.9.6.3 1 .1.7-.5.9-.6c.4-.2.7 1 .5 1.2s-.6.3-.8.5c-.6.3-1.2.6-1.9.6-.4.1-.4.2-.5.6s-1.9.1-2.3.1.3-.9-.3-.8l-1.8.3c-.1 0-.7.5-1.2.1m5.3 9.3c.5.2 1 .6 1.3 1 .3.5.4.7.2 1.2-.5.9-.3 1.5.7 1.8.6.2.8.8 1.2 1.2-2.2.6-4.5.9-6.8 1v-5.8c1.1-.1 2.3-.2 3.4-.4m-3.4-1.2v-.7c1.3-.2 1 .6 1.9.3.3-.1.6 0 .8.2-.9 0-1.8.1-2.7.2m0 14.9v-5.9c3-.1 6-.6 8.9-1.6.1.1.2.1.3.1.4 0 .8-.2 1.1-.4 1-.4 1.9-.9 2.7-1.5 2.6-1.3 5.1-3.1 7.2-5.1l4.1 4.1c-6.5 6.4-15.2 10-24.3 10.3m16.2-52.3 1.4-1.4c.4.4.8.7 1.4.8.5.1.7.3.8.8s.6.7 1.1.8.8.7 1.2.7 1.7 1.8 2.2 2.4c.3.3.7.8 1 .4s.3-.3.5-.4c1.5 3.4 2.4 7.2 2.5 10.9h-5.8c0-1.3-.2-2.6-.5-3.9.2-.4.3-.8.3-1.3 0-.4-.4-.6-.7-.3-.2-.8-.5-1.5-.8-2.2-.1-.4-.2-.9-.3-1.3 0-.1-.2-.2-.4-.4-.2-.4-.3-.7-.5-1 .3-.2.4-.7 0-.6-.6.1-.2-.3-.4-.5s-.2 0-.3.1c-.8-1.2-1.6-2.3-2.6-3.4v-.1c-.2 0-.2-.1-.1-.1m3.5 33.9c-.2-.4-.3-.9-.5-1.3-.1-.4-.9-.4-.9-.2 0 .4 0 .8-.1 1.2v.1l-2.1-2.1c3.8-4.1 6-9.4 6.2-15h5.8c-.2 7.1-3 13.9-7.9 19l-.3-.3c.1-.4 0-.9-.2-1.4m-4.8 4c.3-.5.9-1.4 1.2-1.9s-.8-1.2-1.4-1.4-.6-.5-.6-1c.3-.2.6-.5.9-.8l4.1 4.1c-1.4 1.3-2.8 2.4-4.4 3.4-.1-.2.6-.9.8-1.2s-.8-.7-.6-1.2m2.5-23.9c-.5-.7.2-.8.9-1.1.4-.2.9.1.9-.1s.2-.6.4-.7c.2-.1.5-.3.6-.5 0 .2.1.4.1.6-.2.4-.3.7-.3 1.1 0 .3 0 .7.3 0 0-.1.1-.1.1-.2.2.7.2 1.3.2 1.9h-4.3v-.1c.3-.5 1.4-.4 1.1-.9m.8-8.2s0 .1-.1.1c-.1.1-.6-.7-.6-.1s.2.8.6.9.2.3.5.4c.1 0 .3.1.4.2.5 1.1.8 2.2 1.1 3.4-.2.1-.3.2-.4.3-.2.2-.1.6-.3.9-.3.5-.4.8-1.2.6-.5-.2-.1-.8 0-1.3s.3-.4.3-.7-1-1.4-1.5-1c-.5.4-.4.8-.8 1.2-.2.2-.4.2-.7 0s-.4-.4-.3-.6-.7-1.1-1-1.5c-.4-.5-1-.8-1.6-.8-.5-.9-1.2-1.8-1.9-2.6l4.1-4.1c1.4 1.5 2.5 3 3.4 4.7m-6.9 2.8-.2.3c-.1.2-.6-.2-.7-.1s.7 1.1-.1.8-.3-.3-.3-.6-.7-.5-.3-.7 0-.5.4-.6.3-.5-.2-.6-.4 1.1-.7.9c-.3-.1-.6-.1-.9-.1l1.4-1.4c.2.1.3.1.5.1.2.8.7 1.4 1.1 2m-1.6 20.3c.6.1 1.3.2 1.9.4.4.2.7.6 1 .1.6-.9 1-1.9 1.2-3 .2-1.5-.1-2-.3-2s-.6.4-1 .4c-.2 0-.2.4-.2.7s-.4.6-.5.4-.3-.1-.2.1-.8.1-1.2-.1c-.6-.3.7-.3 1.3-.8.5-.4 1-.9 1.5-1.4.3-.5.3-1.1.8-1.5s1.3-.3 1.4-.9.2-.5.5-.4 3.1-.1 3.1-1c0-.4-.6-.9-1.2-1-.4 0-.5-.8-.7-1.2-.2-.4-.4-.8-.7-1.2H76c-.2 5.1-2.2 10-5.7 13.8l-.1-.1V52c.1-.8-.5-2.1-.7-1.9s0 .2-.6 1.1c-.2.3-.5.8-.9.8s-.4-.2-1-.1c-.5.1-1.1.1-1.6 0-.9-.3-1.8-.7-2.7-1.3.1-.1.4.1.4-.2s1.6.6 2 .7m15.7 12.1-4.1-4.1c5.2-5.5 8.2-12.7 8.4-20.2H91c-.2 9.1-3.8 17.7-10.2 24.3m10.2-26h-5.9c-.1-4.3-1.1-8.5-3-12.4l.1-.1c.4-.4-1.9-3.4-2.3-3.7s-.8-.8-1.3-1.3c-.8-.8-1.6-1.7-2.2-2.6l4.3-4.3c6.5 6.6 10.1 15.3 10.3 24.4M55.4 1.6c9.1.2 17.8 3.8 24.4 10.1l-4 4c-.2-.1-.4-.2-.3-.4.2-.3-.3-.3-.4-1.1-.2-.8-.8-1.5-1.5-1.9-.5-.3-.8-.7-1.3-.9s-1.5-.8-2-.6c-.3.1-.7.2-1 .2-4.3-2.3-9-3.5-13.8-3.6l-.1-5.8zm0 7.5c4.3.1 8.4 1.2 12.3 3.1.1.6.4 1.3.8 1.8.2.5.5.9.8 1.4.3.3.1.9.2 1.4 0 .2.2.4.3.6v.8c0 .1.4.1.7-.1s.5-.6.9-.5.9.9 1.2 1.4l-1.9 1.9c-.2-.4-.4-.9-.3-.9s.3.1.4.1c.4 0-.3-.3-.3-.4-.3-.3-.3-.7-.7-1s-1-.1-1.2-.5c-.4-.7-.9-1.3-1.6-1.8-.1 0 .8 1.1.5 1.3s-1.4-.7-1.5-.5 1.2.7 1.6 1.1c.2.2.6.8 1 1.3-3.8-2.9-8.4-4.5-13.2-4.7V9.1zm0 7.4c5.1.2 10 2.2 13.8 5.7l-4.1 4.1c-2.7-2.4-6.1-3.8-9.7-4v-5.8zm0 7.5c3.2.2 6.2 1.4 8.5 3.5l-.2.2-.2-.1c-.5-.2-1.5.8-1.3.9s.6-.4.8-.3h.1L61.4 30c-.5.2-1 .6-1 .9v.1l-.6.6-.3-.3c-.5-.4-1-.7-1.6-.9.3-.2.4-.5.5-.9 0-.6-.2-.4-.5-.1s-.6.4-.8.7c-.5-.2-1.1-.3-1.6-.3V24zm-.7 7.4c.1.2 0 .4-.1.5-.2.2-.8-.5-.9.1-.2.6.4.3.4.4.3.4.7.6 1.2.7.4 0 1 0 1 .4 0 .2.5.2.6.4 0 .3.3.8.5.7.2-.1.5.1.6.3.1.2 0 .3-.1.5-.3.3.3.2.4.8s-.5.2-.6.6c-.2.3-.4.5-.6.8-.1.1.1.3.2.2s.3-.4.6-.4.6 1.1.9 1.2.2.5.3.6-.5 0-.4.2.7.3.7.6c-.1.3-.3.6-.7.6-.3 0-.8-.7-.8-.5s.2.8.5.8 1-.3.7.1-.2 1-.4 1-.3 0-.1.3c.1.3 0 .6-.2.9-.2.2-.7 0-.7-.1s.6-.1.6-.4-.3-.4-.9-.2c-.3.1-.4-.1-.6-.1s-.8.7-.8.8v.5c0 .4-.1.7-.3 1-.4.1-.7.1-1.1.1-1.6 0-3.2-.7-4.4-1.7.2-.1.5-.2.8-.2.3.1.4-.1.6-.2s.7.2 1 0 1-1.5.9-1.8.7-.8.6-.9-.2.1-.2 0 .2-.1 0-.5-.5-.2-.7-.2c-.3-.2-.8-.3-.9-.2s-.4-.2-.5-.1c-.1 0-.3.1-.3.3-.1.2.1.4.1.6-.1.4-.7.7-.7 1s-.3.1-.4.2 0 .3-.2.3-.5.5-.7.9c-.3-.4-.6-.9-.9-1.3.2-.1.4-.2.5-.1.3.2 1.5-1.9 1.3-2.5s-.5-.2-.8-.1-.3-.2-.2-.3 1.4-.1.7-.5c-.3-.2-1.1-.2-1-.5s.5 0 .6 0c.5.2.8-.8 1.1-.8.5 0 .3-1-.2-.7s-.7.2-.9.5-.7.7-.7.3c0-.2 1.1-.8 1.3-1.1.2-.2.4-.5.5-.8.1-.3 1.5-.5 1.8-.7.2-.2.4-.5.4-.8 0-.3-.4-.2-.5-.4s.5 0 .5-.3-.5 0-.7-.2c0-.1 0-.1.1-.2.9-.3 1.5-.4 2.2-.4h.2M53.8 1.6v5.8c-7.5.2-14.7 3.2-20.2 8.4l-4.1-4.1C36 5.4 44.7 1.8 53.8 1.6M28.2 12.9l4.1 4.1c-5.2 5.5-8.2 12.7-8.4 20.2h-5.8c.3-9.1 3.9-17.8 10.1-24.3" />
                    </svg>
                </div>
                <img src="/images/westend_logo.png" alt="" class="h-24">
            </div>
        </section>
    </div>
</template>

<style scoped>
div.facility:nth-child(even) {
    flex-direction: row-reverse;
    text-align: end !important;
}

div.facility:nth-child(odd) {
    text-align: start !important;
}

div.facility:nth-child(odd)>div.images {
    justify-content: end;
}

/* div.images>img {
    position: absolute;
}

div.images>img:nth-child(1) {
    top: 0;
    left: 0;
}

div.images>img:nth-child(2) {
    top: -2vh;
    left: 2vw;
}

div.images>img:nth-child(3) {
    top: -4vh;
    left: 4vw;
} */
</style>
<script setup>
definePageMeta({
    layout: 'default',
})



const coreValues = ref([
    { "title": "Compassionate", "description": "", "image": "./images/heart.png" },
    { "title": "Accountability", "description": "", "image": "./images/display.png" },
    { "title": "Quality Care", "description": "", "image": "./images/healthcare.png" },
    { "title": "Accessibility", "description": "", "image": "./images/distributed.png" },
    { "title": "Integrity", "description": "", "image": "./images/honesty.png" },
]);

const facilities = ref([
    {
        "title": "OB-GYN with Pediatric Exam",
        "description": "This clinic has the instruments, sterilizers and imaging to support most OB-Gyn and pediatric care visits. Everything from well visits for pregnancy to pediatric visits with vaccinations, even emergency C-sections are supported",
        "images": [
            '/images/3.jpg'
        ]
    }, {
        "title": "General Exam With X-Ray & Telemedicine",
        "description": "The telemedical capabilities in our general exam unit are reimbursed by Medicare. This creates a perfect revenue generator for the widest array of CODE 16 exams and treatments that are fully reimbursable.",
        "images": ['/images/3.jpg']
    }, {
        "title": "DENTAL OFFICE WITH 2 DENTAL SURGERY CHAIRS",
        "description": "Dental services in a medically compliant mobile platform with sterile cleaning equipment make four handed dental surgery easy. Options include our solid base dental chairs or our more mobile deployable dental units in a pelican case.",
        "images": ['/images/3.jpg']
    }
]);
</script>