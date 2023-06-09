d3.csv('astronautas.csv', d3.autoType).then(data => {
    let chart_11 = Plot.plot({
      marks:[
      Plot.barY(
        data, 
        Plot.groupX(
        {y:"mean"},
        {y:'mision_hs',
        x:'ocupacion', fill:'genero'
      }
        )),
      ],
      grid: true,
      color:{
        legend: true,
        scheme: 'set2',
  
      },
      y:{
        label: "Horas por Misión"
      },
      x:{
        tickRotate:-15,
        label: "Ocupación"
      },
      marginBottom: 80
    }
    )
    d3.select('#chart_11').append(() => chart_11)
  })
