import React, { useEffect, useState } from 'react'

import { getBusiness } from "../apis/ApiData"
import Chart from "react-apexcharts";
import moment from "moment-with-locales-es6";
moment.locale("es");
export const ChartHome = () => {

    const [compras, setCompras] = useState([])
    let fecha = moment().format('l')


    useEffect(() => {
        (async () => {
            const bussiness = await getBusiness()

            setCompras(bussiness.data.dataCompras);
        })()
    }, [])


    let arrayFecha = []
    let arrayPrecios = []

    if (compras.length > 0) {
        const responsePrice = compras.map(price => price.total)
        const responseDate = compras.map(date => moment(date.createdAt).format('l'))

        arrayFecha.push(responseDate)
        arrayPrecios.push(responsePrice)
        
    } else {
        arrayFecha = ["No hay datos"]
    }
    console.log(arrayFecha);
    // fechas: moment(fecha.createdAt).format('l'),
    var options = {
        series: [{
            name: 'Total',
            data: arrayPrecios
        }],
        chart: {
            height: 350,
            type: 'line',
        },
        forecastDataPoints: {
            count: 7
        },
        stroke: {
            width: 5,
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: arrayFecha,
            tickAmount: 10,
            labels: {
                formatter: function (value, timestamp, opts) {
                    return moment(arrayFecha).format('l')
                }
            }
        },
        title: {
            text: 'Forecast',
            align: 'left',
            style: {
                fontSize: "16px",
                color: '#666'
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: ['#FDD835'],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
            },
        },
        yaxis: {
            min: -10,
            max: 40
        }
    }

    return (
        <>
            <Chart
                options={options}
                series={options.series}
                height={350}
                width={800}
            />
        </>
    )
}

