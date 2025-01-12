const productDisplay = {
    template:
        /*html*/
        `
    <div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img :src="image">
            </div>
        </div>
        <div class="product-info">
            <h1>{{title}}</h1>
            <p v-if="inventory > 10">In Stock</p>
            <p v-else-if="inventory <= 10 && inventory > 0">Almost out of Stock</p>
            <p v-else>Out of Stock</p>
            <p>Shipping: {{shipping}}</p>
            <ul>
                <li v-for="detail in details">{{detail}}</li>
            </ul>
            <div v-for="(variant,index) in variants" :key="variant.id" @mouseover="updateVariant(index)"
                class="color-circle" :style="{backgroundColor: variant.color}">
            </div>
            <button class="button" :disabled='!inStock' @click="addToCart" :class="{disabledButton: !inStock}">Add To Cart</button>
            <button class="button" @click="removeFromCart" :disabled="cart === 0">Remove From Cart</button>
        </div>
        <review-list v-if="reviews.length" :reviews="reviews"></review-list>
        <review-form @review-submitted="addReview"></review-form>
    </div>
    `,
    props: {
        premium: Boolean,
        cart: Object
    },
    setup(props, { emit }) {
        const { ref, computed } = Vue;
        const shipping = computed(() => {
            return props.premium ? 'Free' : 30;
        });
        const reviews = ref([]);
        const product = ref('Boots');
        const brand = ref('SE 331');
        const inventory = ref(100);
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ]);
        const variants = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
        ]);
        const selectedVariant = ref(0);

        function updateVariant(index) {
            selectedVariant.value = index;
        }

        const image = computed(() => {
            return variants.value[selectedVariant.value].image;
        });

        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity > 0;
        });

        function addToCart() {
            const selectedId = variants.value[selectedVariant.value].id;
            if (selectedId) {
                emit('add-to-cart', selectedId);
            }
        }

        function removeFromCart() {
            const selectedId = variants.value[selectedVariant.value].id;
            if (selectedId) {
                emit('remove-from-cart', selectedId);
            }
        }

        const title = computed(() => {
            return `${brand.value} ${product.value}`;
        });

        function addReview(review) {
            reviews.value.push(review);
        }

        return {
            title,
            image,
            inStock,
            inventory,
            details,
            variants,
            addToCart,
            removeFromCart,
            updateVariant,
            addReview,
            shipping,
            reviews
        };
    }
};
