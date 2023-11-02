const searchInput = document.getElementById('search');
const questionList = document.getElementById('question-list');
const questions = Array.from(questionList.querySelectorAll('li'));

searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();

    questions.forEach(function (question) {
        const questionText = question.textContent.toLowerCase();

        if (questionText.includes(searchTerm)) {
            question.style.display = 'block';
        } else {
            question.style.display = 'none';
        }
    });
});
