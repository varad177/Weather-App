
const weather = async (city) => {


    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c15630ab9dmsh811b42e0068f62ap1cc5c9jsnc2f3abffc7ec',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        console.log(result);
        console.log(result.temp);

        document.getElementById('Cloud_pct').innerHTML = result.cloud_pct
        document.getElementById('Temp').innerHTML = result.temp
        document.getElementById('Temp2').innerHTML = result.temp
        document.getElementById('Feels_like').innerHTML = result.feels_like
        document.getElementById('Humidity').innerHTML = result.humidity
        document.getElementById('Humidity2').innerHTML = result.humidity
        document.getElementById('Min_temp').innerHTML = result.min_temp
        document.getElementById('Max_temp').innerHTML = result.max_temp
        document.getElementById('Wind_speed').innerHTML = result.wind_speed
        document.getElementById('Wind_speed2').innerHTML = result.wind_speed
        // document.getElementById('Wind_degrees').innerHTML = result.wind_degrees
        document.getElementById('Sunrise').innerHTML = result.sunrise
        document.getElementById('Sunset').innerHTML = result.sunset

    } catch (error) {
        console.error(error);
    }
}

// const getcity = () => {
//     //  e.preventDefault()
//     const c = document.getElementById('searchCity').value
//     weather(c)
//     document.getElementById('headcity').innerHTML = c

// }

const clk = document.getElementById('submitcity')
// const loc = document.getElementById('loc').click()

const getLoc = async () =>{

        const res = await fetch('https://ipapi.co/json')
    //    const jsres = res.json()
       res.resolve("PromiseState").then((value) => {
           console.log(value);
           // Expected output: 123
         });
        //   console.log(res.json());

        // const city = jsres.parse
       
        
    }

if(loc){
    
    
    getLoc()

    console.log(res);

    // weather()
    // document.getElementById('headcity').innerHTML = c


}

 clk.addEventListener("click" , (e)=>{
     e.preventDefault()
    const c = document.getElementById('searchCity').value
    weather(c)
    document.getElementById('headcity').innerHTML = c
 })

const getcity1 = () => {
   c = "delhi"
    weather("delhi")
    document.getElementById('headcity').innerHTML = c
}
const getcity2 = () => {
    c = "mumbai"
    weather("mumbai")
    document.getElementById('headcity').innerHTML = c
}
const getcity3 = () => {
    c = "pune"
    weather("pune")
    document.getElementById('headcity').innerHTML = c
}


//dark mode 

darkmode =() =>{
    // e.preventDefault()
    document.getElementById('dmode').classList.toggle('mode')
    document.getElementById('dmode2').classList.toggle('mode2')
    document.getElementById('dmode3').classList.toggle('mode2')

}

