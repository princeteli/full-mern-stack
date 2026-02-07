(function () {
  emailjs.init("Eb0wcVad2n4hT7Fpn"); // <-- Replace with your EmailJS user ID
})();

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm("service_ixq7jwv", "template_2vbv0bs", e.target).then(
    () => {
      alert("Message sent successfully!");
      e.target.reset();
    },
    (error) => {
      alert("Failed to send message, please try again.");
      console.error(error);
    }
  );
}
