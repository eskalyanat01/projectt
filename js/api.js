const london = document.getElementById("London")
const madrid = document.getElementById("Madrid")
const newyork = document.getElementById("NewYork") // Fixed the ID for New York
const shymkent = document.getElementById("Shymkent")
const lipetsk = document.getElementById("Lipetsk")
const odessa = document.getElementById("Odessa")

async function Api() {
    const respons_london = await fetch('https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&hourly=temperature_2m')
    const respons_madrid = await fetch('https://api.open-meteo.com/v1/forecast?latitude=40.4165&longitude=-3.7026&hourly=temperature_2m')
    const respons_newyork = await fetch('https://api.open-meteo.com/v1/forecast?latitude=40.7143&longitude=-74.006&hourly=temperature_2m')
    const respons_shymkent = await fetch('https://api.open-meteo.com/v1/forecast?latitude=42.3&longitude=69.6&hourly=temperature_2m')
    const respons_lipetsk = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.6031&longitude=39.5708&hourly=temperature_2m')
    const respons_odessa = await fetch('https://api.open-meteo.com/v1/forecast?latitude=46.4857&longitude=30.7438&hourly=temperature_2m')

    const data_london = await respons_london.json()
    const data_madrid = await respons_madrid.json()
    const data_newyork = await respons_newyork.json()
    const data_shymkent = await respons_shymkent.json()
    const data_lipetsk = await respons_lipetsk.json()
    const data_odessa = await respons_odessa.json()

    return [data_london, data_madrid, data_newyork, data_shymkent, data_lipetsk, data_odessa]
}

async function output() {
    try {
        let out = await Api()

        // Extract the first available temperature value
        london.textContent = `Air Temperature: ${out[0].hourly.temperature_2m[0]} \u00B0C`
        madrid.textContent = `Air Temperature: ${out[1].hourly.temperature_2m[0]} \u00B0C`
        newyork.textContent = `Air Temperature: ${out[2].hourly.temperature_2m[0]} \u00B0C`
        shymkent.textContent = `Air Temperature: ${out[3].hourly.temperature_2m[0]} \u00B0C`
        lipetsk.textContent = `Air Temperature: ${out[4].hourly.temperature_2m[0]} \u00B0C`
        odessa.textContent = `Air Temperature: ${out[5].hourly.temperature_2m[0]} \u00B0C`
    }
    catch(error) {
        console.log("Error:", error)
    }
    finally {
        setTimeout(output, 10000) // Refresh every 10 seconds
    }
}

output()
