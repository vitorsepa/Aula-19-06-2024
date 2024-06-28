document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById('nao');
    let topMod = 0;
    let leftMod = 0;

    function moveButton(event) {
        let buttonRect = button.getBoundingClientRect();
        let mouseX, mouseY;

        if (event.type.startsWith('touch')) {
            mouseX = event.touches[0].clientX;
            mouseY = event.touches[0].clientY;
        } else {
            mouseX = event.clientX;
            mouseY = event.clientY;
        }

        let buttonCenter = {
            x: buttonRect.left + buttonRect.width / 2,
            y: buttonRect.top + buttonRect.height / 2
        };

        let distance = Math.sqrt(Math.pow(mouseX - buttonCenter.x, 2) + Math.pow(mouseY - buttonCenter.y, 2));

        if (distance < 50) {
            topMod += (Math.random() - 0.5) * 200;
            leftMod += (Math.random() - 0.5) * 200;

            topMod = Math.max(0, Math.min(window.innerHeight - buttonRect.height, topMod));
            leftMod = Math.max(0, Math.min(window.innerWidth - buttonRect.width, leftMod));

            button.style.position = "absolute";
            button.style.top = topMod + "px";
            button.style.left = leftMod + "px";
        }
    }

    document.body.addEventListener("mousemove", moveButton);
    document.body.addEventListener("touchmove", moveButton);
});
