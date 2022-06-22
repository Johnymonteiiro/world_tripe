import { createServer, Model } from "miragejs";

export function MirageDb() {
  createServer({
    models: {
      continent: Model.extend({}),
    },

    seeds(server) {
      server.db.loadData({
        continents: [
          {
            id: "1",
            slug:"africa",
            name: "África",
            title: "O continente Berço da Humanidade",
            descriptions:
              "A África é o terceiro continente mais extenso do globo e o segundo mais populoso. Possui uma elevada diversidade religiosa e linguística distribuída por 54 países independentes que são governados, em sua maioria, por governos eleitos democraticamente.",
            banner: "/africaBanner1.jpg",
            banner2: "/africabanner2.jpeg",
            info: {
              number: 54,
              languages: 289,
              cyties: 88,
            },
            cyties: [
              {
                id: 1,
                name: "South Africa",
                flag: "/AfricaDoSulFlag.png",
                city: "Johannesburg",
                image: "/johannesburg.jpg",
              },
              {
                id: 2,
                name: "Angola",
                flag: "/angolaflag.jpg",
                city: "Luanda",
                image: "/luanda.jpg",
              },
              {
                id: 3,
                name: "Egito",
                flag: "/egitoFlag.jpg",
                city: "Cairo",
                image: "/cairo.png",
              },
              {
                id: 4,
                name: "Nigéria",
                flag: "/NigeriaFlag.png",
                city: "Lagos",
                image: "/Lagos_Nigeria.jpg",
              },
              {
                id: 5,
                name: "Marrocos",
                flag: "/marrocosFlag.jpg",
                city: "Rabat",
                image: "/marrocos.jpg",
              },
            ],
          },
          {
            id: "2",
            slug:"europa",
            name: "Europa",
            title: "O continente mais antigo",
            descriptions:
              "A Europa é por convenção um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais o rio Ural, o mar Cáspio, o Cáucaso e o mar Negro a sudeste.",
            banner: "/europaBanner2.jpg",
            banner2: "/Europabanner.png",
            info: {
              number: 50,
              languages: 60,
              cyties: 27,
            },
            cyties: [
              {
                id: 1,
                name: "Reino Unido",
                flag: "/londresFlag.svg",
                city: "Londres",
                image: "/londres.png",
              },
              {
                id: 2,
                name: "França",
                flag: "/parisFlag.svg",
                city: "Paris",
                image: "/paris.png",
              },
              {
                id: 3,
                name: "Itália",
                flag: "/italiFlag.svg",
                city: "Roma",
                image: "/italia.png",
              },
              {
                id: 4,
                name: "Holanda",
                flag: "/holandaFlag.svg",
                city: "Amsterdã",
                image: "/holanda.png",
              },
              {
                id: 5,
                name: "República Tcheca",
                flag: "/republicFlag.svg",
                city: "Prga",
                image: "/republuc.png",
              },
            ],
          },
          {
            id: "3",
            slug:"americadonorte",
            name: "America do Norte",
            title: "O continente mais subdesenvolvido",
            descriptions:
              "A América do Norte está localizada no extremo norte das Américas e é composta por apenas três países: Estados Unidos, Canadá e México, além de territórios de domínios europeus, como a Groelândia (pertencente ao Reino da Dinamarca, com representação no parlamento) e Bermudas (dependência britânica).",
            banner: "/americaDoNortebanner.jpg",
            banner2: "/norteamricaBanner2.jpg",
            info: {
              number: 4,
              languages: 272,
              cyties: 95,
            },
            cyties: [
              {
                id: 1,
                name: "Estados Unidos da América",
                flag: "/EuaFlag.png",
                city: "New York",
                image: "/newYork.jpg",
              },
              {
                id: 2,
                name: "Canada",
                flag: "/CanadaFlag.png",
                city: "Torronto",
                image: "/torronto.png",
              },
              {
                id: 3,
                name: "México",
                flag: "/mexicoFlag.jpg",
                city: "Cidade do México",
                image: "/mexico.jpg",
              },
              {
                id: 4,
                name: "Dinamarca",
                flag: "/DinamarcaFlag.png",
                city: "Lagos",
                image: "/dinamarca.jpg",
              },
            ],
          },
        ],
      });
    },

    routes() {
      this.namespace = '/api';

      this.get("/continents", () => {
        return this.schema.all("continent");
      });

      this.get("/continents/:id", (schema, request) => {
        let id = request.params.id
  
        return schema.db.continents.find(id)
      })
    },
  });
}
