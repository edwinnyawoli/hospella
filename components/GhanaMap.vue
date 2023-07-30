<template>
    <svg ref="mapRef" class="w-full h-full">
        <g className="countries"></g>
    </svg>
</template>

<script setup>
import * as d3 from "d3";
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import ghanaData from "@/assets/ghana.json";

const mapRef = ref(null);



onMounted(() => {
    watchEffect((onCleanup) => {
        const drawMap = () => {
            if (mapRef.value) {
                // remove the previous map
                d3.select(mapRef.value).selectAll("path").remove();

                const svg = d3.select(mapRef.value);
                const width = mapRef.value.clientWidth;
                const height = mapRef.value.clientHeight;
                const projection = geoMercator().fitSize(
                    [width, height],
                    feature(ghanaData, ghanaData.objects.ghana)
                );
                const pathGenerator = geoPath().projection(projection);

                svg
                    .selectAll("path")
                    .data((feature(ghanaData, ghanaData.objects.ghana)).features)
                    .enter()
                    .append("path")
                    .attr("d", (d) => pathGenerator(d))
                    .attr("stroke", "#CBD5E1")
                    .attr("fill", "#F1F5F9")
                    .attr("stroke-width", 0.5)
                    .attr("cursor", "pointer");

                svg
                    .selectAll("path")
                    .on("mousemove", function (d) {
                        d3.select(this).attr("fill", "#2DD4BF").attr("stroke", "#FFFFFF");
                    })
                    .on("mouseout", function (d) {
                        d3.select(this).attr("fill", "#F1F5F9").attr("stroke", "#CBD5E1");
                    });
            }
        };

        // Call drawMap initially
        drawMap();

        // Redraw the map when the window is resized
        const resizeListener = window.addEventListener("resize", drawMap);

        // Cleanup function
        onCleanup(() => {
            window.removeEventListener("resize", resizeListener);
        })
    });
})
</script>