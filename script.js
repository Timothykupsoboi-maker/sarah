const PASSWORD = "2407"; // 🔐 Your password here

function unlockGallery() {
  const input = document.getElementById("password").value;
  if (input === PASSWORD) {
    document.getElementById("password-section").style.display = "none";
    document.getElementById("gallery-section").style.display = "block";
  } else {
    alert("Wrong password, sweetheart 💔");
  }
}

// Lightbox logic
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll(".gallery img").forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});

function closeLightbox() {
  lightbox.style.display = "none";
  lightboxImg.src = "";
}

// Optional: Close on ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLightbox();
  }
});
