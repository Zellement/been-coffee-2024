<template>
    <div class="layout">
        <site-header />
        <client-only>
            <div
                class="pointer-events-none fixed inset-0 -z-50 flex h-full w-full opacity-100 lg:opacity-70"
                aria-hidden="true"
            >
                <div
                    class="polygon-clip-mask--bl h-full w-full opacity-10 dark:opacity-40"
                    style="
                        background-image: url('/pattern.svg');
                        background-size: cover;
                    "
                ></div>
            </div>
        </client-only>
        <main>
            <slot />
        </main>
        <site-footer />
    </div>
</template>

<script setup lang="ts"></script>
