import { getPodcasts } from "./api.ts";
import type { IPodcast, IPodcastResponse } from "./types.ts"; // Importera interfacen

const podcastContainer = document.querySelector(
  ".podListContainer",
) as HTMLElement; // Måste säga att det är ett html-element annars klagar den på null

function createPodcastArticle(container: HTMLElement) {
  // Ligger utanför loopen därför skickas container in som en parameter
  const podcastArticle = document.createElement("article");
  podcastArticle.classList.add("podListSections");
  container.appendChild(podcastArticle);
  return podcastArticle;
}

function createPodcastContent(podcastArticle: HTMLElement) {
  // Ligger utanför loopen, därför skickas podcastArticle in som parameter
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("podListContent");
  podcastArticle.appendChild(contentContainer);
  return contentContainer;
}

function createPodcastLink(podcast: IPodcast, contentContainer: HTMLElement) {
  // Ligger utanför loopen, därför skickas både podcast och contentContainer in.
  const podcastLink = document.createElement("a");
  const linkText = document.createTextNode("Lyssna här");
  podcastLink.setAttribute("href", podcast.programurl); // Behöver inget index eftersom podcast-objektet skickas in som parameter.
  podcastLink.appendChild(linkText);
  contentContainer.appendChild(podcastLink);
}
function createPodcastImage(podcast: IPodcast, podcastArticle: HTMLElement) {
  // Ligger utanför loopen, därför skickas podcast och innerArticle in
  const podcastImage = document.createElement("img");
  podcastImage.setAttribute("src", podcast.socialimage);
  podcastImage.setAttribute("width", "100");
  podcastImage.setAttribute("height", "100");
  podcastImage.alt = `Programbild för humorprogrammet ${podcast.name}`;
  podcastArticle.appendChild(podcastImage);
}

function createPodcastDescription(
  podcast: IPodcast,
  contentContainer: HTMLElement,
) {
  // Ligger utanför loopen, därför skickas podcast och contentContainer in
  const podcastDescription = document.createElement("p");
  const descriptionText = document.createTextNode(podcast.description);

  podcastDescription.appendChild(descriptionText);
  contentContainer.appendChild(podcastDescription);
}

function createPodcastTitle(podcast: IPodcast, contentContainer: HTMLElement) {
  // Ligger utanför loopen, därför skickas podcast och contentContainer in
  const podcastTitle = document.createElement("h2");
  const titleText = document.createTextNode(podcast.name);
  podcastTitle.appendChild(titleText);
  contentContainer.appendChild(podcastTitle);
}

export async function createHtml() {
  const podcastsResponse = (await getPodcasts()) as IPodcastResponse; // Lova ts att datan följer interfacet

  podcastsResponse.programs.forEach((podcast: IPodcast) => {
    // Behöver anropas i denna ordning
    const podcastArticle = createPodcastArticle(podcastContainer);
    createPodcastImage(podcast, podcastArticle);
    const contentContainer = createPodcastContent(podcastArticle);
    createPodcastTitle(podcast, contentContainer);
    createPodcastDescription(podcast, contentContainer);
    createPodcastLink(podcast, contentContainer);
  });
}

export default createHtml;
