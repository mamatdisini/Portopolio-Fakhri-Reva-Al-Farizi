document.addEventListener("DOMContentLoaded", function () {
    let copyrightDiv = document.createElement("div");
    copyrightDiv.id = "copyright";

    // Menambahkan class Tailwind
    copyrightDiv.classList.add("container", "flex", "flex-col", "items-center", "justify-center", "p-6", "mx-auto", "space-y-2", "sm:space-y-0", "sm:flex-row");

    // Teks Hak Cipta dalam Hex Encoding
    let copyrightText = decodeURIComponent("Copyright by Ai");

    copyrightDiv.innerHTML = copyrightText;

    let footer = document.getElementById("footer");
    if (footer) {
        footer.appendChild(copyrightDiv);
    } else {
        console.error("Elemen #footer tidak ditemukan!");
    }
});
