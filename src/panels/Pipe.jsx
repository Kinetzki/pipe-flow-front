import React, { useEffect, useState } from "react";
import axios from "axios";
import AddPipe from "./AddPipe";

const data = [
    {
        "pipe_size": "1/8",
        "outside_diameter": 0.405,
        "schedules": [
            "10S", "40ST, 40S", "80XS, 80S"
        ],
        "wall_thickness": [0.049, 0.068, 0.095],
        "inside_diameter": [0.0307, 0.269, 0.215],
        "metal": [0.055, 0.072, 0.093],
        "flow": [0.00051, 0.00040, 0.00025],
        "outside": [0.106, 0.106, 0.106],
        "inside": [0.0804, 0.0705, 0.0563],
        "gal": [0.231, 0.179, 0.113],
        "water": [115.5, 89.5, 56.5],
        "weight": [0.19, 0.24, 0.31]
    },
    {
        "pipe_size": "1/4",
        "outside_diameter": 0.540,
        "schedules": [
            "10S", "40ST, 40S", "80XS, 80S"
        ],
        "wall_thickness": [0.65, 0.088, 0.119],
        "inside_diameter": [0.410, 0.364, 0.302],
        "metal": [0.097, 0.125, 0.157],
        "flow": [0.00092, 0.00072, 0.00050],
        "outside": [0.141, 0.141, 0.141],
        "inside": [0.107, 0.095, 0.079],
        "gal": [0.412, 0.323, 0.224],
        "water": [206.5, 161.5, 112.0],
        "weight": [0.33, 0.42, 0.54]
    },
    {
        "pipe_size": "3/8",
        "outside_diameter": 0.675,
        "schedules": [
            "10S", "40ST, 40S", "80XS, 80S"
        ],
        "wall_thickness": [0.65, 0.091, 0.126],
        "inside_diameter": [0.545, 0.493, 0.423],
        "metal": [0.125, 0.167, 0.217],
        "flow": [0.00162, 0.00133, 0.00098],
        "outside": [0.177, 0.177, 0.177],
        "inside": [0.143, 0.129, 0.111],
        "gal": [0.727, 0.596, 0.440],
        "water": [363.5, 298.0, 220.0],
        "weight": [0.42, 0.57, 0.74]
    },
    {
        "pipe_size": "1/2",
        "outside_diameter": 0.840,
        "schedules": [
            "5S", "10S", "40ST, 40S", "80XS, 80S", "160", "XX"
        ],
        "wall_thickness": [0.65, 0.083, 0.109, 0.147, 0.188, 0.294],
        "inside_diameter": [0.710, 0.674, 0.622, 0.546, 0.464, 0.252],
        "metal": [0.158, 0.197, 0.250, 0.320, 0.385, 0.504],
        "flow": [0.00275, 0.00248, 0.00211, 0.00163, 0.00117, 0.00035],
        "outside": [0.220, 0.220, 0.220, 0.220, 0.220, 0.220],
        "inside": [0.186, 0.176, 0.163, 0.143, 0.122, 0.066],
        "gal": [1.234, 1.112, 0.945, 0.730, 0.527, 0.155],
        "water": [617.0, 556.0, 472.0, 365.0, 263.5, 77.5],
        "weight": [0.54, 0.67, 0.85, 1.09, 1.31, 1.71]
    },
    {
        "pipe_size": "3/4",
        "outside_diameter": 1.050,
        "schedules": [
            "5S", "10S", "40ST, 40S", "80XS, 80S", "160", "XX"
        ],
        "wall_thickness": [ 0.065, 0.083, 0.113, 0.154, 0.219, 0.308],
        "inside_diameter": [0.920, 0.884, 0.824, 0.742, 0.612, 0.434],
        "metal": [0.201, 0.252, 0.333, 0.433, 0.572, 0.718],
        "flow": [0.00461, 0.00426, 0.00371, 0.00300, 0.00204, 0.00103],
        "outside": [0.275, 0.275, 0.275, 0.275, 0.275, 0.275],
        "inside": [0.241, 0.231, 0.216, 0.194, 0.160, 0.114],
        "gal": [1.072, 1.903, 1.665, 1.345, 0.917, 0.461],
        "water": [1036.0, 951.5, 832.5, 672.5, 458.5, 230.5],
        "weight": [0.69, 0.86, 1.13, 1.47, 1.94, 2.44]
    },
    {
        "pipe_size": "1",
        "outside_diameter": 1.315,
        "schedules": [
            "5S", "10S", "40ST, 40S", "80XS, 80S", "160", "XX"
        ],
        "wall_thickness": [ 0.065, 0.109, 0.113, 0.179, 0.250, 0.358],
        "inside_diameter": [1.185, 1.097, 1.049, 0.957, 0.815, 0.599],
        "metal": [0.255, 0.413, 0.494, 0.639, 0.836, 1.076],
        "flow": [0.00768, 0.00656, 0.00600, 0.00499, 0.00362, 0.00196],
        "outside": [0.344, 0.344, 0.344, 0.344, 0.344, 0.344],
        "inside": [0.310, 0.287, 0.275, 0.250, 0.213, 0.157],
        "gal": [3.449, 2.946, 2.690, 2.240, 1.625, 0.878],
        "water": [1725, 1473, 1345, 1120, 812.5, 439.0],
        "weight": [0.87, 1.40, 1.68, 2.17, 2.84, 3.66]
    },
    {
        "pipe_size": "1 1/4",
        "outside_diameter": 1.660,
        "schedules": [
            "5S", "10S", "40ST, 40S", "80XS, 80S", "160", "XX"
        ],
        "wall_thickness": [ 0.065, 0.109, 0.140, 0.191, 0.250, 0.382],
        "inside_diameter": [1.530, 1.442, 1.380, 1.278, 1.160, 0.896],
        "metal": [0.326, 0.531, 0.668, 0.881, 1.107, 1.534],
        "flow": [0.01277, 0.01134, 0.01040, 0.00891, 0.00734, 0.00438],
        "outside": [0.435, 0.435, 0.435, 0.435, 0.435, 0.435],
        "inside": [0.401, 0.378, 0.361, 0.335, 0.304, 0.235],
        "gal": [5.73, 5.09, 4.57, 3.99, 3.29, 1.97],
        "water": [2865, 2545, 2285, 1995, 1645, 985],
        "weight": [1.11, 1.81, 2.27, 3.00, 3.76, 5.21]
    },
    {
        "pipe_size": "1 1/2",
        "outside_diameter": 1.900,
        "schedules": [
            "5S", "10S", "40ST, 40S", "80XS, 80S", "160", "XX"
        ],
        "wall_thickness": [ 0.065, 0.109, 0.145, 0.200, 0.281, 0.400],
        "inside_diameter": [1.770, 1.682, 1.610, 1.500, 1.338, 1.100],
        "metal": [0.375, 0.614, 0.800, 1.069, 1.429, 1.885],
        "flow": [0.01709, 0.01543, 0.01414, 0.01225, 0.00976, 0.00660],
        "outside": [ 0.497, 0.497, 0.497, 0.497, 0.497, 0.497],
        "inside": [0.463, 0.440, 0.421, 0.393, 0.350, 0.288],
        "gal": [7.67, 6.94, 6.34, 5.49, 4.38, 2.96],
        "water": [3835, 3465, 3170, 2745, 2190, 1480],
        "weight": [1.28, 2.09, 2.72, 3.63, 4.86, 6.41]
    },
    {
        "pipe_size": "2",
        "outside_diameter": 2.375,
        "schedules": [
            "5S", "10S", "40ST, 40S", "80XS, 80S", "160", "XX"
        ],
        "wall_thickness": [0.065, 0.109, 0.154, 0.218, 0.344, 0.436],
        "inside_diameter": [2.245, 2.157, 2.067, 1.939, 1.687, 1.503],
        "metal": [0.472, 0.776, 1.075, 1.477, 2.195, 2.656],
        "flow": [0.02749, 0.02538, 0.02330, 0.02050, 0.01552, 0.01232],
        "outside": [0.622, 0.622, 0.622, 0.622, 0.622, 0.622],
        "inside": [0.588, 0.565, 0.541, 0.508, 0.436, 0.393],
        "gal": [12.34, 11.39, 10.45, 9.20, 6.97, 5.53],
        "water": [6170, 5695, 5225, 4600, 3485, 2765],
        "weight": [1.61, 2.64, 3.65, 5.02, 7.46, 9.03]
    },
    {
        "pipe_size": "2 1/2",
        "outside_diameter": 2.875,
        "schedules": [
            "5S", "10S", "40ST, 40S", "80XS, 80S", "160", "XX"
        ],
        "wall_thickness": [0.083, 0.120, 0.203, 0.276, 0.375, 0.552],
        "inside_diameter": [2.709, 2.635, 2.469, 2.323, 2.125, 1.771],
        "metal": [0.728, 1.039, 1.704, 2.254, 2.945, 4.028],
        "flow": [0.04003, 0.03787, 0.03322, 0.02942, 0.02463, 0.01711],
        "outside": [0.753, 0.753, 0.753, 0.753, 0.753, 0.753],
        "inside": [0.709, 0.690, 0.647, 0.608, 0.556, 0.464],
        "gal": [17.97, 17.00, 14.92, 13.20, 11.07, 7.68],
        "water": [8985, 8500, 7460, 6600, 5535, 3840],
        "weight": [2.48, 3.53, 5.79, 7.66, 10.01, 13.69]
    },
    {
        "pipe_size": "3",
        "outside_diameter": 3.500,
        "schedules": [
            "5S", "10S", "40ST, 40S", "80XS, 80S", "160", "XX"
        ],
        "wall_thickness": [0.083, 0.120, 0.216, 0.300, 0.438, 0.600],
        "inside_diameter": [3.334, 3.260, 3.068, 2.900, 2.624, 2.300],
        "metal": [0.891, 1.274, 2.228, 3.016, 4.213, 5.466],
        "flow": [0.06063, 0.05796, 0.05130, 0.04587, 0.03755, 0.02885],
        "outside": [0.916, 0.916, 0.916, 0.916, 0.916, 0.916],
        "inside": [0.873, 0.853, 0.803, 0.759, 0.687, 0.602],
        "gal": [27.21, 26.02, 23.00, 20.55, 16.86, 12.95],
        "water": [13605,13010,11500,10275,8430, 6475],
        "weight": [3.03, 4.33, 7.58, 10.25, 14.32, 18.58]
    },
    {
        "pipe_size": "4",
        "outside_diameter": 4.5,
        "schedules": [
            "5S", "10S", "40ST, 40S", "80XS, 80S","120", "160", "XX"
        ],
        "wall_thickness": [0.083, 0.120, 0.237, 0.337, 0.438, 0.531, 0.674],
        "inside_diameter": [4.334, 4.260, 4.026, 3.826, 3.624, 3.438, 3.152],
        "metal": [1.152, 1.651, 3.17, 4.41, 5.58, 6.62, 8.10],
        "flow": [0.10245, 0.09898, 0.08840, 0.07986, 0.07170, 0.06647, 0.05419],
        "outside": [1.178, 1.178, 1.178, 1.178, 1.178, 1.178],
        "inside": [1.135, 1.115, 1.054, 1.002, 0.949, 0.900, 0.825],
        "gal": [46.0, 44.4, 39.6, 35.8, 32.2, 28.9, 24.3],
        "water": [23000, 22200, 19800, 17900, 16100, 14450, 12150],
        "weight": [3.92, 5.61, 10.79, 14.98, 19.00, 22.51, 27.54]
    },
    {
        "pipe_size": "5",
        "outside_diameter": 5.563,
        "schedules": [
            "5S","10S", "40ST, 40S", "80XS, 80S", "120", "160"
        ],
        "wall_thickness": [0.109, 0.134, 0.258, 0.375, 0.500, 0.625, 0.750],
        "inside_diameter": [5.345, 5.295, 5.047, 0.375, 4.813,4.563, 4.313, 4.063],
        "metal": [1.87, 2.29, 4.30, 6.11, 7.95, 9.70, 11.34],
        "flow": [0.1558, 0.1529, 0.1390, 0.1263, 0.1136, 0.1015, 0.0900],
        "outside": [1.456, 1.456, 1.456, 1.456, 1.456, 1.456, 1.456],
        "inside": [1.399, 1.386, 1.321, 1.260, 1.195, 1.129, 1.064],
        "gal": [69.9, 68.6, 62.3, 57.7, 51.0, 45.5],
        "water": [34950, 34300, 31150, 28850, 25500, 22750, 20200],
        "weight": [6.36, 7.77, 14.62, 20.78, 27.04, 32.96]
    },
    {
        "pipe_size": "6",
        "outside_diameter": 6.625,
        "schedules": [
            "5S", "10S", "40ST, 40S", "80XS, 80S", "120", "160"
        ],
        "wall_thickness": [0.109, 0.134, 0.280, 0.432, 0.562, 0.719, 0.864],
        "inside_diameter": [6.407, 6.357, 6.065, 5.761, 5.501, 5.187, 4.897],
        "metal": [2.23, 2.73, 5.58, 8.40, 10.70, 13.34, 15.64],
        "flow": [0.2239, 0.2204, 0.2006, 0.1810, 0.1650, 0.1467, 0.1308],
        "outside": [1.734, 1.734, 1.734, 1.734, 1.734, 1.734, 1.734],
        "inside": [1.677, 1.664, 1.588, 1.508, 1.440, 1.358, 1.282],
        "gal": [100.5, 98.9, 90.0, 81.1, 73.9, 65.9],
        "water": [50250, 49450, 45000, 40550, 36950, 32950, 29350],
        "weight": [7.60, 9.29, 18.97, 28.57, 36.39, 45.34]
    },
    {
        "pipe_size": "8",
        "outside_diameter": 8.625,
        "schedules": [
            "5S", "10S", "20", "30", "40ST, 40S", "60", "80XS, 80S", "100", "120", "140", "160"
        ],
        "wall_thickness": [0.109, 0.148, 0.250, 0.277, 0.322, 0.406, 0.500, 0.594, 0.719, 0.812, 0.875, 0.906],
        "inside_diameter": [8.407, 8.329, 8.125, 8.071, 7.981, 7.813, 7.625, 7.437, 7.187, 7.001, 6.875, 6.813],
        "metal": [2.915, 3.941, 6.578, 7.265, 8.399, 10.48, 12.76, 14.99, 17.86, 19.93, 21.30, 21.97],
        "flow": [0.3855, 0.3784, 0.3601, 0.3553, 0.3474, 0.3329, 0.3171, 0.3017, 0.2817, 0.2673, 0.2578, 0.2532],
        "outside": [2.258, 2.258, 2.258, 2.258, 2.258, 2.258, 2.258, 2.258, 2.258, 2.258, 2.258, 2.258],
        "inside": [2.201, 2.180, 2.127, 2.113, 2.089, 2.045, 1.996, 1.947, 1.882, 1.833, 1.800, 1.784],
        "gal": [173.0, 169.8, 161.5, 159.4, 155.7, 149.4, 142.3, 135.4, 126.4, 120.0, 115.7, 113.5],
        "water": [86500, 84900, 80750, 79700, 77850, 74700, 71150, 67700, 63200, 60000, 57850, 56750],
        "weight": [9.93, 13.40, 22.36, 24.70, 28.55, 35.64, 43.39, 50.95, 60.71, 67.76, 72.42, 74.69]
    },
    {
        "pipe_size": "10",
        "outside_diameter": 10.75,
        "schedules": [
            "5S", "10S", "20", "30", "40ST, 40S", "60", "60XS, 80S", "80", "100", "120", "140", "160"
        ],
        "wall_thickness": [0.134, 0.165, 0.250, 0.307, 0.365, 0.500, 0.594, 0.719, 0.844, 1.000, 1.125],
        "inside_diameter": [10.482, 10.420, 10.250, 10.136, 10.020, 9.750, 9.562, 9.312, 9.062, 8.750, 8.500],
        "metal": [4.47, 5.49, 8.25, 10.07, 11.91, 16.10, 18.95, 22.66, 26.27, 30.63, 34.02],
        "flow": [0.5993, 0.5922, 0.5731, 0.5603, 0.5475, 0.5185, 0.4987, 0.4729, 0.4479, 0.4176, 0.3941],
        "outside": [2.814, 2.814, 2.814, 2.814, 2.814, 2.814, 2.814, 2.814, 2.814, 2.814, 2.814],
        "inside": [2.744, 2.728, 2.685, 2.655, 2.620, 2.550, 2.503, 2.438, 2.372, 2.291, 2.225],
        "gal": [269.0, 265.8, 257.0, 252.0, 246.0, 233.0, 223.4, 212.3, 201.0, 188.0, 177.0],
        "water": [134,500, 132900, 128500, 126000, 123000, 116500, 111700, 106150, 100500, 94000, 88500],
        "weight": [15.19, 18.65, 28.04, 34.24, 40.48, 54.74, 64.43, 77.03, 89.29, 104.13, 115.64]
    },
    {
        "pipe_size": "12",
        "outside_diameter": 12.75,
        "schedules": [
            "5S", "10S", "20", "30ST, 40S", "60", "40XS, 80S", "100", "120", "140", "160"
        ],
        "wall_thickness": [0.156, 0.180, 0.250, 0.330, 0.375, 0.406, 0.500, 0.562, 0.688, 0.844, 1.000, 1.125, 1.312],
        "inside_diameter": [12.438, 12.390, 12.250, 12.090, 12.000, 11.938, 11.750, 11.626, 11.374, 11.062, 10.750, 10.500, 10.126],
        "metal": [6.17, 7.11, 9.82, 12.88, 14.58, 15.74, 19.24, 21.52, 26.07, 31.57, 36.91, 41.09, 47.14],
        "flow": [0.8438, 0.8373, 0.8185, 0.7972, 0.7854, 0.7773, 0.7530, 0.7372, 0.7056, 0.6674, 0.6303, 0.6013, 0.5592],
        "outside": [3.338, 3.338, 3.338, 3.338, 3.338, 3.338, 3.338, 3.338, 3.338, 3.338, 3.338, 3.338, 3.338],
        "inside": [3.26, 3.24, 3.21, 3.17, 3.14, 3.13, 3.08, 3.04, 2.98, 2.90, 2.81, 2.75, 2.65],
        "gal": [378.7, 375.8, 367.0, 358.0, 352.5, 349.0, 338.0, 331.0, 316.7, 299.6, 283.0, 270.0, 251.0],
        "water": [189350, 187900, 183500, 179000, 176250, 174500, 169000, 165500, 158350, 149800, 141500, 135000, 125500],
        "weight": [20.98, 24.17, 33.38, 43.77, 49.56, 53.52, 65.42, 73.15, 88.63, 107.32, 125.49, 139.67, 160.27]
    },
    {
        "pipe_size": "14",
        "outside_diameter": 14,
        "schedules": [
            "5S", "10S", "10", "20", "30, ST", "40XS", "60", "80", "100", "120", "140", "160"
        ],
        "wall_thickness": [0.156, 0.188, 0.250, 0.312, 0.375, 0.438, 0.500, 0.594, 0.750, 0.938, 1.094, 1.250, 1.406],
        "inside_diameter": [13.688, 13.624, 13.500, 13.376, 13.250, 13.124, 13.000, 12.812, 12.500, 12.124, 11.812, 11.500, 11.188],
        "metal": [6.78, 8.16, 10.80, 13.42, 16.05, 18.66, 21.21, 25.02, 31.22, 38.49, 44.36, 50.07, 55.63],
        "flow": [1.0219, 1.0125, 0.9940, 0.9750, 0.9575, 0.9397, 0.9218, 0.8957, 0.8522, 0.8017, 0.7610, 0.7213, 0.6827],
        "outside": [3.665, 3.665, 3.665, 3.665, 3.665, 3.665, 3.665, 3.665, 3.665, 3.665, 3.665, 3.665, 3.665],
        "inside": [3.58, 3.57, 3.53, 3.50, 3.47, 3.44, 3.40, 3.35, 3.27, 3.17, 3.09, 3.01, 2.93],
        "gal": [459, 454, 446, 438, 430, 422, 414, 402, 382, 360, 342, 324, 306],
        "water": [229,500, 227000, 223000, 219000, 215000, 211000, 207000, 201000, 191000, 180000, 171000, 162000, 153000],
        "weight": [23.07, 27.73, 36.71, 45.61, 54.57, 63.44, 72.09, 85.05, 106.13, 130.85, 150.79, 170.21, 189.11]
    },
    {
        "pipe_size": "16",
        "outside_diameter": 16,
        "schedules": [
            "5S", "10S", "10", "20", "30, ST", "40, XS", "60", "80", "100", "120", "140", "160"
        ],
        "wall_thickness": [0.165, 0.188, 0.250, 0.312, 0.375, 0.500, 0.656, 0.844, 1.031, 1.219, 1.438, 1.594],
        "inside_diameter": [15.670, 15.624, 15.500, 15.376, 15.250, 15.000, 14.688, 14.312, 13.938, 13.562, 13.124, 12.812],
        "metal": [8.21, 9.34, 12.37, 15.38, 18.41, 24.35, 31.62, 40.19, 48.48, 56.61, 65.79, 72.14],
        "flow": [1.3393, 1.3314, 1.3104, 1.2985, 1.2680, 1.2272, 1.1766, 1.1171, 1.0596, 1.0032, 0.9394, 0.8953],
        "outside": [4.189, 4.189, 4.189, 4.189, 4.189, 4.189, 4.189, 4.189, 4.189, 4.189, 4.189, 4.189],
        "inside": [4.10, 4.09, 4.06, 4.03, 3.99, 3.93, 3.85, 3.75, 3.65, 3.55, 3.44, 3.35],
        "gal": [601, 598, 587, 578, 568, 550, 528, 501, 474, 450, 422, 402],
        "water": [300500, 299000, 293500, 289000, 284000, 275000, 264000, 250500, 237000, 225000, 211000, 201000],
        "weight": [27.90, 31.75, 42.05, 52.27, 62.58, 82.77, 107.50, 136.61, 164.82, 192.43, 223.64, 245.25]
    },
    {
        "pipe_size": "18",
        "outside_diameter": 18,
        "schedules": [
            "5S", "10S", "10", "20ST", "30XS", "40", "60", "80", "100", "120", "140", "160"
        ],
        "wall_thickness": [0.165, 0.188, 0.250, 0.312, 0.375, 0.438, 0.500, 0.562, 0.750, 0.938, 1.156, 1.375, 1.562, 1.781],
        "inside_diameter": [17.670, 17.624, 17.500, 17.376, 17.250, 17.124, 17.000, 16.876, 16.500, 16.124, 15.688, 15.250, 14.876, 14.438],
        "metal": [9.25, 10.52, 13.94, 17.34, 20.76, 24.16, 27.49, 30.79, 40.64, 50.28, 61.17, 71.82, 80.66, 90.75],
        "flow": [1.7029, 1.6941, 1.6703, 1.6468, 1.6230, 1.5993, 1.5763, 1.5533, 1.4849, 1.4180, 1.3423, 1.2684, 1.2070, 1.1370],
        "outside": [4.712, 4.712, 4.712, 4.712, 4.712, 4.712, 4.712, 4.712, 4.712, 4.712, 4.712, 4.712, 4.712, 4.712],
        "inside": [4.63, 4.61, 4.58, 4.55, 4.52, 4.48, 4.45, 4.42, 4.32, 4.22, 4.11, 3.99, 3.89, 3.78],
        "gal": [764, 760, 750, 739, 728, 718, 707, 697, 666, 636, 602, 569, 540, 510],
        "water": [382000, 379400, 375000, 369500, 364000, 359000, 353500, 348500, 333000, 318000, 301000, 284500, 270000, 255000],
        "weight": [31.43, 35.76, 47.39, 58.94, 70.59, 82.15, 93.45, 104.67, 138.17, 170.92, 207.96, 244.14, 274.22, 308.50]
    },
    {
        "pipe_size": "20",
        "outside_diameter": 20,
        "schedules": [
            "5S", "10S", "10", "20, ST", "30, XS", "40", "60", "80", "100", "120", "140", "160"
        ],
        "wall_thickness": [0.188, 0.218, 0.250, 0.375, 0.500, 0.594, 0.812, 1.031, 1.281, 1.500, 1.750, 1.969],
        "inside_diameter": [19.624, 19.564, 19.500, 19.250, 19.000, 18.812, 18.376, 17.938, 17.438, 17.000, 16.500, 16.062],
        "metal": [11.70, 13.55, 15.51, 23.12, 30.63, 36.21, 48.95, 61.44, 75.33, 87.18, 100.3, 111.5],
        "flow": [2.1004, 2.0878, 2.0740, 2.0211, 1.9689, 1.9302, 1.8417, 1.7550, 1.6585, 1.5763, 1.4849, 1.4071],
        "outside": [5.236, 5.236, 5.236, 5.236, 5.236, 5.236, 5.236, 5.236, 5.236, 5.236, 5.236, 5.236],
        "inside": [5.14, 5.12, 5.11, 5.04, 4.97, 4.92, 4.81, 4.70, 4.57, 4.45, 4.32, 4.21],
        "gal": [943, 937, 930, 902, 883, 866, 826, 787, 744, 707, 665, 632],
        "water": [471500, 467500, 465000, 451000, 441500, 433000, 413000, 393500, 372000, 353500, 332500, 316000],
        "weight": [39.78, 46.06, 52.73, 78.60, 104.13, 123.11, 166.40, 208.87, 256.10, 296.37, 341.09, 397.17]
    },
    {
        "pipe_size": "24",
        "outside_diameter": 24,
        "schedules": [
            "5S", "10, 10S", "20, ST", "XS", "30", "40", "60", "80", "100", "120", "140", "160"
        ],
        "wall_thickness": [0.218, 0.250, 0.375, 0.500, 0.562, 0.688, 0.969, 1.219, 1.531, 1.812, 2.062, 2.344],
        "inside_diameter": [23.564, 23.500, 23.250, 23.000, 22.876, 22.624, 22.062, 21.562, 20.938, 20.376, 19.876, 19.312],
        "metal": [16.29, 18.65, 27.83, 36.90, 41.39, 50.39, 70.11, 87.24, 108.1, 126.3, 142.1, 159.5],
        "flow": [3.0285, 3.012, 2.948, 2.885, 2.854, 2.792, 2.655, 2.536, 2.391, 2.264, 2.155, 2.034],
        "outside": [6.283, 6.283, 6.283, 6.283, 6.283, 6.283, 6.283, 6.283, 6.283, 6.283, 6.283, 6.283],
        "inside": [6.17, 6.15, 6.09, 6.02, 5.99, 5.92, 5.78, 5.64, 5.48, 5.33, 5.20, 5.06],
        "gal": [1359, 1350, 1325, 1295, 1281, 1253, 1192, 1138, 1073, 1016, 965, 913],
        "water": [679500, 675000, 662500, 642500, 640500, 626500, 596000, 569000, 536500, 508000, 482500, 456500],
        "weight": [55.37, 63.41, 94.62, 125.49, 140.68, 171.29, 238.35, 296.58, 367.39, 429.39, 483.12, 542.13]
    },
    {
        "pipe_size": "30",
        "outside_diameter": 30,
        "schedules": [
            "5S", "10, 10S", "ST", "20, XS", "30"
        ],
        "wall_thickness": [0.250, 0.312, 0.375, 0.500, 0.625],
        "inside_diameter": [29.500, 29.376, 29.250, 29.000, 28.750],
        "metal": [23.37, 29.10, 34.90, 46.34, 57.68],
        "flow": [4.746, 4.707, 4.666, 4.587, 4.508],
        "outside": [7.854, 7.854, 7.854, 7.854, 7.854],
        "inside": [7.72, 7.69, 7.66, 7.59, 7.53],
        "gal": [2130, 2110, 2094, 2055, 2020],
        "water": [1065000, 1055000, 1048000, 1027500, 1010000],
        "weight": [79.43, 98.93, 118.65, 157.53, 196.08]
    },
    
]

function Pipe({ setValues, setLength, setRoughness }) {
  const [schedule, setSchedule] = useState("");
  const [nominal, setNominal] = useState("");
  const [rendered, setRendered] = useState(data);
  const [index, setIndex] = useState(0);
  const [newPipe, setNewPipe] = useState({});
  const [isAdd, setIsAdd] = useState(false);

  useEffect(() => {
    console.log(rendered);
    if (rendered.length === 1) {
      setIndex(rendered[0].schedules.indexOf(schedule));
    } else {
      setIndex(-1);
    }
  }, [rendered]);

  useEffect(() => {
    console.log(index);
    if (index !== -1) {
      setValues((prev) => ({
        ...prev,
        wall_thickness: rendered[0].wall_thickness[index],
        inside_diameter: rendered[0].inside_diameter[index],
        metal: rendered[0].metal[index],
        flow: rendered[0].flow[index],
        outside: rendered[0].outside[index],
        inside: rendered[0].inside[index],
        gal: rendered[0].gal[index],
        water: rendered[0].water[index],
        weight: rendered[0].weight[index],
      }));
    }
  }, [index]);

  useEffect(() => {
    console.log(schedule);
    console.log(nominal);
    if (schedule || nominal) {
      setRendered(
        data.filter(
          (el) => el.schedules.includes(schedule) && el.pipe_size === nominal
        )
      );
    } else if (schedule === "" && nominal === "") {
      setRendered(data);
    }
  }, [schedule, nominal]);

  return (
    <div className="w-full flex flex-col gap-5 px-10 relative items-center">
      {isAdd && <AddPipe/>}
      <div className="w-full flex flex-col gap-5 p-8 bg-slate-400 rounded-lg">
        <h1 className="flex items-center gap-5 text-slate-900 font-semibold">
          Material Type: <span className="font-semibold bg-slate-300 px-6 py-1 rounded-full font-Inter text-slate-900">Steel Pipe</span>
        </h1>

        <h1 className="w-[300px] flex items-center gap-5 text-slate-900 font-semibold">
          Length:{" "}
          <span>
            <input
              type="text"
              onChange={(e) => {
                setLength(e.target.value);
              }}
              className="p-2 border-[1px] border-slate-500 rounded-xl bg-slate-200"
              placeholder="Length (m)"
            />
          </span>
        </h1>

        <h1 className="w-[300px] flex items-center gap-5">
          Roughness:{" "}
          <span>
            <input
              type="text"
              onChange={(e) => {
                setRoughness(parseFloat(e.target.value) / 39.37);
              }}
              className="p-2 border-[1px] border-slate-500 rounded-xl bg-slate-200"
              placeholder="Roughness"
            />
          </span>
        </h1>
      </div>
      <div className="flex w-full justify-between">
        <h1 className="flex items-center gap-5">
          Search:{" "}
          <span className="flex gap-2 items-center font-semibold font-Inter">
            Nominal:
            <span>
              <input
                type="text"
                onChange={(e) => {
                  setNominal(e.target.value);
                }}
              className="p-2 border-[1px] border-slate-500 rounded-xl bg-slate-200"
              placeholder="Search Nominal Pipe Size"

              />
            </span>
          </span>{" "}
          <span className="flex gap-2 items-center font-semibold font-Inter">
            Schedule:
            <span>
              <input
                type="text"
                onChange={(e) => {
                  setSchedule(e.target.value.toUpperCase());
                }}
              className="p-2 border-[1px] border-slate-500 rounded-xl bg-slate-200"
                placeholder="Search Schedule No."
              />
            </span>
          </span>{" "}
        </h1>
        <button className="font-Poppins bg-slate-400 px-3 py-1 rounded-full text-slate-900 font-semibold" onClick={()=>{setIsAdd(!isAdd)}}>Add +</button>
      </div>
      <div className="flex flex-col h-[550px]">
        <div className="w-full bg-slate-600 flex px-1 gap-2 justify-around text-white font-Inter font-semibold items-center">
          <h1 className="w-[8.33%] text-center">Nominal Pipe Size, in</h1>
          <h1 className="w-[8.33%] text-center">Outside Diameter, in</h1>
          <h1 className="w-[8.33%] text-center">Schedule No.</h1>
          <h1 className="w-[8.33%] text-center">Wall Thickness, in</h1>
          <h1 className="w-[8.33%] text-center">Inside Diameter, in</h1>
          <h1 className="w-[8.33%] text-center">Metal, in²</h1>
          <h1 className="w-[8.33%] text-center">Flow, ft²</h1>
          <h1 className="w-[8.33%] text-center">Outside</h1>
          <h1 className="w-[8.33%] text-center">Inside</h1>
          <h1 className="w-[8.33%] text-center">U.S. Gallon</h1>
          <h1 className="w-[8.33%] text-center">lb/h water</h1>
          <h1 className="w-[8.33%] text-center">Weight of Pipe lb/ft</h1>
        </div>
        <div className="bg-white w-full h-[500px] overflow-y-auto gap-2 flex flex-col">
          {rendered.map((item, i) => {
            return (
              <div className={"flex gap-5 w-full justify-around border-b-[1px] border-slate-200 items-center px-3 " + ((i % 2 === 0)?"bg-white": "bg-slate-200")}>
                <h1 className="w-[8.33%] font-semibold font-Inter flex justify-center flex-col items-center">{item.pipe_size}</h1>
                <h1 className="w-[8.33%] flex justify-center flex-col items-center">{item.outside_diameter}</h1>
                <div className="w-[8.33%] flex justify-center flex-col items-center">
                  {item.schedules.map((sched) => {
                    return <h1>{sched}</h1>;
                  })}
                </div>
                <div className="w-[8.33%] flex justify-center flex-col items-center">
                  {item.wall_thickness.map((sched) => {
                    return <h1>{sched}</h1>;
                  })}
                </div>
                <div className="w-[8.33%] flex justify-center flex-col items-center">
                  {item.inside_diameter.map((sched) => {
                    return <h1>{sched}</h1>;
                  })}
                </div>
                <div className="w-[8.33%] flex justify-center flex-col items-center">
                  {item.metal.map((sched) => {
                    return <h1>{sched}</h1>;
                  })}
                </div>
                <div className="w-[8.33%] flex justify-center flex-col items-center">
                  {item.flow.map((sched) => {
                    return <h1>{sched}</h1>;
                  })}
                </div>
                <div className="w-[8.33%] flex justify-center flex-col items-center">
                  {item.outside.map((sched) => {
                    return <h1>{sched}</h1>;
                  })}
                </div>
                <div className="w-[8.33%] flex justify-center flex-col items-center">
                  {item.inside.map((sched) => {
                    return <h1>{sched}</h1>;
                  })}
                </div>
                <div className="w-[8.33%] flex justify-center flex-col items-center">
                  {item.gal.map((sched) => {
                    return <h1>{sched}</h1>;
                  })}
                </div>
                <div className="w-[8.33%] flex justify-center flex-col items-center">
                  {item.water.map((sched) => {
                    return <h1>{sched}</h1>;
                  })}
                </div>
                <div className="w-[8.33%] flex justify-center flex-col items-center">
                  {item.weight.map((sched) => {
                    return <h1>{sched}</h1>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Pipe;
