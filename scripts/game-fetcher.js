async function getGameImage() {
    const gameName = document.getElementById("game-name").textContent;

    const url = `https://personalsite-gameimgfetcher.lucas-petit.workers.dev?q=${encodeURIComponent(gameName)}`;
    const response = await fetch(url);
    const data = await response.json();

    let imageUrl = null;

    // Try knowledge graph header image
    if (data.knowledge_graph?.header_images?.length) {
        imageUrl = data.knowledge_graph.header_images[0].image;
    }

    // Try first web result thumbnail
    if (!imageUrl && data.knowledge_graph?.web_results?.length) {
        imageUrl = data.knowledge_graph.web_results[0].thumbnail;
    }

    // Try inline videos thumbnails
    if (!imageUrl && data.inline_videos?.length) {
        imageUrl = data.inline_videos[0].thumbnail;
    }

    // 4️⃣ Final fallback
    if (!imageUrl) imageUrl = "No image found";

    document.getElementById("game-cover").src = imageUrl;
}

getGameImage();
