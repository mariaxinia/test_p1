import express from "express";
const petsRoutes: express.Application = express();
const fss = require("fs");
petsRoutes.use(express.json());

const dataPath = "./Details/data.json";

const savePetsData = (data: object) => {
  const stringifyData = JSON.stringify(data);
  fss.writeFileSync(dataPath, stringifyData);
};

const getPetsData = () => {
  const jsonData = fss.readFileSync(dataPath);
  return JSON.parse(jsonData);
};

// reading the data
petsRoutes.get("/data", (req: express.Request, res: express.Response) => {
  fss.readFile(dataPath, "utf8", (err: string, data: any) => {
    if (err) {
      throw err;
    }
    res.send(JSON.parse(data));
  });
});

//add
petsRoutes.post(
  "/data/addPet",
  (req: express.Request, res: express.Response) => {
    var existPets = getPetsData();
    var length = existPets.length;
    existPets[length] = req.body;
    savePetsData(existPets);
    res.send({ success: true, msg: "pets data added successfully" });
  }
);

// update
petsRoutes.put(
  "/data/updatePet/:id",
  (req: express.Request, res: express.Response) => {
    var existPets = getPetsData();
    fss.readFile(
      dataPath,
      "utf8",
      (err: string, data: any) => {
        const petId = req.params["id"];
        existPets[petId] = req.body;
        savePetsData(existPets);
        res.send(`pets with id ${petId} has been updated`);
      },
      true
    );
  }
);

//delete
petsRoutes.delete(
  "/data/deletePet/:id",
  (req: express.Request, res: express.Response) => {
    fss.readFile(
      dataPath,
      "utf8",
      (err: any, data: any) => {
        var existPets = getPetsData();
        const petId = req.params["id"];
        existPets.splice(petId, 1);
        savePetsData(existPets);
        res.send(`pets with id ${petId} has been deleted`);
      },
      true
    );
  }
);
module.exports = petsRoutes;
