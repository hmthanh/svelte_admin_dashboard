<!-- <script lang="ts">
  //   import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
  //   import * as am5 from "@amcharts/amcharts5";
  //   import * as am5xy from "@amcharts/amcharts5/xy";
  // import * as am5 from "@amcharts/amcharts5";
  // // import * as am5map from "@amcharts/amcharts5/map";
  // import * as am5xy from "@amcharts/amcharts5/xy";
  // import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
  // import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";



  import { onDestroy, onMount } from "svelte";

  interface ITreeNodeType {
    value?: number;
    name?: string;
    children: ITreeNodeType[];
  }

  

  onMount(() => {
    let root = am5.Root.new("chartdiv");
    root.setThemes([am5themes_Animated.new(root)]);

    // Create wrapper container
    let container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout,
      })
    );
    let series = container.children.push(
      am5hierarchy.ForceDirected.new(root, {
        singleBranchOnly: false,
        downDepth: 1,
        initialDepth: 2,
        valueField: "value",
        categoryField: "name",
        childDataField: "children",
        centerStrength: 0.5,
      })
    );

    // Generate and set data
    // https://www.amcharts.com/docs/v5/charts/hierarchy/#Setting_data
    let maxLevels = 2;
    let maxNodes = 5;
    let maxValue = 100;

    let data: ITreeNodeType = {
      name: "Root",
      children: [],
    };
    generateLevel(data, "", 0);

    series.data.setAll([data]);
    series.set("selectedDataItem", series.dataItems[0]);

    function generateLevel(data: ITreeNodeType, name: string, level: number) {
      for (var i = 0; i < Math.ceil(maxNodes * Math.random()) + 1; i++) {
        let nodeName = name + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[i];
        let child: ITreeNodeType;
        if (level < maxLevels) {
          child = {
            name: nodeName + level,
            children: [],
          };

          if (level > 0 && Math.random() < 0.5) {
            child.value = Math.round(Math.random() * maxValue);
          } else {
            child.children = [];
            generateLevel(child, nodeName + i, level + 1);
          }
        } else {
          child = {
            name: name + i,
            value: Math.round(Math.random() * maxValue),
            children: [],
          };
        }
        data.children.push(child);
      }

      level++;
      return data;
    }

    // Make stuff animate on load
    series.appear(1000, 100);
  });

  // onDestroy(() => {
  //   root.dispose();
  // });
</script>

<h1>Hell2o</h1>
<div id="chartdiv" />
<h1>Hello</h1>

<style>
  #chartdiv {
    width: 100%;
    height: 100%;
  }
</style> -->
<!--

  src/App.svelte

  Cannot read property 'indexOf' of undefined
  am4themes_animated is not defined

  svelte repl sometimes fails ..
  just add some newlines to App.svelte, to trigger a re-compile, and it should work

  based on https://www.amcharts.com/docs/v4/tutorials/customizing-chart-scrollbar/
  bundle with https://github.com/sveltejs/template-webpack

  https://svelte.school/tutorials/introduction-to-actions
  https://svelte.school/tutorials/external-libraries-in-svelte-and-sapper-using-actions

-->

<main>
  Hello
	<div id="chartdiv" width="500" height="500"></div>
  Hello
</main>

<style type="text/css">
	main {
		width: 100%; height: 100%;
		display: flex;
	}
	main > * {
		flex-grow: 1;
	}
</style>

<!-- workaround for svelte repl -->

<script>
  import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { onMount } from "svelte";

/* use this with webpack / rollup
import * as am4core from "@amcharts/amcharts4/core.js";
import * as am4charts from '@amcharts/amcharts4/charts.js';
import am4themes_animated from '@amcharts/amcharts4/themes/animated.js';
*/

// workaround for svelte repl
let scripts_loaded = 0;
const num_scripts = 3;
function handleScriptLoaded(event) {
  console.dir(event);
  scripts_loaded++;
  if (scripts_loaded == num_scripts) {
    console.log('all scripts loaded. load chart');
    am4core.ready(amcharts4_ready_handler);
  }
}

/* use this with webpack / rollup
onMount(async () => {
  am4core.ready(amcharts4_ready_handler);
});
*/

function amcharts4_ready_handler() {



/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

am4core.useTheme(am4themes_animated);

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);
chart.paddingRight = 30;

// Add data
chart.data = [{
  "date": new Date(2018, 0, 1),
  "value": 450,
  "value2": 362,
  "value3": 699
}, {
  "date": new Date(2018, 0, 2),
  "value": 269,
  "value2": 450,
  "value3": 841
}, {
  "date": new Date(2018, 0, 3),
  "value": 700,
  "value2": 358,
  "value3": 699
}, {
  "date": new Date(2018, 0, 4),
  "value": 490,
  "value2": 367,
  "value3": 500
}, {
  "date": new Date(2018, 0, 5),
  "value": 500,
  "value2": 485,
  "value3": 369
}, {
  "date": new Date(2018, 0, 6),
  "value": 550,
  "value2": 354,
  "value3": 250
}, {
  "date": new Date(2018, 0, 7),
  "value": 420,
  "value2": 350,
  "value3": 600
}];

// Create axes
var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.renderer.grid.template.location = 0;
dateAxis.renderer.minGridDistance = 30;
dateAxis.startLocation = 0.5;
dateAxis.endLocation = 0.5;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
function createSeries(field, name) {
  var series = chart.series.push(new am4charts.LineSeries());
  series.dataFields.valueY = field;
  series.dataFields.dateX = "date";
  series.name = name;
  series.tooltipText = "{dateX}: [b]{valueY}[/]";
  series.strokeWidth = 2;
  series.tensionX = 0.8;
  series.stacked = true;
  series.fillOpacity = 0.2;
  
  return series;
}

var series1 = createSeries("value", "Series #1");
var series2 = createSeries("value2", "Series #2");
var series3 = createSeries("value3", "Series #3");

chart.legend = new am4charts.Legend();
chart.cursor = new am4charts.XYCursor();

// Add scrollbar
var scrollbar = new am4charts.XYChartScrollbar();
scrollbar.series.push(series1)

chart.scrollbarX = scrollbar;



} // end amcharts4_ready_handler

</script>
