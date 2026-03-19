import { getPodcasts } from "./api.ts";
import type { IPodcast, IPodcastResponse } from "./types.ts"; // Importera interfacen

const podCastContainer = document.querySelector(
  ".podListContainer",
) as HTMLElement; // Säga att det är ett html-element annars klagar den på null

//let i = 0; kanske behöver senare

export async function createHtml() {
  const podCasts = (await getPodcasts()) as IPodcastResponse; // Lova ts att datan följer interfacet
  podCasts.programs.forEach((podcast: IPodcast) => {
    //Lägg till index igen senare
    const innerArticle = createInnerArticle();

    createImg();

    const textDiv = createTextDiv();

    createHeader();
    createP();
    createLink();

    function createInnerArticle() {
      const innerArticle = document.createElement("article");
      innerArticle.classList.add("podListSections");
      innerArticle.setAttribute("tabindex", "1");
      podCastContainer.appendChild(innerArticle);
      return innerArticle;
    }

    function createTextDiv() {
      const textDiv = document.createElement("div");
      textDiv.classList.add("podListContent");
      innerArticle.appendChild(textDiv);
      return textDiv;
    }

    function createLink() {
      const linkPlacement = document.createElement("a");
      const linkText = document.createTextNode("Lyssna här");
      linkPlacement.setAttribute("href", podcast.programurl); // inuti loopen behöver den inte index (program[i]) då den har tillgång till APIn
      linkPlacement.setAttribute("tabindex", "1");
      linkPlacement.appendChild(linkText);
      textDiv.appendChild(linkPlacement);
    }
    function createImg() {
      const imgPlacement = document.createElement("IMG");
      imgPlacement.setAttribute("src", podcast.socialimage);
      imgPlacement.setAttribute("width", "100");
      imgPlacement.setAttribute("height", "100");
      innerArticle.appendChild(imgPlacement);
    }

    function createP() {
      const descPlacement = document.createElement("p");
      const desc = document.createTextNode(podcast.description);
      descPlacement.appendChild(desc);
      textDiv.appendChild(descPlacement);
    }

    function createHeader() {
      const headerPlacement = document.createElement("h2");
      const programName = document.createTextNode(podcast.name);
      headerPlacement.appendChild(programName);
      textDiv.appendChild(headerPlacement);
    }
  });
}

export default createHtml;
