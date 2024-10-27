const { createApp, ref, computed } = Vue;

createApp({
    setup() {
        const product = ref('Boots');
        const description = ref('This is a Boots');
        
        const productLink = ref('https://www.camt.cmu.ac.th');
        
        const inventory  = ref(1);
        const onSale = ref(true);
        const brand = ref('SE 331')
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ]);

        const variants = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
        ]);
        const selectedVariant = ref(0)

        const sizes = ref([
            { id: 1001, size: 'S' },
            { id: 1002, size: 'M' },
            { id: 1003, size: 'L' }
        ]);
        
        const cart = ref(0);

        const title = computed(() =>{
            return brand.value + ' ' + product.value
        })

        const image = computed(() => {
            return variants.value[selectedVariant.value].image;
        });
        
        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity;
        });

        const saleMessage = computed(() => {
            return onSale.value ? `${brand.value} ${product.value} is on sale` : '';
        });
        
        function addToCart() {
            cart.value +=1
        }
        function updateImage(variantImage){
            image.value = variantImage
        }
        function toggleInStock() { 
            if (inStock.value === true) {   
                inStock.value = false
            } else {
                inStock.value = true
            }
        }
        
        function updateVariant(index){
            selectedVariant.value = index;
        }
        
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
            sizes,
            cart,
            brand,
            title,
            saleMessage,
            addToCart,
            updateImage,
            toggleInStock,
            updateVariant
        };
    }
}).mount('#app');
