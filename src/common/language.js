// Get the user's preferred language from localStorage
let preferredLanguage = localStorage.getItem('preferredLanguage') || navigator.language.slice(0, 2) || 'en';

// Set the value of the language select dropdown to the user's preferred language
document.querySelector('#language-select').value = preferredLanguage;

// Handle language select dropdown changes
document.querySelector('#language-select').addEventListener('change', (event) => {
  // Get the selected language from the dropdown
  const selectedLanguage = event.target.value;

  // Store the selected language in localStorage
  localStorage.setItem('preferredLanguage', selectedLanguage);

  // Load the appropriate translation file
  // selectedLanguage + '.json'
  console.log('selected log ===> ', `src/localization/${selectedLanguage}.json`);
  fetch(`src/localization/${selectedLanguage}.json`)
    .then(response => response.json())
    .then(data => {
      // Replace text content with translations
      document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = data[key];
      });
    })
    .catch(error => console.error(error));
});

// Load the appropriate translation file
fetch(preferredLanguage + '.json')
  .then(response => response.json())
  .then(data => {
    // Replace text content with translations
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      element.textContent = data[key];
    });
  })
  .catch(error => console.error(error));
