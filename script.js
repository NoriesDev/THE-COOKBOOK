const shareButton = document.querySelector("#share-button");
shareButton.addEventListener("click", () =>
    alert(`Share this recipe with your friends: ${location.hostname}`)
);
