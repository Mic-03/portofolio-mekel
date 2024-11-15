import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/index.css',
                'resources/css/breaker-style-four.css',
                'resources/css/breaker-style-one.css',
                'resources/css/breaker-style-three.css',
                'resources/css/breaker-style-two.css',
                'resources/css/color-red.css',
                'resources/css/color-blue.css',
                'resources/css/color-green.css',
                'resources/css/color-malt.css',
                'resources/css/color-purple.css',
                'resources/css/color-orange.css',
                'resources/js/index.js',
                'resources/js/jquery.min.js',
                'resources/js/particles.js',
                'resources/js/particles.min.js'
            ],
            refresh: true,
        }),
    ],
});
