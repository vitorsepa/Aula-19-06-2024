let topMod = 0;
let leftMod = 0;

$("body").on("mousemove", webHandler);

function webHandler(event){
    let button = $('#no').position();
    let buttonCenter = {
        x: button.left + 10,
        y: button.top + 10
    }

    let distance = Math.sqrt(Math.pow(event.pageX - buttonCenter.x, 2))
    if (distance < 80){
        var angle = calculateAngle (event, buttonCenter, distance)
            leftMod += 2 * angle.cos * (event.pageX < buttonCenter.x ? 1 : -1)
            topMod += 2 * angle.sin * (event.pageY < buttonCenter.y ? 1 : -1)
            $('#no').css({top: topMod, left: leftMod, position: 'relative'})
    }
}

function calculateAngle(mouse, center, distance){
    let sin = Math.abs(mouse.pageY - center.y)/distance
    let cos = Math.abs(mouse.pageX - center.x) / distance
    return {sin: sin, cos: cos}
}