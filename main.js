const { createApp, ref } = Vue;

const app = createApp({
    setup() {
        const cart = ref({});
        const premium = ref(false);
        const reviews = ref([]);

        function updateCart(id) {
            if (cart.value[id]) {
                cart.value[id] += 1;
            } else {
                cart.value[id] = 1;
            }
        }

        function removeFromCart(id) {
            if (cart.value[id]) {
                cart.value[id] -= 1;
                if (cart.value[id] === 0) {
                    delete cart.value[id];
                }
            }
        }

        function addReview(review) {
            reviews.value.push(review);
        }

        return {
            cart,
            premium,
            reviews,
            updateCart,
            removeFromCart,
            addReview
        };
    }
});

app.component('product-display', productDisplay);
app.component('review-form', reviewForm);
app.component('review-list', reviewList);

app.mount('#app');
