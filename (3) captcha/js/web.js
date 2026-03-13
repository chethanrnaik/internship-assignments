
    const form = document.getElementById("myForm");
    const captchaSection = document.getElementById("captchaSection");
    const captchaText = document.getElementById("captchaText");
    const captchaInput = document.getElementById("captchaInput");

    let step = 1;
    let generatedCaptcha = "";

    function generateCaptcha() {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let captcha = "";
      for (let i = 0; i < 5; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return captcha;
    }

    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent page reload

      if (step === 1) {
        // Show captcha and third input field
        generatedCaptcha = generateCaptcha();
        captchaText.textContent = generatedCaptcha;
        captchaSection.classList.remove("hidden");
        step = 2;
      } 
      else if (step === 2) {
        // Validate captcha
        if (captchaInput.value === generatedCaptcha) {
          alert("Submitted successfully");
        } else {
          alert("Invalid captcha");
        }
      }
    });
  