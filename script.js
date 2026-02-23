function goSection(id) {
  var target = document.getElementById(id);
  if (!target) return;
  target.scrollIntoView({ behavior: 'smooth' });
}
