const colorsArray = [
    "#ffffff",
    "#eaeaea",
    "#666666",
    "#dddddd",
    "#c5c5c5",
    "#f4f4f4",
    "#000000",
    "#74cf9b",
    "#cccccc",
    "#00a4d6",
    "#0045b7",
    "#1c1c1c",
    "#222222",
    "#04c04c",
    "#f9f9f7",
    "#f89406",
    "#e5e5e5",
    "#f5f5f5",
    "#049cdb",
    "#a80808",
    "#5bc0de",
    "#0077b3",
    "#3a87ad",
    "#ee5f5b",
    "#111111",
    "#2f96b4",
    "#040404",
    "#f3e97a",
    "#fdf59a",
    "#46a546",
    "#149bdf",
    "#62c462",
    "#b3b3b3",
    "#c09853",
    "#f2f2f2",
    "#f9f9f9",
    "#fbb450",
    "#00286b",
    "#0480be",
    "#151515",
    "#155a95",
    "#29d29d",
    "#339bb9",
    "#444444",
    "#57a957",
    "#999999",
    "#c43c35",
    "#f3c17a",
    "#fdd49a",
    "#ffaa07",
    "#333333",
    "#777777",
    "#bd362f",
    "#eeeeee",
    "#ff959f",
    "#fffac8",
    "#2d6987",
    "#356635",
    "#7ab5d3",
    "#7aba7b",
    "#953b39",
    "#b1f4ce",
    "#cdf6ff",
    "#d59392",
    "#d9edf7",
    "#dbc59e",
    "#e6e6e6",
    "#e8f9ff",
    "#fcf8e3",
    "#ff726d",
    "#002b80",
    "#007ed2",
    "#368959",
    "#36f36f",
    "#3fb773",
    "#48c9e2",
    "#6f8092",
    "#a47e3c",
    "#c00c00",
    "#c18c91",
    "#c6c6c6",
    "#efefef",
    "#f7f7f7",
    "#0085ad",
    "#08c08c",
    "#0d3a5f",
    "#0e0e0e",
    "#0e90d2",
    "#1a1a1a",
    "#1b1b1b",
    "#1f6377",
    "#252525",
    "#343434",
    "#3b3b3b",
    "#3c3c3c",
    "#3e999f",
    "#4271ae",
    "#49afcd",
    "#4ae4ae",
    "#4bb1cf",
    "#4d4d4c",
    "#58b668",
    "#5a5a5a",
    "#5bd75b",
    "#5eb95e",
    "#61c87c",
    "#718c00",
    "#8959a8",
    "#8c2823",
    "#8e908c",
    "#9eecfe",
    "#9f9f9f",
    "#a6a6a6",
    "#a7a7a7",
    "#ad6704",
    "#b7b7b7",
    "#b94a48",
    "#bbbbbb",
    "#bce8f1",
    "#bfbfbf",
    "#c4e3f3",
    "#c67605",
    "#c82829",
    "#d0e9c6",
    "#d14d14",
    "#d1d1d1",
    "#d65652",
    "#d6d6d6",
    "#d8f4ff",
    "#dd514c",
    "#e1e1e8",
    "#e7e7e7",
    "#e8e8e8",
    "#e9e9e9",
    "#ea3b36",
    "#eab700",
    "#eaeff1",
    "#ebcccc",
    "#eddd34",
    "#ededed",
    "#eeeff0",
    "#f0fafc",
    "#f1fbff",
    "#f3d17a",
    "#f5871f",
    "#f7f7f9",
    "#f7f9fa",
    "#f8f8f8",
    "#faa732",
    "#faf2cc",
    "#fafafa",
    "#fbeed5",
    "#fca107",
    "#fcee4f",
    "#fcfcfc",
    "#fde19a",
    "#fdfde4",
    "#ffc8c8",
    "#ffe2e2"
];
const count = {
    ffffff: 138,
    eaeaea: 54,
    666666: 41,
    dddddd: 37,
    c5c5c5: 35,
    f4f4f4: 30,
    "000000": 26,
    "74cf9b": 25,
    cccccc: 24,
    "00a4d6": 22,
    "0045b7": 20,
    "1c1c1c": 20,
    222222: 18,
    "04c04c": 16,
    f9f9f7: 16,
    f89406: 15,
    e5e5e5: 14,
    f5f5f5: 14,
    "049cdb": 13,
    a80808: 12,
    "5bc0de": 11,
    "0077b3": 10,
    "3a87ad": 10,
    ee5f5b: 10,
    111111: 9,
    "2f96b4": 9,
    "040404": 8,
    f3e97a: 8,
    fdf59a: 8,
    "46a546": 7,
    "149bdf": 6,
    "62c462": 6,
    b3b3b3: 6,
    c09853: 6,
    f2f2f2: 6,
    f9f9f9: 6,
    fbb450: 6,
    "00286b": 5,
    "0480be": 5,
    151515: 5,
    "155a95": 5,
    "29d29d": 5,
    "339bb9": 5,
    444444: 5,
    "57a957": 5,
    999999: 5,
    c43c35: 5,
    f3c17a: 5,
    fdd49a: 5,
    ffaa07: 5,
    333333: 4,
    777777: 4,
    bd362f: 4,
    eeeeee: 4,
    ff959f: 4,
    fffac8: 4,
    "2d6987": 3,
    356635: 3,
    "7ab5d3": 3,
    "7aba7b": 3,
    "953b39": 3,
    b1f4ce: 3,
    cdf6ff: 3,
    d59392: 3,
    d9edf7: 3,
    dbc59e: 3,
    e6e6e6: 3,
    e8f9ff: 3,
    fcf8e3: 3,
    ff726d: 3,
    "002b80": 2,
    "007ed2": 2,
    368959: 2,
    "36f36f": 2,
    "3fb773": 2,
    "48c9e2": 2,
    "6f8092": 2,
    a47e3c: 2,
    c00c00: 2,
    c18c91: 2,
    c6c6c6: 2,
    efefef: 2,
    f7f7f7: 2,
    "0085ad": 1,
    "08c08c": 1,
    "0d3a5f": 1,
    "0e0e0e": 1,
    "0e90d2": 1,
    "1a1a1a": 1,
    "1b1b1b": 1,
    "1f6377": 1,
    252525: 1,
    343434: 1,
    "3b3b3b": 1,
    "3c3c3c": 1,
    "3e999f": 1,
    "4271ae": 1,
    "49afcd": 1,
    "4ae4ae": 1,
    "4bb1cf": 1,
    "4d4d4c": 1,
    "58b668": 1,
    "5a5a5a": 1,
    "5bd75b": 1,
    "5eb95e": 1,
    "61c87c": 1,
    "718c00": 1,
    "8959a8": 1,
    "8c2823": 1,
    "8e908c": 1,
    "9eecfe": 1,
    "9f9f9f": 1,
    a6a6a6: 1,
    a7a7a7: 1,
    ad6704: 1,
    b7b7b7: 1,
    b94a48: 1,
    bbbbbb: 1,
    bce8f1: 1,
    bfbfbf: 1,
    c4e3f3: 1,
    c67605: 1,
    c82829: 1,
    d0e9c6: 1,
    d14d14: 1,
    d1d1d1: 1,
    d65652: 1,
    d6d6d6: 1,
    d8f4ff: 1,
    dd514c: 1,
    e1e1e8: 1,
    e7e7e7: 1,
    e8e8e8: 1,
    e9e9e9: 1,
    ea3b36: 1,
    eab700: 1,
    eaeff1: 1,
    ebcccc: 1,
    eddd34: 1,
    ededed: 1,
    eeeff0: 1,
    f0fafc: 1,
    f1fbff: 1,
    f3d17a: 1,
    f5871f: 1,
    f7f7f9: 1,
    f7f9fa: 1,
    f8f8f8: 1,
    faa732: 1,
    faf2cc: 1,
    fafafa: 1,
    fbeed5: 1,
    fca107: 1,
    fcee4f: 1,
    fcfcfc: 1,
    fde19a: 1,
    fdfde4: 1,
    ffc8c8: 1,
    ffe2e2: 1
};

function displayColor(color, parent) {
    const div = document.createElement("div");
    div.style.backgroundColor = color;
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.cssFloat = "left";
    div.style.position = "relative";
    console.log(color.substring(1, 7), count[color.substring(1, 7)]);
    let newContent = document.createTextNode(color);
    div.appendChild(newContent);
    const br = document.createElement("br");
    div.appendChild(br);
    newContent = document.createTextNode(count[color.substring(1, 7)]);
    div.appendChild(newContent);
    parent.appendChild(div);
}

function displayColors(id, colors) {
    const div = document.createElement("div");
    div.id = id;
    for (let i = 0; i < colors.length; i++) {
        displayColor(colors[i], div);
    }
    document.body.appendChild(div);
}

function hexToRgb(hex) {
    hex = hex.substring(1, hex.length);
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return [r, g, b];
}

function rgbToHex(rgb) {
    return `#${((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2])
        .toString(16)
        .slice(1)}`;
}
function rgbToHsl(r, g, b) {
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    let h;
    let s;

    if (max === min) {
        h = 0;
        s = 0; // achromatic
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return new Array(h * 360, s * 360, l * 360);
}

function rgb2hsv() {
    const r = arguments[0] / 255;
    const g = arguments[1] / 255;
    const b = arguments[2] / 255;
    const v = Math.max(r, g, b);
    const diff = v - Math.min(r, g, b);
    const diffc = function (c) {
        return (v - c) / 6 / diff + 1 / 2;
    };
    let h;
    let s;
    let rr;
    let bb;
    let gg;

    if (diff === 0) {
        h = 0;
        s = 0;
    } else {
        s = diff / v;
        rr = diffc(r);
        gg = diffc(g);
        bb = diffc(b);

        if (r === v) {
            h = bb - gg;
        } else if (g === v) {
            h = 1 / 3 + rr - bb;
        } else if (b === v) {
            h = 2 / 3 + gg - rr;
        }

        if (h < 0) {
            h += 1;
        } else if (h > 1) {
            h -= 1;
        }
    }

    return [Math.round(h * 360), Math.round(s * 360), Math.round(v * 360)];
}

const balance = [0.9, 0, 0.01];
//var balance = [10, 0.03, 0.02];
//var balance = [10,5,0];
//var balance = [100,0,0];
//var balance = [10, .05, .01];
//var balance = [0,0,1];
//var balance = [5,2,2];
const balance2 = [0.3, 0, 0];
const balance3 = [0.5, 0.2, 0.1];

function colorDistanceHsl(_color1, _color2) {
    let color1 = _color1;
    let color2 = _color2;
    let result = 0;
    color1 = rgbToHsl(color1[0], color1[1], color1[2]);
    color2 = rgbToHsl(color2[0], color2[1], color2[2]);
    for (let i = 0; i < 3; i++) {
        result += (color1[i] - color2[i]) * (color1[i] - color2[i]) * balance2[i];
    }
    if (Math.floor(color1[0] / 30) !== Math.floor(color2[0] / 30)) {
        return 0;
    }
    return result;
}

function colorDistanceRgb(_color1, _color2) {
    const color1 = _color1;
    const color2 = _color2;
    let result = 0;
    for (let i = 0; i < 3; i++) {
        result += (color1[i] - color2[i]) * (color1[i] - color2[i]) * balance3[i];
    }
    return result;
}

function colorDistance(_color1, _color2) {
    let color1 = _color1;
    let color2 = _color2;
    let result = 0;
    result += colorDistanceRgb(color1, color2);
    result += colorDistanceHsl(color1, color2);
    color1 = rgb2hsv(color1[0], color1[1], color1[2]);
    color2 = rgb2hsv(color2[0], color2[1], color2[2]);
    // console.log('color1',color1);
    // console.log('color2',color2);
    for (let i = 0; i < 3; i++) {
        result += (color1[i] - color2[i]) * (color1[i] - color2[i]) * balance[i];
        // console.log('(color1[i] - color2[i])',(color1[i] - color2[i]));
        // console.log('balance[i]',balance[i]);
    }
    return result;
}

function sortColors(colors) {
    // Calculate distance between each color
    const distances = [];
    for (let i = 0; i < colors.length; i++) {
        distances[i] = [];
        for (let j = 0; j < i; j++) {
            distances.push([
                colors[i],
                colors[j],
                colorDistance(colors[i], colors[j])
            ]);
        }
    }
    distances.sort((a, b) => a[2] - b[2]);

    // Put each color into separate cluster initially
    const colorToCluster = {};
    for (let i = 0; i < colors.length; i++) {
        colorToCluster[colors[i]] = [colors[i]];
    }

    // Merge clusters, starting with lowest distances
    let lastCluster;
    for (let i = 0; i < distances.length; i++) {
        const color1 = distances[i][0];
        const color2 = distances[i][1];
        const cluster1 = colorToCluster[color1];
        const cluster2 = colorToCluster[color2];
        if (!cluster1 || !cluster2 || cluster1 === cluster2) {
            continue;
        }

        // Make sure color1 is at the end of its cluster and
        // color2 at the beginning.
        if (color1 !== cluster1[cluster1.length - 1]) {
            cluster1.reverse();
        }
        if (color2 !== cluster2[0]) {
            cluster2.reverse();
        }

        // Merge cluster2 into cluster1
        cluster1.push(...cluster2);
        delete colorToCluster[color1];
        delete colorToCluster[color2];
        colorToCluster[cluster1[0]] = cluster1;
        colorToCluster[cluster1[cluster1.length - 1]] = cluster1;
        lastCluster = cluster1;
    }

    // By now all colors should be in one cluster
    return lastCluster;
}

//displayColors('Original', coloursArray);
console.log("colorsArray.length", colorsArray.length);
const rgbArr = colorsArray.map(hexToRgb);
console.log("rgbArr.length", rgbArr.length);
const sortedRgbArr = sortColors(rgbArr);
console.log("sortedRgbArr.length", sortedRgbArr.length);
const finalArray = sortedRgbArr.map(rgbToHex);
displayColors("Sorted", finalArray);
