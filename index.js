import express from "express";
import cors from "cors";
// import ProvinceRouter from "./src/controllers/province-controller.js"
import ValidacionesHelper from "./src/helpers/validaciones-helper.js"

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let provinciasArray = [
    {
        "id": 1,
        "name": "Buenos Aires",
        "full_name": "Provincia de Buenos Aires",
        "latitude": -34.921389,
        "longitude": -57.954444,
        "display_order": 1
    },
    {
        "id": 2,
        "name": "Córdoba",
        "full_name": "Provincia de Córdoba",
        "latitude": -31.420083,
        "longitude": -64.188776,
        "display_order": 2
    },
    {
        "id": 3,
        "name": "Santa Fe",
        "full_name": "Provincia de Santa Fe",
        "latitude": -31.633333,
        "longitude": -60.7,
        "display_order": 3
    },
    {
        "id": 4,
        "name": "Mendoza",
        "full_name": "Provincia de Mendoza",
        "latitude": -32.890183,
        "longitude": -68.84405,
        "display_order": 4
    },
    {
        "id": 5,
        "name": "Tucumán",
        "full_name": "Provincia de Tucumán",
        "latitude": -26.808285,
        "longitude": -65.21759,
        "display_order": 5
    },
    {
        "id": 6,
        "name": "Entre Ríos",
        "full_name": "Provincia de Entre Ríos",
        "latitude": -31.73197,
        "longitude": -60.5238,
        "display_order": 6
    },
    {
        "id": 7,
        "name": "Salta",
        "full_name": "Provincia de Salta",
        "latitude": -24.782126,
        "longitude": -65.423198,
        "display_order": 7
    },
    {
        "id": 8,
        "name": "Misiones",
        "full_name": "Provincia de Misiones",
        "latitude": -27.42813,
        "longitude": -55.9475,
        "display_order": 8
    },
    {
        "id": 9,
        "name": "Chaco",
        "full_name": "Provincia de Chaco",
        "latitude": -27.451276,
        "longitude": -58.9866,
        "display_order": 9
    },
    {
        "id": 10,
        "name": "Corrientes",
        "full_name": "Provincia de Corrientes",
        "latitude": -27.4806,
        "longitude": -58.8341,
        "display_order": 10
    },
    {
        "id": 11,
        "name": "Santiago del Estero",
        "full_name": "Provincia de Santiago del Estero",
        "latitude": -27.783357,
        "longitude": -64.2648,
        "display_order": 11
    },
    {
        "id": 12,
        "name": "San Juan",
        "full_name": "Provincia de San Juan",
        "latitude": -31.5353,
        "longitude": -68.5247,
        "display_order": 12
    },
    {
        "id": 13,
        "name": "Jujuy",
        "full_name": "Provincia de Jujuy",
        "latitude": -24.185786,
        "longitude": -65.2995,
        "display_order": 13
    },
    {
        "id": 14,
        "name": "Río Negro",
        "full_name": "Provincia de Río Negro",
        "latitude": -41.133472,
        "longitude": -71.3103,
        "display_order": 14
    },
    {
        "id": 15,
        "name": "Formosa",
        "full_name": "Provincia de Formosa",
        "latitude": -24.788321,
        "longitude": -59.8135,
        "display_order": 15
    },
    {
        "id": 16,
        "name": "Neuquén",
        "full_name": "Provincia de Neuquén",
        "latitude": -38.9517,
        "longitude": -68.0591,
        "display_order": 16
    },
    {
        "id": 17,
        "name": "San Luis",
        "full_name": "Provincia de San Luis",
        "latitude": -33.301726,
        "longitude": -66.3378,
        "display_order": 17
    },
    {
        "id": 18,
        "name": "Catamarca",
        "full_name": "Provincia de Catamarca",
        "latitude": -28.4696,
        "longitude": -65.7852,
        "display_order": 18
    },
    {
        "id": 19,
        "name": "La Rioja",
        "full_name": "Provincia de La Rioja",
        "latitude": -29.4131,
        "longitude": -66.8555,
        "display_order": 19
    },
    {
        "id": 20,
        "name": "Chubut",
        "full_name": "Provincia de Chubut",
        "latitude": -43.2567,
        "longitude": -65.3609,
        "display_order": 20
    },
    {
        "id": 21,
        "name": "Tierra del Fuego, Antártida e Islas del Atlántico Sur",
        "full_name": "Provincia de Tierra del Fuego, Antártida e Islas del Atlántico Sur",
        "latitude": -54.8,
        "longitude": -68.3,
        "display_order": 21
    },
    {
        "id": 22,
        "name": "La Pampa",
        "full_name": "Provincia de La Pampa",
        "latitude": -36.6167,
        "longitude": -64.2833,
        "display_order": 22
    },
    {
        "id": 23,
        "name": "Santa Cruz",
        "full_name": "Provincia de Santa Cruz",
        "latitude": -51.6226,
        "longitude": -69.2181,
        "display_order": 23
    },
    {
        "id": 24,
        "name": "Sistema de Baja California",
        "full_name": "Sistema de Baja California",
        "latitude": -26.0,
        "longitude": -56.0,
        "display_order": 24
    }
];

// app.use("/api/province", ProvinceRouter);

app.get("/api/province", (req, res) => {
    res.status(200).send(provinciasArray)
});

app.get("/api/province/:id", (req, res) => {
    const id = ValidacionesHelper.getIntegerOrDefault(req.params.id, 0)
    const response = provinciasArray.find(element => element.id === id)
    response ? res.status(200).send(response) : res.status(404).send(`No existe una provincia con el id: ${id}`);
})

app.post("/api/province", (req, res) => {
    try {
        const name = ValidacionesHelper.getStringOrDefault(req.body.name, '');
        const fullName = ValidacionesHelper.getStringOrDefault(req.body.full_name, 0);
        const latitude = ValidacionesHelper.getIntegerOrDefault(req.body.latitude, '');
        const longitude = ValidacionesHelper.getIntegerOrDefault(req.body.longitude, '');
        const displayOrder = ValidacionesHelper.getIntegerOrDefault(req.body.display_order, '');
        const id = provinciasArray[provinciasArray.length - 1].id + 1
        provinciasArray.push({
            "id": id, 
            "name": name,
            "full_name": fullName, 
            "latitude": latitude, 
            "longitude": longitude, 
            "display_order": displayOrder
        });
        res.status(201).send('Created (201)');
    } catch (error) {
        res.status(400).send(`Ocurrio un error: ${error}`)
    }
})

app.put('/api/province', (req, res) => {
    const id = ValidacionesHelper.getIntegerOrDefault(req.body.id, 0)
    const index = provinciasArray.findIndex(element => element.id === id)
    if(index != -1){
        try {
            let name = ValidacionesHelper.getStringOrDefault(req.body.name, '').length > 0 ? ValidacionesHelper.getStringOrDefault(req.body.name, '') : provinciasArray[index].name;
            let fullName = ValidacionesHelper.getStringOrDefault(req.body.full_name, '').length > 0 ? ValidacionesHelper.getStringOrDefault(req.body.full_name, '') : provinciasArray[index].full_name
            let latitude = ValidacionesHelper.getIntegerOrDefault(req.body.latitude, '').length > 0 ? ValidacionesHelper.getIntegerOrDefault(req.body.latitude, '') : provinciasArray[index].latitude
            let longitude = ValidacionesHelper.getIntegerOrDefault(req.body.longitude, '').length > 0 ? ValidacionesHelper.getIntegerOrDefault(req.body.longitude, '') : provinciasArray[index].longitude
            let displayOrder = ValidacionesHelper.getIntegerOrDefault(req.body.display_order, '').length > 0 ? ValidacionesHelper.getIntegerOrDefault(req.body.display_order, '') : provinciasArray[index].display_order
            provinciasArray.splice(index, 1, {
                "id": id, 
                "name": name,
                "full_name": fullName,
                "latitude": latitude,
                "longitude": longitude,
                "display_order": displayOrder
            });
            res.status(201).send('Created (201)');
        } catch (error) {
            res.status(400).send(`Ocurrio un error: ${error}`)
        }
    }
    else{ res.status(404).send(`No existe una provincia con el id: ${id}`) }
})


app.delete('/api/province/:id', (req, res) => {
    const id = ValidacionesHelper.getIntegerOrDefault(req.params.id, 0)
    const index = provinciasArray.findIndex((element) => element.id === id);

    if(index === -1){
        res.status(404).send(`No existe una provincia con el id: ${id}`);
        return;
    }
    else{
        provinciasArray.splice(index, 1);
        res.status(200).send('Provincia encontrada y eliminada! (200)')
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})