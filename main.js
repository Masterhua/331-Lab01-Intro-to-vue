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
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234, color: 'green' },
            { id: 2235, color: 'blue' }
        ]);
        
        const sizes = ref([
            { id: 1001, size: 'S' },
            { id: 1002, size: 'M' },
            { id: 1003, size: 'L' }
        ]);

        return {
            product,
            description,
            image,
            productLink,
            inStock,
            inventory,
            onSale,
            details,
            variants,
            sizes
        };
    }
}).mount('#app');
