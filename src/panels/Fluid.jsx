import React, { useEffect, useState } from "react";

const data = [
    {
        "name": "Acetic Acid",
        "formula": "CH₃COOH",
        "temperature": 25,
        "pressure": 0,
        "density": 1049,
        "viscosity": 1.127,
        "vapor_pressure": 1.1584,
        "velocity": 37.13,
        "state": "liquid"
    },
    {
        "name": "Acetone",
        "formula": "(CH₃)₂CO",
        "temperature": 25,
        "pressure": 0,
        "density": 784.6,
        "viscosity": 0.325,
        "vapor_pressure": 24.22,
        "velocity": 44.58,
        "state": "liquid"
    },
    {
        "name": "Acetonitrile",
        "formula": "C₂H₃N",
        "temperature": 20,
        "pressure": 0,
        "density": 782,
        "viscosity": 0.428,
        "vapor_pressure": 35.45,
        "velocity": 44.51,
        "state": "liquid"
    },
    {
        "name": "Alcohol, ethyl (ethanol)",
        "formula": "C₂H₅OH",
        "temperature": 25,
        "pressure": 0,
        "density": 785.1,
        "viscosity": 1.095,
        "vapor_pressure": 59.89,
        "velocity": 47.66,
        "state": "liquid"
    },
    {
        "name": "Alcohol, methyl (methanol)",
        "formula": "CH₃OH",
        "temperature": 25,
        "pressure": 0,
        "density": 786.5,
        "viscosity": 0.56,
        "vapor_pressure": 127.62,
        "velocity": 58.69,
        "state": "liquid"
    },
    {
        "name": "Alcohol, propyl",
        "formula": "C₃H₇OH",
        "temperature": 25,
        "pressure": 0,
        "density": 800,
        "viscosity": 1.92,
        "vapor_pressure": 0.014,
        "velocity": 61.85,
        "state": "liquid"
    },
    {
        "name": "Ammonia (aqua)",
        "formula": "NH₃",
        "temperature": 25,
        "pressure": 0,
        "density": 823.5,
        "viscosity": 0.327,
        "vapor_pressure": 53.58,
        "velocity": 56.43,
        "state": "liquid"
    },
    {
        "name": "Aniline",
        "formula": "C₆H₅NH₂",
        "temperature": 25,
        "pressure": 0,
        "density": 1019,
        "viscosity": 4.565,
        "vapor_pressure": 0.400,
        "velocity": 63.84,
        "state": "liquid"
    },
    {
        "name": "Benzene",
        "formula": "C₆H₆",
        "temperature": 25,
        "pressure": 0,
        "density": 873.8,
        "viscosity": 0.654,
        "vapor_pressure": 10.100,
        "velocity": 45.74,
        "state": "liquid"
    },
    {
        "name": "Bromine",
        "formula": "Br₂",
        "temperature": 25,
        "pressure": 0,
        "density": 3120,
        "viscosity": 0.997,
        "vapor_pressure": 22.330,
        "velocity": 79.17,
        "state": "liquid"
    },
    {
        "name": "Butyric Acid",
        "formula": "C₄H₈O₂",
        "temperature": 20,
        "pressure": 0,
        "density": 959,
        "viscosity": 0.331,
        "vapor_pressure": 0.009,
        "velocity": 43.85,
        "state": "liquid"
    },
    {
        "name": "Butane",
        "formula": "C₄H₁₀",
        "temperature": 25,
        "pressure": 0,
        "density": 599,
        "viscosity": 0.013,
        "vapor_pressure": 1.24,
        "velocity": 53.17,
        "state": "gas"
    },
    {
        "name": "n-Butyl Acetate",
        "formula": "C₆H₁₄O₂",
        "temperature": 20,
        "pressure": 0,
        "density": 880,
        "viscosity": 0.035,
        "vapor_pressure": 0.004,
        "velocity": 52.26,
        "state": "liquid"
    },
    {
        "name": "n-Butyl Alcohol",
        "formula": "C₄H₉OH",
        "temperature": 20,
        "pressure": 0,
        "density": 810,
        "viscosity": 0.033,
        "vapor_pressure": 0.012,
        "velocity": 51.58,
        "state": "liquid"
    },
    {
        "name": "n-Butyl Chloride",
        "formula": "C₄H₉Cl",
        "temperature": 20,
        "pressure": 0,
        "density": 886,
        "viscosity": 0.6,
        "vapor_pressure": 185.6,
        "velocity": 165.89,
        "state": "liquid"
    },
    {
        "name": "Caproic acid",
        "formula": "C₆H₁₂O₂",
        "temperature": 25,
        "pressure": 0,
        "density": 921,
        "viscosity": 70,
        "vapor_pressure": 0.09,
        "velocity": 78.27,
        "state": "liquid"
    },
    {
        "name": "Carbolic acid",
        "formula": "C₆H₅OH",
        "temperature": 15,
        "pressure": 0,
        "density": 956,
        "viscosity": 6.0,
        "vapor_pressure": 0.004,
        "velocity": 34.73,
        "state": "liquid"
    },
    {
        "name": "Carbon disulfide",
        "formula": "CS₂",
        "temperature": 25,
        "pressure": 0,
        "density": 1261,
        "viscosity": 0.366,
        "vapor_pressure": 144.9,
        "velocity": 100.29,
        "state": "liquid"
    },
    {
        "name": "Carbon tetrachloride",
        "formula": "CCl₄",
        "temperature": 25,
        "pressure": 0,
        "density": 1584,
        "viscosity": 0.979,
        "vapor_pressure": 91.9,
        "velocity": 176.24,
        "state": "liquid"
    },
    {
        "name": "Carene",
        "formula": "C₁₀H₁₆",
        "temperature": 25,
        "pressure": 0,
        "density": 857,
        "viscosity": 0.1,
        "vapor_pressure": 12.5,
        "velocity": 26.32,
        "state": "liquid"
    },
    {
        "name": "Castor oil",
        "formula": "N/A",
        "temperature": 25,
        "pressure": 0,
        "density": 956.1,
        "viscosity": 873,
        "vapor_pressure": "N/A",
        "velocity": "N/A",
        "state": "liquid"
    },
    {
        "name": "Chloride",
        "formula": "Cl₂",
        "temperature": 25,
        "pressure": 0,
        "density": 1560,
        "viscosity": "N/A",
        "vapor_pressure": 0.006,
        "velocity": 70.34,
        "state": "gas"
    },
    {
        "name": "Chlorobenzene",
        "formula": "C₆H₅Cl",
        "temperature": 20,
        "pressure": 0,
        "density": 1106,
        "viscosity": "N/A",
        "vapor_pressure": 10.5,
        "velocity": 47.08,
        "state": "liquid"
    },
    {
        "name": "Chloroform",
        "formula": "CHCl₃",
        "temperature": 20,
        "pressure": 0,
        "density": 1489,
        "viscosity": 0.567,
        "vapor_pressure": 125.7,
        "velocity": 85.07,
        "state": "liquid"
    },
    {
        "name": "Chloroform",
        "formula": "CHCl₃",
        "temperature": 25,
        "pressure": 0,
        "density": 1465,
        "viscosity": "N/A",
        "vapor_pressure": 178.4,
        "velocity": 102.42,
        "state": "liquid"
    },
    {
        "name": "Citric acid, 50% aqueous solution",
        "formula": "C₆H₈O₇",
        "temperature": 15,
        "pressure": 0,
        "density": 1220,
        "viscosity": "N/A",
        "vapor_pressure": 0.08,
        "velocity": 43.05,
        "state": "liquid"
    },
    {
        "name": "Coconut oil",
        "formula": "N/A",
        "temperature": 15,
        "pressure": 0,
        "density": 924,
        "viscosity": 80.000,
        "vapor_pressure": "N/A",
        "velocity": "N/A",
        "state": "liquid"
    },
    {
        "name": "Cresol",
        "formula": "C₇H₈O",
        "temperature": 25,
        "pressure": 0,
        "density": 1024,
        "viscosity": "N/A",
        "vapor_pressure": 0.23,
        "velocity": 45.17,
        "state": "liquid"
    },
    {
        "name": "Cumene",
        "formula": "C₉H₁₂",
        "temperature": 25,
        "pressure": 0,
        "density": 860,
        "viscosity": 2.70,
        "vapor_pressure": 10.2,
        "velocity": 41.38,
        "state": "liquid"
    },
    {
        "name": "Cyclohexane",
        "formula": "C₆H₁₂",
        "temperature": 20,
        "pressure": 0,
        "density": 779,
        "viscosity": 0.89,
        "vapor_pressure": 158.2,
        "velocity": 31.62,
        "state": "liquid"
    },
    {
        "name": "Cyclopentane",
        "formula": "C₅H₁₀",
        "temperature": 20,
        "pressure": 0,
        "density": 745,
        "viscosity": 0.22,
        "vapor_pressure": 517.6,
        "velocity": 39.36,
        "state": "liquid"
    },
    {
        "name": "Decane",
        "formula": "C₁₀H₂₂",
        "temperature": 25,
        "pressure": 0,
        "density": 726.3,
        "viscosity": 0.859,
        "vapor_pressure": 2.1,
        "velocity": 28.79,
        "state": "liquid"
    },
    {
        "name": "Diethyl ether",
        "formula": "C₄H₁₀O",
        "temperature": 20,
        "pressure": 0,
        "density": 714,
        "viscosity": 0.22,
        "vapor_pressure": 442,
        "velocity": 33.95,
        "state": "liquid"
    },
    {
        "name": "o-Dichlorobenzene",
        "formula": "C₆H₄Cl₂",
        "temperature": 20,
        "pressure": 0,
        "density": 1306,
        "viscosity": 2.04,
        "vapor_pressure": 1.42,
        "velocity": 50.95,
        "state": "liquid"
    },
    {
        "name": "Dichloromethane",
        "formula": "CH₂Cl₂",
        "temperature": 20,
        "pressure": 0,
        "density": 1326,
        "viscosity": 0.42,
        "vapor_pressure": 299,
        "velocity": 54.34,
        "state": "liquid"
    },
    {
        "name": "Diethylene glycol",
        "formula": "C₄H₁₀O₃",
        "temperature": 15,
        "pressure": 0,
        "density": 1120,
        "viscosity": 16.5,
        "vapor_pressure": 0.013,
        "velocity": 49.80,
        "state": "liquid"
    },
    {
        "name": "DimethylAcetamide",
        "formula": "C₄H₉NO",
        "temperature": 20,
        "pressure": 0,
        "density": 942,
        "viscosity": 0.95,
        "vapor_pressure": 0.17,
        "velocity": 39.81,
        "state": "liquid"
    },
    {
        "name": "N,N - Dimethylformamide",
        "formula": "N/A",
        "temperature": 20,
        "pressure": 0,
        "density": 949,
        "viscosity": 0.92,
        "vapor_pressure": 0.63,
        "velocity": 39.91,
        "state": "liquid"
    },
    {
        "name": "Dimethyl Sulfoxide",
        "formula": "C₂H₆OS",
        "temperature": 20,
        "pressure": 0,
        "density": 1100,
        "viscosity": 1.99,
        "vapor_pressure": 0.71,
        "velocity": 46.80,
        "state": "liquid"
    },
    {
        "name": "Dodecane",
        "formula": "C₁₂H₂₆",
        "temperature": 25,
        "pressure": 0,
        "density": 754.6,
        "viscosity": 1.374,
        "vapor_pressure": 0.0113,
        "velocity": 28.99,
        "state": "liquid"
    },
    {
        "name": "Ethane",
        "formula": "C₂H₆",
        "temperature": -89,
        "pressure": 0,
        "density": 570,
        "viscosity": 0.223,
        "vapor_pressure": 5.48,
        "velocity": 26.18,
        "state": "gas"
    },
    {
        "name": "Ether",
        "formula": "C₄H₁₀O",
        "temperature": 25,
        "pressure": 0,
        "density": 713.5,
        "viscosity": 0.224,
        "vapor_pressure": 378,
        "velocity": 39.88,
        "state": "liquid"
    },
    {
        "name": "Ethylamine",
        "formula": "C₂H₅NH₂",
        "temperature": 16,
        "pressure": 0,
        "density": 681,
        "viscosity": 0.421,
        "vapor_pressure": 48.4,
        "velocity": 37.48,
        "state": "liquid"
    },
    {
        "name": "Ethyl Acetate",
        "formula": "C₄H₈O₂",
        "temperature": 20,
        "pressure": 0,
        "density": 901,
        "viscosity": 0.405,
        "vapor_pressure": 71.8,
        "velocity": 43.02,
        "state": "liquid"
    },
    {
        "name": "Ethyl Alcohol",
        "formula": "C₂H₅OH",
        "temperature": 20,
        "pressure": 0,
        "density": 789,
        "viscosity": 1.074,
        "vapor_pressure": 43.9,
        "velocity": 42.07,
        "state": "liquid"
    },
    {
        "name": "Ethyl Ether",
        "formula": "C₄H₁₀O",
        "temperature": 20,
        "pressure": 0,
        "density": 713,
        "viscosity": 0.220,
        "vapor_pressure": 440,
        "velocity": 37.86,
        "state": "liquid"
    },
    {
        "name": "Ethylene Dichloride",
        "formula": "C₂H₄Cl₂",
        "temperature": 20,
        "pressure": 0,
        "density": 1253,
        "viscosity": 0.918,
        "vapor_pressure": 10.7,
        "velocity": 49.91,
        "state": "liquid"
    },
    {
        "name": "Ethylene glycol",
        "formula": "C₂H₆O₂",
        "temperature": 25,
        "pressure": 0,
        "density": 1097,
        "viscosity": 16.2,
        "vapor_pressure": 0.126,
        "velocity": 41.80,
        "state": "liquid"
    },
    {
        "name": "Freon (Fluorine)",
        "formula": "CCl₃F",
        "temperature": 25,
        "pressure": 0,
        "density": 1476,
        "viscosity": 0.42,
        "vapor_pressure": 218,
        "velocity": 60.26,
        "state": "gas"
    },
    {
        "name": "Freon - 11",
        "formula": "CCl₃F",
        "temperature": 21,
        "pressure": 0,
        "density": 1490,
        "viscosity": 0.87,
        "vapor_pressure": 280.4,
        "velocity": 61.25,
        "state": "gas"
    },
    {
        "name": "Freon - 21",
        "formula": "CHCl₂F",
        "temperature": 21,
        "pressure": 0,
        "density": 1370,
        "viscosity": 0.73,
        "vapor_pressure": 244.6,
        "velocity": 58.22,
        "state": "gas"
    },
    {
        "name": "Furan",
        "formula": "C₄H₄O",
        "temperature": 25,
        "pressure": 0,
        "density": 1416,
        "viscosity": 2.12,
        "vapor_pressure": 12.4,
        "velocity": 52.99,
        "state": "liquid"
    },
    {
        "name": "Furforol",
        "formula": "C₅H₄O₂",
        "temperature": 25,
        "pressure": 0,
        "density": 1155,
        "viscosity": 3.75,
        "vapor_pressure": 0.11,
        "velocity": 32.30,
        "state": "liquid"
    },
    {
        "name": "Glycerine",
        "formula": "C₃H₈O₃",
        "temperature": 25,
        "pressure": 0,
        "density": 1259,
        "viscosity": 950,
        "vapor_pressure": 0.0002,
        "velocity": 31.79,
        "state": "liquid"
    },
    {
        "name": "Glycerol",
        "formula": "C₃H₈O₃",
        "temperature": 25,
        "pressure": 0,
        "density": 1126,
        "viscosity": 1490,
        "vapor_pressure": 0.0002,
        "velocity": 39.92,
        "state": "liquid"
    },
    {
        "name": "Heptane",
        "formula": "C₇H₁₆",
        "temperature": 25,
        "pressure": 0,
        "density": 679.5,
        "viscosity": 0.376,
        "vapor_pressure": 44.4,
        "velocity": 29.12,
        "state": "liquid"
    },
    {
        "name": "Hexane",
        "formula": "C₆H₁₄",
        "temperature": 25,
        "pressure": 0,
        "density": 654.8,
        "viscosity": 0.297,
        "vapor_pressure": 92.3,
        "velocity": 47.99,
        "state": "liquid"
    },
    {
        "name": "Hexanol",
        "formula": "C₆H₁₄O",
        "temperature": 25,
        "pressure": 0,
        "density": 811,
        "viscosity": 2.02,
        "vapor_pressure": 0.36,
        "velocity": 18.23,
        "state": "liquid"
    },
    {
        "name": "Hexene",
        "formula": "C₆H₁₂",
        "temperature": 25,
        "pressure": 0,
        "density": 671,
        "viscosity": 0.34,
        "vapor_pressure": 175.5,
        "velocity": 87.42,
        "state": "liquid"
    },
    {
        "name": "Hydrazine",
        "formula": "N₂H₄",
        "temperature": 25,
        "pressure": 0,
        "density": 795,
        "viscosity": 0.55,
        "vapor_pressure": 6.6,
        "velocity": 13.42,
        "state": "liquid"
    },
    {
        "name": "Isobutyl Alcohol",
        "formula": "C₄H₁₀O",
        "temperature": 20,
        "pressure": 0,
        "density": 802,
        "viscosity": 1.62,
        "vapor_pressure": 0.44,
        "velocity": 10.36,
        "state": "liquid"
    },
    {
        "name": "Iso-Octane",
        "formula": "C₈H₁₈",
        "temperature": 20,
        "pressure": 0,
        "density": 692,
        "viscosity": 0.48,
        "vapor_pressure": 87.9,
        "velocity": 49.10,
        "state": "liquid"
    },
    {
        "name": "Isopropyl Alcohol",
        "formula": "C₃H₈O",
        "temperature": 20,
        "pressure": 0,
        "density": 785,
        "viscosity": 2.38,
        "vapor_pressure": 43.9,
        "velocity": 16.20,
        "state": "liquid"
    },
    {
        "name": "Isopropyl Myristate",
        "formula": "C₁₇H₃₄O₂",
        "temperature": 20,
        "pressure": 0,
        "density": 853,
        "viscosity": 7.26,
        "vapor_pressure": 0.001,
        "velocity": 2.11,
        "state": "liquid"
    },
    {
        "name": "Kerosene",
        "formula": "C₁₂H₂₆−C₁₅H₃₂",
        "temperature": 15.56,
        "pressure": 0,
        "density": 820.1,
        "viscosity": 1.64,
        "vapor_pressure": 5.25,
        "velocity": 2.76,
        "state": "liquid"
    },
    {
        "name": "Mercury",
        "formula": "Hg",
        "temperature": 0,
        "pressure": 0,
        "density": 13590,
        "viscosity": 1.53,
        "vapor_pressure": 0,
        "velocity": 0,
        "state": "liquid"
    },
    {
        "name": "Methane",
        "formula": "CH₄",
        "temperature": -164,
        "pressure": 0,
        "density": 465,
        "viscosity": 0.01107,
        "vapor_pressure": 0,
        "velocity": 0,
        "state": "gas"
    },
    {
        "name": "Methanol",
        "formula": "CH₃OH",
        "temperature": 20,
        "pressure": 0,
        "density": 791,
        "viscosity": 0.59,
        "vapor_pressure": 127.5,
        "velocity": 28.15,
        "state": "liquid"
    },
    {
        "name": "Methyl Isoamyl Ketone",
        "formula": "C₇H₁₄O",
        "temperature": 20,
        "pressure": 0,
        "density": 888,
        "viscosity": 0.42,
        "vapor_pressure": 1.05,
        "velocity": 1.46,
        "state": "liquid"
    },
    {
        "name": "Methyl Isobutyl Ketone",
        "formula": "C₆H₁₂O",
        "temperature": 20,
        "pressure": 0,
        "density": 801,
        "viscosity": 0.3,
        "vapor_pressure": 1.35,
        "velocity": 1.91,
        "state": "liquid"
    },
    {
        "name": "Methyl n-Propyl Ketone",
        "formula": "C₆H₁₂O",
        "temperature": 20,
        "pressure": 0,
        "density": 808,
        "viscosity": 0.3,
        "vapor_pressure": 1.25,
        "velocity": 1.90,
        "state": "liquid"
    },
    {
        "name": "Methyl t-Butyl Ether",
        "formula": "C₅H₁₂O",
        "temperature": 20,
        "pressure": 0,
        "density": 741,
        "viscosity": 0.22,
        "vapor_pressure": 3.47,
        "velocity": 24.09,
        "state": "liquid"
    },
    {
        "name": "N-Methylpyrrolidone",
        "formula": "C₅H₉NO",
        "temperature": 20,
        "pressure": 0,
        "density": 1030,
        "viscosity": 1.7,
        "vapor_pressure": 0.11,
        "velocity": 8.27,
        "state": "liquid"
    },
    {
        "name": "Methyl Ethyl Ketone",
        "formula": "C₄H₈O",
        "temperature": 20,
        "pressure": 0,
        "density": 805,
        "viscosity": 0.46,
        "vapor_pressure": 3.7,
        "velocity": 13.47,
        "state": "liquid"
    },
    {
        "name": "Napthalene",
        "formula": "C₁₀H₈",
        "temperature": 25,
        "pressure": 0,
        "density": 820,
        "viscosity": 0.24,
        "vapor_pressure": 0.13,
        "velocity": 17.28,
        "state": "liquid"
    },
    {
        "name": "Nitric acid",
        "formula": "HNO₃",
        "temperature": 0,
        "pressure": 0,
        "density": 1560,
        "viscosity": 2.4,
        "vapor_pressure": 1.26,
        "velocity": 8.16,
        "state": "liquid"
    },
    {
        "name": "Octane",
        "formula": "CH₃(CH₂)₆CH₃",
        "temperature": 15,
        "pressure": 0,
        "density": 698.6,
        "viscosity": 0.51,
        "vapor_pressure": 42.2,
        "velocity": 26.53,
        "state": "liquid"
    },
    {
        "name": "Pentane",
        "formula": "C₅H₁₂",
        "temperature": 20,
        "pressure": 0,
        "density": 626,
        "viscosity": 0.23,
        "vapor_pressure": 355,
        "velocity": 90.44,
        "state": "liquid"
    },
    {
        "name": "Pentane",
        "formula": "C₅H₁₂",
        "temperature": 25,
        "pressure": 0,
        "density": 625,
        "viscosity": 0.21,
        "vapor_pressure": 430,
        "velocity": 102.17,
        "state": "liquid"
    },
    {
        "name": "Perchlorethylene",
        "formula": "C₂Cl₄",
        "temperature": 20,
        "pressure": 0,
        "density": 1620,
        "viscosity": 0.85,
        "vapor_pressure": 14.2,
        "velocity": 5.43,
        "state": "liquid"
    },
    {
        "name": "Phenol",
        "formula": "C₆H₅OH",
        "temperature": 25,
        "pressure": 0,
        "density": 1072,
        "viscosity": 8.0,
        "vapor_pressure": 0.005,
        "velocity": 0.16,
        "state": "liquid"
    },
    {
        "name": "Phosgene",
        "formula": "COCl₂",
        "temperature": 0,
        "pressure": 0,
        "density": 1378,
        "viscosity": 0.37,
        "vapor_pressure": 188,
        "velocity": 2.62,
        "state": "gas"
    },
    {
        "name": "Propane",
        "formula": "C₃H₈",
        "temperature": -40,
        "pressure": 0,
        "density": 493.5,
        "viscosity": 0.11,
        "vapor_pressure": 146,
        "velocity": 47.19,
        "state": "gas"
    },
    {
        "name": "Propane, R-290",
        "formula": "C₃H₈",
        "temperature": 25,
        "pressure": 0,
        "density": 494,
        "viscosity": 0.013,
        "vapor_pressure": 586,
        "velocity": 343.11,
        "state": "gas"
    },
    {
        "name": "Propanol",
        "formula": "C₃H₈O",
        "temperature": 25,
        "pressure": 0,
        "density": 804,
        "viscosity": 2.4,
        "vapor_pressure": 4.1,
        "velocity": 2.76,
        "state": "liquid"
    },
    {
        "name": "Propylene Carbonate",
        "formula": "C₄H₆O₃",
        "temperature": 20,
        "pressure": 0,
        "density": 1201,
        "viscosity": 4.42,
        "vapor_pressure": 0.002,
        "velocity": 0.38,
        "state": "liquid"
    },
    {
        "name": "Propylene",
        "formula": "C₃H₆",
        "temperature": 25,
        "pressure": 0,
        "density": 514.4,
        "viscosity": 0.09,
        "vapor_pressure": 289,
        "velocity": 334.41,
        "state": "gas"
    },
    {
        "name": "Propylene glycol",
        "formula": "C₃H₈O₂",
        "temperature": 25,
        "pressure": 0,
        "density": 965.3,
        "viscosity": 57,
        "vapor_pressure": 0.03,
        "velocity": 0.06,
        "state": "liquid"
    },
    {
        "name": "Pyridine",
        "formula": "C₅H₅N",
        "temperature": 25,
        "pressure": 0,
        "density": 979,
        "viscosity": 0.88,
        "vapor_pressure": 1.02,
        "velocity": 0.17,
        "state": "liquid"
    },
    {
        "name": "Pyrrole",
        "formula": "C₄H₅N",
        "temperature": 25,
        "pressure": 0,
        "density": 966,
        "viscosity": 2.5,
        "vapor_pressure": 0.91,
        "velocity": 6.13,
        "state": "liquid"
    },
    {
        "name": "Resorcinol",
        "formula": "C₆H₆O₂",
        "temperature": 25,
        "pressure": 0,
        "density": 1269,
        "viscosity": 4.5,
        "vapor_pressure": 0.02,
        "velocity": 0.03,
        "state": "liquid"
    },
    {
        "name": "Sorbaldehyde",
        "formula": "C₄H₆O₂",
        "temperature": 25,
        "pressure": 0,
        "density": 895,
        "viscosity": 3.0,
        "vapor_pressure": 0.84,
        "velocity": 0.43,
        "state": "liquid"
    },
    {
        "name": "Sulfuric Acid 95% onc.",
        "formula": "H₂SO₄",
        "temperature": 20,
        "pressure": 0,
        "density": 1839,
        "viscosity": 26.7,
        "vapor_pressure": 1.07,
        "velocity": 0.40,
        "state": "liquid"
    },
    {
        "name": "Sulfurous acid",
        "formula": "H₂SO₃",
        "state": "liquid"
    },
    {
        "name": "Sulfurous acid",
        "formula": "H₂SO₃",
        "temperature": -20,
        "pressure": 0,
        "density": 1490,
        "viscosity": 2,
        "vapor_pressure": 187,
        "velocity": 0.78,
        "state": "liquid"
    },
    {
        "name": "Styrene",
        "formula": "C₈H₈",
        "temperature": 25,
        "pressure": 0,
        "density": 903,
        "viscosity": 0.9,
        "vapor_pressure": 22.2,
        "velocity": 0.58,
        "state": "liquid"
    },
    {
        "name": "Terpinene",
        "formula": "C₁₀H₁₆",
        "temperature": 25,
        "pressure": 0,
        "density": 847,
        "viscosity": 1.2,
        "vapor_pressure": 0.43,
        "velocity": 0.26,
        "state": "liquid"
    },
    {
        "name": "Tetrahydrofuran",
        "formula": "C₄H₈O",
        "temperature": 20,
        "pressure": 0,
        "density": 888,
        "viscosity": 0.45,
        "vapor_pressure": 180,
        "velocity": 0.94,
        "state": "liquid"
    },
    {
        "name": "Toluene",
        "formula": "C₇H₈",
        "temperature": 20,
        "pressure": 0,
        "density": 867,
        "viscosity": 0.55,
        "vapor_pressure": 22.3,
        "velocity": 52.18,
        "state": "liquid"
    },
    {
        "name": "Trichlorethylene",
        "formula": "C₂HCl₃",
        "temperature": 20,
        "pressure": 0,
        "density": 1470,
        "viscosity": 0.65,
        "vapor_pressure": 103,
        "velocity": 28.94,
        "state": "liquid"
    },
    {
        "name": "Triethylamine",
        "formula": "C₆H₁₅N",
        "temperature": 20,
        "pressure": 0,
        "density": 728,
        "viscosity": 0.28,
        "vapor_pressure": 19.3,
        "velocity": 36.14,
        "state": "liquid"
    },
    {
        "name": "Turpentine",
        "formula": "N/A",
        "temperature": 25,
        "pressure": 0,
        "density": 868.2,
        "viscosity": 1.375,
        "vapor_pressure": 2.46,
        "velocity": 5.13,
        "state": "liquid"
    },
    {
        "name": "o-Xylene",
        "formula": "C₈H₁₀",
        "temperature": 20,
        "pressure": 0,
        "density": 880,
        "viscosity": 0.65,
        "vapor_pressure": 10.6,
        "velocity": 46.99,
        "state": "liquid"
    }
]

function Fluid({ setSubstance }) {
  const [rendered, setRendered] = useState(data);
  const [substanceInput, setSubstanceInput] = useState("");

  useEffect(() => {
    if (substanceInput) {
      setRendered(
        data.filter((el) => el.name.toLowerCase().includes(substanceInput.toLowerCase()))
      );
    } else {
      setRendered(data);
    }
  }, [substanceInput]);

  useEffect(() => {
    if (rendered.length === 1) {
      setSubstance(rendered[0]);
    }
  }, [rendered]);

  return (
    <div className="w-full flex flex-col gap-5 px-10">
      <h1 className="flex items-center text-slate-900 font-semibold gap-3">
        Substance:{" "}
        <span>
          <input
            type="text"
            onChange={(e) => {
              setSubstanceInput(e.target.value);
            }}
            className="p-2 border-[1px] border-slate-500 rounded-xl bg-slate-200"
              placeholder="Search Substance"
          />
        </span>
      </h1>
      <div className="flex flex-col h-[520px]">
        <div className="w-full bg-slate-600 flex justify-around items-center text-white font-semibold font-Poppins">
          <h1 className="w-[8.33%] text-center">Name</h1>
          <h1 className="w-[8.33%] text-center">Temperature</h1>
          <h1 className="w-[8.33%] text-center">Pressure</h1>
          <h1 className="w-[8.33%] text-center">Density</h1>
          <h1 className="w-[8.33%] text-center">Viscosity</h1>
          <h1 className="w-[8.33%] text-center">Vapor Pressure</h1>
          <h1 className="w-[8.33%] text-center">Velocity</h1>
          <h1 className="w-[8.33%] text-center">State</h1>
        </div>
        <div className="bg-white w-full h-[500px] overflow-y-auto px-4 py-2">
          {rendered.map((el, i) => {
            return (
              <div className={"w-full flex items-center justify-around border-b-[1px] border-slate-200 " + ((i % 2 === 0)?"bg-slate-200": "bg-white")}>
                <h1 className="w-[8.33%] text-center font-semibold">{el.name}</h1>
                <h1 className="w-[8.33%] text-center">{el.temperature}</h1>
                <h1 className="w-[8.33%] text-center">{el.pressure}</h1>
                <h1 className="w-[8.33%] text-center">{el.density}</h1>
                <h1 className="w-[8.33%] text-center">{el.viscosity}</h1>
                <h1 className="w-[8.33%] text-center">{el.vapor_pressure}</h1>
                <h1 className="w-[8.33%] text-center">{el.velocity}</h1>
                <h1 className="w-[8.33%] text-center">{el.state}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Fluid;
