import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button } from '../components';

const CitiesTab = () => {
   const [dataCities, setDataCities] = useState([]);
   const [dataForecast, setDataForecast] = useState([]);
   const [selectedCity, setSelectedCity] = useState(null);

   async function getDataCities() {
      try {
         const citiesUrl = "/api/cities";
         const response = await axios.get(citiesUrl);
         console.log('API Response:', response.data);
         setDataCities(response.data);
      } catch (error) {
         console.error('Error fetching base URL:', error);
      }
   }

   async function getDataForecast(insee) {
      try {
        const forecastUrl = `/api/cities/${insee}/forecast`;
        const response = await axios.get(forecastUrl);
        setDataForecast(response.data);
        setSelectedCity(insee);
      } catch (error) {
        console.error('Error fetching forecast data:', error);
      }
   }

   useEffect(() => {
      getDataCities();
    }, []);

   return (
      <div className="data-container">
         <div className="data-card h-[600px]">
            <div className="data-text">
               <h1>Welcome to AdCleek</h1>
               <h2>Cities</h2>
            </div>
            {/* ForeCast */}
            {selectedCity && 
            <table className="w-full mt-5 border-collapse">
               <thead>
                  <tr className="table-header">
                     <th className="table-cell">DateTime</th>
                     <th className="table-cell">Temperature Min</th>
                     <th className="table-cell">Temperature Max</th>
                     <th className="table-cell">Sun Hours</th>
                     <th className="table-cell">Insee</th>
                  </tr>
               </thead>
               <tbody>
                  {dataForecast?.map((item) => (
                     <tr key={item.date} className="table-content">
                        <td className="table-cell">{item.details.datetime}</td>
                        <td className="table-cell">{item.details.tmin}°C</td>
                        <td className="table-cell">{item.details.tmax}°C</td>
                        <td className="table-cell">{item.details.sun_hours}</td>
                        <td className="table-cell">{item.details.insee}</td>
                     </tr>
                  ))}
               </tbody>
            </table>}
            {/* Cities */}
            <table className="w-full mt-5 border-collapse">
               <thead>
                  <tr className="table-header">
                     <th className="table-cell">Insee</th>
                     <th className="table-cell">Name</th>
                     <th className="table-cell">ZipCode</th>
                     <th className="table-cell">Population</th>
                     <th className="table-cell">Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {dataCities?.map((item) => (
                     <tr key={item.name} className="table-content">
                        <td className="table-cell">{item.insee}</td>
                        <td className="table-cell">{item.name}</td>
                        <td className="table-cell">{item.zipcode}</td>
                        <td className="table-cell">{item.population}</td>
                        <td className="table-cell">
                           <Button title="Forecast" action={() => {getDataForecast(item.insee)}} />
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );

}

export default CitiesTab