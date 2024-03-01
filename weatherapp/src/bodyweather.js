
import './login.Module.css'
function Body() {
    return (
        <div className="wrapper">
            <div style={{ width: "1000px", paddingBottom: "300px" }}>
                <div class="container" style={{ marginTop: "30px" }}>
                    <table style={{ width: "1000px" }}>

                        <div class="wrapper">
                            <tr>
                                <td >
                                    <div class="img_section">
                                        <div class="default_info">
                                            <h2 class="default_day">Sunday</h2>
                                            <span class="default_date">18 September 2023 </span>
                                            <div class="icons">
                                                <img src="https://openweathermap.org/img/wn/10d@4x.png" alt="" />
                                                <h2 class="weather_temp">22°C</h2>
                                                <h3 class="cloudtxt">Overcast Clouds</h3>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="content_section">


                                        <div class="day_info">
                                            <tr className='rside'>
                                                <div class="content">
                                                    <p class="title">NAME</p>
                                                    <span class="value">United Kingdom</span>
                                                </div></tr>
                                            <tr className='rside'>
                                                <div class="content">
                                                    <p class="title">TEMP</p>
                                                    <span class="value">23°C</span>
                                                </div></tr><tr className='rside'>
                                                <div class="content">
                                                    <p class="title">HUMIDITY</p>
                                                    <span class="value">2%</span>
                                                </div></tr><tr className='rside'>
                                                <div class="content">
                                                    <p class="title">WIND SPEED</p>
                                                    <span class="value">2.92 Km/h</span>
                                                </div></tr>
                                        </div>

                                    </div>
                                </td>
                            </tr>
                        </div>

                    </table>
                </div>


            </div>

        </div >


    );
}
export default Body;

