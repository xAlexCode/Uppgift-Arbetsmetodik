let podcasts = {};

if (import.meta.env.DEV) {
  const module = await import("./data/podcasts.json"); // Laddar in JSON filen dynamiskt i Dev mode
  podcasts = module.default;
} else {
  podcasts = await fetch(
    "https://api.sr.se/api/v2/programs/index?programcategoryid=133&format=json&pagination=false&indent=true&filter=program.archived&filterValue=false",
  ) // Använder riktiga API när npm run build körts
    .then((data) => data.json())
    .then((json) => json)
    .catch((error) => {
      console.error("nått blev fel:", error);
      return null;
    });
}

export async function getPodcasts() {
  return podcasts;
}

export default getPodcasts;
