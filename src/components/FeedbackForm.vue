<script setup>
import { ChevronDownIcon } from '@heroicons/vue/16/solid';
</script>

<template>
  <form class="bg-white p-8 rounded-lg shadow-md">
    <h2 class="text-xl text-center font-semibold text-gray-900">
      Share Your Feedback
    </h2>
    <p class="mt-1 text-sm/6 text-center text-gray-600">
      We are always looking to improve
    </p>

    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <!-- Name -->
      <div class="col-span-full">
        <label for="name" class="block text-sm/6 font-medium text-gray-900"
          >Your Name</label
        >
        <div class="mt-2">
          <input
            type="text"
            name="name"
            id="name"
            autocomplete="name"
            class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            placeholder="What should we call you?"
          />
        </div>
      </div>

      <!-- Email -->
      <div class="col-span-full">
        <label for="email" class="block text-sm/6 font-medium text-gray-900"
          >Your Email</label
        >
        <div class="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autocomplete="email"
            class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            placeholder="name@example.com"
          />
        </div>
      </div>

      <!-- Category -->
      <div class="col-span-full">
        <label for="category" class="block text-sm/6 font-medium text-gray-900"
          >Category</label
        >
        <div class="mt-2 grid grid-cols-1">
          <select
            id="category"
            name="category"
            autocomplete="category-name"
            class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          >
            <option value="">Please select</option>
            <option value="bug">Bug Report</option>
            <option value="feature">Feature Request</option>
            <option value="improvement">Improvement</option>
            <option value="other">Other</option>
          </select>
          <ChevronDownIcon
            class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            aria-hidden="true"
          />
        </div>
      </div>

      <!-- Rating -->
      <div class="col-span-full">
        <fieldset>
          <legend class="text-sm/6 font-medium text-gray-900">
            How was your experience?
          </legend>
          <div class="mt-4 grid grid-cols-1 sm:grid-cols-5 gap-3">
            <!-- 1 -->
            <div>
              <input
                id="rating-1"
                name="rating"
                type="radio"
                value="1"
                class="sr-only peer"
              />
              <label
                for="rating-1"
                class="flex items-center justify-center outline-1 outline-gray-300 p-3 rounded-md text-2xl transition-all hover:scale-110 hover:outline-indigo-600 peer-checked:outline-indigo-600 peer-checked:outline-2"
                >😔</label
              >
            </div>

            <!-- 2 -->
            <div>
              <input
                id="rating-2"
                name="rating"
                type="radio"
                value="2"
                class="sr-only peer"
              />
              <label
                for="rating-2"
                class="flex items-center justify-center outline-1 outline-gray-300 p-3 rounded-md text-2xl transition-all hover:scale-110 hover:outline-indigo-600 peer-checked:outline-indigo-600 peer-checked:outline-2"
                >😐</label
              >
            </div>

            <!-- 3 -->
            <div>
              <input
                id="rating-3"
                name="rating"
                type="radio"
                value="3"
                class="sr-only peer"
              />
              <label
                for="rating-3"
                class="flex items-center justify-center outline-1 outline-gray-300 p-3 rounded-md text-2xl transition-all hover:scale-110 hover:outline-indigo-600 peer-checked:outline-indigo-600 peer-checked:outline-2"
                >😊</label
              >
            </div>

            <!-- 4 -->
            <div>
              <input
                id="rating-4"
                name="rating"
                type="radio"
                value="4"
                class="sr-only peer"
              />
              <label
                for="rating-4"
                class="flex items-center justify-center outline-1 outline-gray-300 p-3 rounded-md text-2xl transition-all hover:scale-110 hover:outline-indigo-600 peer-checked:outline-indigo-600 peer-checked:outline-2"
                >😃</label
              >
            </div>

            <!-- 5 -->
            <div>
              <input
                id="rating-5"
                name="rating"
                type="radio"
                value="5"
                class="sr-only peer"
              />
              <label
                for="rating-5"
                class="flex items-center justify-center outline-1 outline-gray-300 p-3 rounded-md text-2xl transition-all hover:scale-110 hover:outline-indigo-600 peer-checked:outline-indigo-600 peer-checked:outline-2"
                >🤩</label
              >
            </div>
          </div>
        </fieldset>
      </div>

      <!-- Message -->
      <div class="col-span-full">
        <label for="message" class="block text-sm/6 font-medium text-gray-900"
          >Message</label
        >
        <div class="mt-2">
          <textarea
            name="message"
            id="message"
            rows="3"
            class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            placeholder="Share your thoughts..."
          ></textarea>
        </div>
      </div>

      <!-- Notify -->
      <div class="col-span-full space-y-6">
        <div class="flex gap-3">
          <div class="flex h-6 shrink-0 items-center">
            <div class="group grid size-4 grid-cols-1">
              <input
                id="notify"
                name="notify"
                type="checkbox"
                checked=""
                class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
              />
              <svg
                class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  class="opacity-0 group-has-checked:opacity-100"
                  d="M3 8L6 11L11 3.5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  class="opacity-0 group-has-indeterminate:opacity-100"
                  d="M3 7H11"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div class="text-sm/6">
            <label for="notify" class="text-gray-900">
              Email me about updates
            </label>
          </div>
        </div>
      </div>

      <!-- Submit -->
      <div class="col-span-full">
        <button
          type="submit"
          class="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Send Feedback
        </button>
      </div>
    </div>
  </form>
</template>
