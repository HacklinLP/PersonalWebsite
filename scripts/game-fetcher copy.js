async function getGameImage() {
    const gameName = document.getElementById("game-name").textContent;

    const url = `https://personalsite-gameimgfetcher.lucas-petit.workers.dev?q=${encodeURIComponent(gameName)}`;
    const response = await fetch(url);

    const data = await response.json();

    const imageUrl = data.images_results?.[0]?.original ?? "No image found";

    document.getElementById("game-cover").src = imageUrl;
}

getGameImage();
