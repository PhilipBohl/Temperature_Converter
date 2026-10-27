function Convert(){
    const textbox = document.getElementById("textbox");
    const toFahrenheit = document.getElementById("toFahrenheit");
    const toCelsius = document.getElementById("toCelsius");
    const result = document.getElementById("result");

    let temperature = parseFloat(textbox.value);

    if (isNaN(temperature)) {
        result.textContent = "Please enter a valid number.";
        return;
    }

    if (toFahrenheit.checked) {
        temperature = (temperature * 9/5) + 32;
        result.textContent = temperature.toFixed(2) + " °F";
    } else if (toCelsius.checked) {
        temperature = (temperature - 32) * 5/9;
        result.textContent = temperature.toFixed(2) + " °C";
    } else {
        result.textContent = "Please select a conversion option.";
    }
}