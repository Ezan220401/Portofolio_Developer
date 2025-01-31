// document.addEventListener('DOMContentLoaded', () => {
//     alert("Selamat datang di portofolio saya!");
// });
document.querySelectorAll('.radio-navbar label').forEach(label => {
    label.addEventListener('click', () => {
      // Sembunyikan semua section
      document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
      });

      // Tampilkan section yang sesuai
      const targetId = label.getAttribute('data-target');
      document.querySelector(targetId).classList.add('active');
    });
  });