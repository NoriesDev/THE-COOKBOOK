// const shareButton = document.querySelector("#shareButton");
// shareButton.addEventListener("click", () =>
//     alert(`Share this recipe with your friends: ${location.hostname}`)
// );
const shareAlert = document.getElementById("shareAlert");
const appendAlert = (message, type) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        "</div>",
    ].join("");

    shareAlert.append(wrapper);
};

const alertTrigger = document.getElementById("shareButton");
if (alertTrigger) {
    alertTrigger.addEventListener("click", () => {
        appendAlert(
            `Share this recipe with your friends: ${location.href}`,
            "success"
        );
    });
}
