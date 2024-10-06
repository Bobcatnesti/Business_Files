document.addEventListener('wheel', function(event) {
    if (event.ctrlKey) {
        event.preventDefault(); // Prevent zooming with Ctrl + Mouse Wheel
    }
});

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && (event.key === '+' || event.key === '=' || event.key === '-')) {
        event.preventDefault(); // Prevent zooming with Ctrl + Plus/Minus
    }
});

// Prevent zooming on touch devices
document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault(); // Prevent zooming with pinch gestures
    }
});

document.addEventListener('gesturestart', function(event) {
    event.preventDefault(); // Prevent zooming with gesture
});
