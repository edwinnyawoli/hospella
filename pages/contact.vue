<template>
    <div class="p-8 pt-24 md:px-24 xyz">
        <h1 class="text-3xl md:text-4xl font-semibold my-6">Let's get in touch</h1>
        <div class="flex flex-col">
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">First name</span>
                </label>
                <input type="text" placeholder="First name" class="input input-bordered w-full max-w-xs" />
            </div>
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Last name</span>
                </label>
                <input type="text" placeholder="Last name" class="input input-bordered w-full max-w-xs" />
            </div>
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Email</span>
                </label>
                <input type="text" placeholder="abc@example.com" class="input input-bordered w-full max-w-xs" />
            </div>
            <textarea placeholder="Your message"
                class="textarea textarea-bordered textarea-md w-full max-w-xs my-6"></textarea>

            <button
                class="btn rounded-3xl bg-green-700 text-white md:w-64 hover:last:translate-x-1 hover:bg-green-600 ">Send
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
    </div>
</template>

<style>
.xyz {
    background-color: #ffffff;
    opacity: 1;
    background-image: linear-gradient(135deg, rgba(249, 249, 249, 1) 25%, transparent 25%), linear-gradient(225deg, rgba(249, 249, 249, 1) 25%, transparent 25%), linear-gradient(45deg, rgba(249, 249, 249, 1) 25%, transparent 25%), linear-gradient(315deg, rgba(249, 249, 249, 1) 25%, #ffffff 25%);
    background-position: 40px 0, 40px 0, 0 0, 0 0;
    background-size: 80px 80px;
    background-repeat: repeat;
}
</style>