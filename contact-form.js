document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  const scriptURL = "https://script.google.com/macros/s/AKfycbx0InkLYSumJbX2LklXqV-vokGg-Og6WGU0UT9qCtFiOvUBlXRCnwPFnWuL25R-MA3u/exec"; // replace with your URL

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // stop default reload

    const formData = new FormData(form); // FormData auto handles URL encoding

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData // NO headers needed
      });

      if (response.ok) {
        alert("✅ Message sent successfully!");
        form.reset();
      } else {
        alert("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      alert("⚠️ Network error. See console.");
      console.error("Error:", error);
    }
  });
});
