import React, {useEffect, useState} from "react";
import BarGraph from "../components/BarGraph";
import '../components/Graph.css';


const FundingPage = () => {
    const [data, setData] = useState(null);
    const [sum, setSum] = useState(0);

    useEffect(() => {
        fetch('/minecraft/costsLast30Days')
            .then(res => res.json())
            .then(response => {
                console.log('Success:', response);

                // Calculate the sum of all costs
                const total = Object.values(response).reduce((total, day) => total + day.sum, 0);

                setSum(Math.round(total*1000)/1000);
                console.log(response)
                setData(response);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <h1>Funding the Server</h1>
            {sum > 0 && <h2>Cost of past 30 days: ${sum}</h2>}
            <p>Cost breakdown by day:</p>
            <div className={"graph-container"}>
                {data === null && <p>Loading...</p>}
                {data !== null && Object.keys(data).length === 0 && <p>No data available</p>}
                {data !== null && Object.keys(data).length > 0 && (
                    <>
                        <BarGraph data={data} title={""} />
                        {/*{Object.entries(data).map(([date, value]) => (*/}
                        {/*    <Link key={date} to={`/funding#${date}`}>*/}
                        {/*        /!* This is a placeholder bar, replace it with your actual bar representation *!/*/}
                        {/*        <div style={{*/}
                        {/*            height: `${value.sum}px`,*/}
                        {/*            width: '20px',*/}
                        {/*            margin: '5px',*/}
                        {/*            background: 'blue'*/}
                        {/*        }} title={`Cost on ${date}: $${value.sum}`}/>*/}
                        {/*    </Link>*/}
                        {/*))}*/}
                    </>
                )}
            </div>
        </>
    );
};

export default FundingPage;
