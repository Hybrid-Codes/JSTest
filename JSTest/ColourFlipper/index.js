function change () {
    let red =  Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.random(Math.random() * 256);
    let colour = "rgb(" + red + "," + green + "," + blue +")";
    document.getElementById("colourFlipper").style.backgroundColor = colour;
}

