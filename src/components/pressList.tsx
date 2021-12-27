import * as React from "react"
import Text from "./text"

const PressList = () => {
  const allPress = [
    {
      node: {
        id: "88cd631a-f669-5342-a74e-e1175a890a19",
        data: {
          description: {
            text: "Le lundi 15 mars, le Frac Nouvelle-Aquitaine MÉCA de Bordeaux a invité Cultea à visiter l’exposition Memoria ",
          },
          url: {
            url: "https://cultea.fr/memoria-recits-dune-autre-histoire-lexposition-actuelle-du-frac-nouvelle-aquitaine-meca-a-bordeaux.html",
          },
          sitename: {
            text: "Cultea",
          },
        },
      },
    },
    {
      node: {
        id: "0f581395-d732-583b-a7f6-a5452d8ccf5d",
        data: {
          description: {
            text: "Retrouvez ART au féminin sur Google Podcast",
          },
          url: {
            url: "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy85NDgzZGY4L3BvZGNhc3QvcnNz",
          },
          sitename: {
            text: "Google Podcast",
          },
        },
      },
    },
    {
      node: {
        id: "1ffe6a7d-0863-5e89-9c01-08a90a762218",
        data: {
          description: {
            text: "Retrouvez ART au féminin sur Podtail",
          },
          url: {
            url: "https://podtail.com/fi/podcast/art-au-feminin/",
          },
          sitename: {
            text: "Podtail",
          },
        },
      },
    },
    {
      node: {
        id: "1b480d5b-d0f4-570e-b3e4-f4d5c3d3b9de",
        data: {
          description: {
            text: 'Le musée d\'Art moderne de Paris célèbre avec "The Power of my hands" les femmes artistes d’Afrique et de la diaspora',
          },
          url: {
            url: "https://www.francetvinfo.fr/monde/afrique/culture-africaine/le-musee-d-art-moderne-de-paris-celebre-avec-the-power-of-my-hands-les-femmes-artistes-dafrique-et-de-la-diaspora_4718991.html",
          },
          sitename: {
            text: "France Tv",
          },
        },
      },
    },
    {
      node: {
        id: "6359dd98-01ff-5713-bb91-15acb445df6f",
        data: {
          description: {
            text: "Apparition d'ART au féminin ",
          },
          url: {
            url: "https://pantherepremiere.org/texte/la-peinture-apres-la-fin-de-la-peinture/",
          },
          sitename: {
            text: "Panthère Première",
          },
        },
      },
    },
    {
      node: {
        id: "22811171-efc6-5a9b-b91c-6ff11d77df34",
        data: {
          description: {
            text: "Pour le tout premier Hors-Série de ART au féminin, j'ai eu la chance d'être interviewée par Aldjia fondatrice et animatrice du podcast ART au féminin",
          },
          url: {
            url: "https://www.amylee.fr/podcast-art-feminin/",
          },
          sitename: {
            text: "Amylee",
          },
        },
      },
    },
  ]

  return (
    <div>
      <ul className="py-12">
        {allPress.map((press) => {
          return (
            <div className="w-1/2 m-auto py-4 leading-6">
              <li className="flex">
                <Text as="h3">
                  <a
                    href={press.node.data.url.url}
                    className="text-lg text-blue-500 mb-4"
                  >
                    {press.node.data.sitename.text}
                  </a>
                  : {press.node.data.description.text}
                </Text>
              </li>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default PressList
