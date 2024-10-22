const { createApp, ref } = Vue;

createApp({
    setup() {
        const product = ref('Boots');
        const description = ref('This is a Boots');
        return {
            product,
            description
        };
    }
}).mount('#app');
