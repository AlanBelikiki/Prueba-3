// Animación de la puerta al hacer clic
const door = document.getElementById('door');

door.addEventListener('click', function() {
    gsap.to('#door', { rotation: 0, duration: 0.5, ease: 'back.out(2)' });
});
