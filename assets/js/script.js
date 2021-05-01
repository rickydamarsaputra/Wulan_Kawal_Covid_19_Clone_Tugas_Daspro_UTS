const COVID_API_URL = "https://covid19.mathdro.id/api/countries/indonesia";
const covidCase = document.querySelector(".covid_case");
const covidCare = document.querySelector(".covid_care");
const covidRecover = document.querySelector(".covid_recover");
const covidDead = document.querySelector(".covid_dead");
const lastCovidUpdate = document.querySelector(".last_update");

const formatNumber = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

fetch(COVID_API_URL)
	.then((res) => res.json())
	.then((data) => {
		covidCase.innerText = formatNumber(data.confirmed.value);
		covidRecover.innerText = formatNumber(data.recovered.value);
		covidDead.innerText = formatNumber(data.deaths.value);
		lastCovidUpdate.innerText = data.lastUpdate;
	});
