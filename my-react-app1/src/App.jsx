import { useEffect } from "react";
import axios from 'axios';

function App() {

    useEffect(() => {
        (async () => {
            const data = await axios.get('./F-C0032-001.json');
            const { location } = data.data.cwaopendata.dataset;
            console.log(location);
        })
    }, [])


    return (
        <>
            <h2>36小時天氣預報</h2>
            <div classname="city">
                <h3>台北市</h3>
            </div>
            <div className="weather">
                <article className="today">
                    <header>
                        <h3>2日</h3>
                        <h4>上午6:00~下午6:00</h4>
                    </header>
                    <figure><img src="./weatherIcon.多雲時陰.svg." alt="" /></figure>
                    <h4>晴時多雲</h4>
                </article>
                <article className="today2">
                    <header>
                        <h3>2日</h3>
                        <h4>上午6:00~下午6:00</h4>
                    </header>
                    <figure><img src="./weatherIcon.多雲時陰.svg." alt="" /></figure>
                    <h4>晴時多雲</h4>
                </article>
                <article className="tomorrow">
                    <header>
                        <h3>2日</h3>
                        <h4>上午6:00~下午6:00</h4>
                    </header>
                    <figure><img src="./weatherIcon.多雲時陰.svg." alt="" /></figure>
                    <h4>晴時多雲</h4>
                </article>
            </div>
        </>
    )
}
export default App