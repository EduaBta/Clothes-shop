function addToCart(event) {
    const button = event.target;
    const card = button.closest('.card');

    const animation = document.createElement('div');
    animation.classList.add('cart-animation');
    document.body.appendChild(animation);

    animation.addEventListener('animationend', () => {
        animation.remove();

        for (let i = 0; i < 5; i++) {
            const explosion = document.createElement('div');
            explosion.classList.add('explosion');
            explosion.style.top = `calc(50% - ${i * 10}px)`;
            explosion.style.left = `calc(50% + ${i * 10}px)`;
            document.body.appendChild(explosion);

            explosion.addEventListener('animationend', () => {
                explosion.remove();
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('.addtocart');
    cartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
});