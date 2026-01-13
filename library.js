// library.js | The only pure ai file in this whole website, i was lazy
// Close a <details> when its expanded content (non-summary area) is clicked.
// Also allow Esc to close any open <details>.

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('details').forEach(details => {
    details.addEventListener('click', (e) => {
      // Don't close if the summary was clicked (browser toggles it)
      if (e.target.closest('summary')) return;
      // If an interactive element was clicked, let it handle the event
      if (e.target.closest('a, button, input, textarea, select, label')) return;
      // Otherwise, close the details
      details.open = false;
    });
  });

  // Pressing Escape closes any open details
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('details[open]').forEach(d => d.open = false);
    }
  });
});
