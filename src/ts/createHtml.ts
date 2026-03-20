import { getPodcasts } from "./api.ts";
import type { IPodcast, IPodcastResponse } from "./types.ts"; // Importera interfacen

const podCastContainer = document.querySelector(
  ".podListContainer",
) as HTMLElement; // Måste säga att det är ett html-element annars klagar den på null

function createInnerArticle(container: HTMLElement) {
  // Ligger utanför loopen därför skickas container in som en parameter
  const innerArticle = document.createElement("article");
  innerArticle.classList.add("podListSections");
  innerArticle.setAttribute("tabindex", "1");
  container.appendChild(innerArticle);
  return innerArticle;
}

function createTextDiv(innerArticle: HTMLElement) {
  // Ligger utanför loopen, därför skickas innerArticle in som parameter
  const textDiv = document.createElement("div");
  textDiv.classList.add("podListContent");
  innerArticle.appendChild(textDiv);
  return textDiv;
}

function createLink(podcast: IPodcast, textDiv: HTMLElement) {
  // Ligger utanför loopen, därför skickas både podcast och textDiv in.
  const linkPlacement = document.createElement("a");
  const linkText = document.createTextNode("Lyssna här");
  linkPlacement.setAttribute("href", podcast.programurl); // Behöver inget index eftersom podcast-objektet skickas in som parameter.
  linkPlacement.setAttribute("tabindex", "1");
  linkPlacement.appendChild(linkText);
  textDiv.appendChild(linkPlacement);
}
function createImg(podcast: IPodcast, innerArticle: HTMLElement) {
  // Ligger utanför loopen, därför skickas podcast och innerArticle in
  const imgPlacement = document.createElement("img");
  imgPlacement.setAttribute("src", podcast.socialimage);
  imgPlacement.setAttribute("width", "100");
  imgPlacement.setAttribute("height", "100");
  imgPlacement.alt = `Programbild för humorprogrammet ${podcast.name}`;
  innerArticle.appendChild(imgPlacement);
}

function createP(podcast: IPodcast, textDiv: HTMLElement) {
  // Ligger utanför loopen, därför skickas podcast och textDiv in
  const descPlacement = document.createElement("p");
  const desc = document.createTextNode(podcast.description);
  descPlacement.appendChild(desc);
  textDiv.appendChild(descPlacement);
}

function createHeader(podcast: IPodcast, textDiv: HTMLElement) {
  // Ligger utanför loopen, därför skickas podcast och textDiv in
  const headerPlacement = document.createElement("h2");
  const programName = document.createTextNode(podcast.name);
  headerPlacement.appendChild(programName);
  textDiv.appendChild(headerPlacement);
}

export async function createHtml() {
  const podCasts = (await getPodcasts()) as IPodcastResponse; // Lova ts att datan följer interfacet

  podCasts.programs.forEach((podcast: IPodcast) => {
    const innerArticle = createInnerArticle(podCastContainer);
    createImg(podcast, innerArticle);
    const textDiv = createTextDiv(innerArticle);
    createHeader(podcast, textDiv);
    createP(podcast, textDiv);
    createLink(podcast, textDiv);
  });
}

export default createHtml;
