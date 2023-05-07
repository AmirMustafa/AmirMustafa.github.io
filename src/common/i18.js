// Initialize i18n with the options
i18n.init({
  lng: 'en', // Set the default language to English
  // Exclude the actual translations from this initialization
  resources: {}
}, function() {
  // Set the initial content of the page using the default language
  document.querySelector('#content').innerHTML = `
    <p>${i18n.t('translation.name')}, ${i18n.t('translation.header')}</p>
  `;
});

// Function to set the language and update the content of the page
function setLanguage(lang) {
  // Load the translations for the selected language /ar.js
  fetch(`./src/localization/${lang}.js`)
    .then(response => response.text())
    .then(text => {
      // Evaluate the text as JavaScript code to get the translations object
      const translations = eval(text);
      // Set the language using i18n's setLng function
      i18n.setLng(lang, function() {
        // Update the content of the page with the translations for the selected language
        document.querySelector('#content').innerHTML = `
          <p>${i18n.t('translation.name')}, ${i18n.t('translation.header')}</p>
        `;
      });
    });
}