document.addEventListener('DOMContentLoaded', function () {

    var programmingLanguages = ['Ruby', 'Java', 'Python', 'C++', 'JavaScript', 'Swift'];

    
    var languagesList = document.getElementById('programmingLanguagesList');

    
    for (var i = 0; i < programmingLanguages.length; i++) {
        var language = programmingLanguages[i];

        
        var listItem = document.createElement('li');

        
        listItem.textContent = language;

    
        languagesList.appendChild(listItem);
    }
});
