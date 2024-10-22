const { createApp, ref } = Vue;

createApp({
    setup() {
        const product = ref('Boots');
        const description = ref('This is a Boots');
        const image = ref('./assets/images/socks_green.jpg');
        const productLink = ref('https://www.camt.cmu.ac.th');
        const inStock = ref(false);
        const inventory  = ref(1);
        const onSale = ref(true);
        return {
            product,
            description,
            image,
            productLink,
            inStock,
            inventory,
            onSale
        };
    }
}).mount('#app');
