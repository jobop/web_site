//--饼图
function Pie(id,name,data1){
   	var myChart = echarts.init(document.getElementById(id));
	var data1=data1;
	    _name=name;

option = {
	title : {
        text: '',
        x:'center',
		y:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b}{c}%"
    },
    series : [
        {
            name: name,
            type: 'pie',
            radius: ['20%', '65%'],
            data:data1,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

	myChart.setOption(option);
	$(window).resize(function(){
		myChart.resize();
		})	
}