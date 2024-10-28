const { createApp, ref, computed } = Vue;

const app = createApp({
    setup() {
        const cart = ref({})
        const premium = ref(false)
        function updateCart(id) {
            if (cart.value[id]) {
                cart.value[id]++
            } else {
                cart.value[id] = 1
            }
        }
        function removeFromCart(id) {
            if (id && cart.value[id]) {
                cart.value[id]--;
                if (cart.value[id] === 0) {
                    delete cart.value[id];
                }
            }
        }
        return {
            cart,
            premium,
            updateCart,
            removeFromCart
        }
    }
})

app.component('product-display', productDisplay)

app.mount('#app')
