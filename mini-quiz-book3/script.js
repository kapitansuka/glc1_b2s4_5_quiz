const session1Questions = [
    {
        type: "mc",
        num: 1,
        question: "According to Acts 1:8, what is the promised result of the Holy Spirit coming upon believers?",
        options: { a: "They will receive a passport to heaven.", b: "They will receive power to be witnesses for Jesus.", c: "They will perform miracles daily." },
        correct: "b"
    },
    {
        type: "mc",
        num: 2,
        question: "Which of the following is true regarding the identity of the Holy Spirit?",
        options: { a: "He is an impersonal power.", b: "He is a mystical force.", c: "He is a Person with intellect, will, and emotions." },
        correct: "c"
    },
    {
        type: "mc",
        num: 3,
        question: "Jesus referred to the Holy Spirit as the \"Helper.\" What does the Greek word Paracletos mean?",
        options: { a: "One who comes alongside to assist and comfort with strength.", b: "One who dictates the law.", c: "Another of a different kind." },
        correct: "a"
    },
    {
        type: "mc",
        num: 4,
        question: "According to John 16:14, who does the Holy Spirit ultimately glorify?",
        options: { a: "Himself", b: "The Church", c: "Jesus" },
        correct: "c"
    },
    {
        type: "mc",
        num: 5,
        question: "In Ephesians 1:13-14, the Holy Spirit is described as doing what for the believer?",
        options: { a: "Giving them a new language.", b: "Sealing them as a pledge or guarantee of their inheritance.", c: "Healing all physical diseases." },
        correct: "b"
    },
    { type: "tf", num: 6, question: "The word \"Trinity\" is found in multiple places in the Bible.", correct: "False" },
    { type: "tf", num: 7, question: "The Holy Spirit possesses attributes that only God possesses, such as being eternal, omnipresent, omnipotent, and omniscient.", correct: "True" },
    { type: "tf", num: 8, question: "Being \"baptized by the Holy Spirit\" means God connects you and identifies you with Him and with the people of God (the church).", correct: "True" },
    { type: "tf", num: 9, question: "Christianity is primarily about what you do for God through your own effort.", correct: "False" },
    {
        type: "essay",
        num: 10,
        question: "Life Application: You have a habit you are trying to break but keep failing on your own strength. Based on Galatians 5:16-17, how does the Holy Spirit's role in sanctification practically apply to your daily struggle?"
    }
];

const session2Questions = [
    {
        type: "mc",
        num: 1,
        question: "What does the Greek word charismata mean in the context of spiritual gifts?",
        options: { a: "Gift of prophecy", b: "Gift of grace", c: "Gift of leadership" },
        correct: "b"
    },
    {
        type: "mc",
        num: 2,
        question: "What is the primary purpose of spiritual gifts?",
        options: { a: "To make a person proud of their abilities.", b: "To serve others and build up the Body of Christ for the common good.", c: "To compare spiritual maturity with others." },
        correct: "b"
    },
    {
        type: "mc",
        num: 3,
        question: "According to Ephesians 5:18, what is the nature of the instruction to \"be filled with the Spirit\"?",
        options: { a: "It is a one-time suggestion at salvation.", b: "It is a command in the present continuous tense, meaning to be continuously controlled.", c: "It is only required for church leaders." },
        correct: "b"
    },
    {
        type: "mc",
        num: 4,
        question: "Which of the following distinguishes the Fruit of the Spirit from the Gifts of the Spirit?",
        options: { a: "The Fruit is different for each believer, while the Gifts are the same.", b: "The Fruit is the same for all believers and develops progressively through obedience.", c: "The Fruit is for serving others, while Gifts are for personal character." },
        correct: "b"
    },
    {
        type: "mc",
        num: 5,
        question: "What does the lesson teach about the spiritual gift of prophecy today?",
        options: { a: "It is primarily predicting the future.", b: "It is primarily the act of declaring God's message and proclaiming already revealed truth.", c: "It no longer exists in any form." },
        correct: "b"
    },
    { type: "tf", num: 6, question: "Every believer is given the exact same spiritual gift.", correct: "False" },
    { type: "tf", num: 7, question: "A Spirit-filled life is empowered by the Holy Spirit and is characterized by boldness, joy, and faith.", correct: "True" },
    { type: "tf", num: 8, question: "Although the specific office of Apostle does not exist today, the work of apostleship continues through missionaries and church planters.", correct: "True" },
    { type: "tf", num: 9, question: "Having spiritual gifts automatically makes you a Spirit-filled believer.", correct: "False" },
    {
        type: "essay",
        num: 10,
        question: "Life Application: You want to serve your Dgroup effectively but are unsure of your spiritual gifts. What practical steps can you take this week to discover and validate the specific gifts the Holy Spirit has given you?"
    }
];

function renderQuestions(questions, containerId, prefix) {
    const container = document.getElementById(containerId);
    let html = '';

    questions.forEach(q => {
        const inputName = `${prefix}_q${q.num}`;
        html += `<div class="mb-6 question-block bg-white p-5 rounded-lg shadow-sm border border-gray-200" data-correct="${q.correct || ''}" data-name="${inputName}">`;
        html += `<p class="font-semibold mb-3 text-lg text-gray-800">${q.num}. ${q.question}</p>`;
        
        if (q.type === 'mc') {
            html += `<div class="space-y-3">`;
            for (const [key, value] of Object.entries(q.options)) {
                html += `<label class="flex items-start p-3 bg-gray-50 hover:bg-blue-50 rounded-lg cursor-pointer border border-transparent hover:border-blue-200 transition">
                    <input type="radio" name="${inputName}" value="${key}" required class="mt-1 mr-3 w-5 h-5 text-blue-600 focus:ring-blue-500">
                    <span class="text-gray-700 leading-tight"><span class="font-bold mr-1">${key})</span> ${value}</span>
                </label>`;
            }
            html += `</div>`;
        } else if (q.type === 'tf') {
            html += `<div class="flex space-x-6">
                <label class="flex items-center p-3 px-6 bg-gray-50 hover:bg-blue-50 rounded-lg cursor-pointer border border-transparent hover:border-blue-200 transition">
                    <input type="radio" name="${inputName}" value="True" required class="mr-3 w-5 h-5 text-blue-600 focus:ring-blue-500">
                    <span class="font-medium text-gray-700">True</span>
                </label>
                <label class="flex items-center p-3 px-6 bg-gray-50 hover:bg-blue-50 rounded-lg cursor-pointer border border-transparent hover:border-blue-200 transition">
                    <input type="radio" name="${inputName}" value="False" required class="mr-3 w-5 h-5 text-blue-600 focus:ring-blue-500">
                    <span class="font-medium text-gray-700">False</span>
                </label>
            </div>`;
        } else if (q.type === 'essay') {
            html += `<textarea name="${inputName}" required rows="5" class="w-full border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-inner" placeholder="Type your answer here..."></textarea>`;
        }
        
        html += `</div>`;
    });

    container.innerHTML = html;
}

renderQuestions(session1Questions, 'session1', 's1');
renderQuestions(session2Questions, 'session2', 's2');

document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent standard submission
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Disable button to prevent multiple submissions
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;
    submitBtn.classList.add('opacity-50', 'cursor-not-allowed');
    
    let score = 0;
    let totalScorable = 18;
    let details = [];

    // Score Session 1
    session1Questions.filter(q => q.type !== 'essay').forEach(q => {
        const val = formData.get(`s1_q${q.num}`);
        if (val === q.correct) {
            score++;
            details.push(`Session 1 Q${q.num}: Correct (${val})`);
        } else {
            details.push(`Session 1 Q${q.num}: Incorrect (Answered: ${val}, Correct: ${q.correct})`);
        }
    });

    // Score Session 2
    session2Questions.filter(q => q.type !== 'essay').forEach(q => {
        const val = formData.get(`s2_q${q.num}`);
        if (val === q.correct) {
            score++;
            details.push(`Session 2 Q${q.num}: Correct (${val})`);
        } else {
            details.push(`Session 2 Q${q.num}: Incorrect (Answered: ${val}, Correct: ${q.correct})`);
        }
    });

    const finalScoreText = `${score} / ${totalScorable}`;
    formData.set('Final Score', finalScoreText);
    formData.set('Results Details', details.join('\n'));
    
    // Update hidden fields just in case
    document.getElementById('finalScore').value = finalScoreText;
    document.getElementById('resultsDetails').value = details.join('\n');

    // --- REVEAL SCORE & MISTAKES IMMEDIATELY ---
    document.getElementById('submitContainer').classList.add('hidden');
    const overlay = document.getElementById('resultOverlay');
    overlay.classList.remove('hidden');
    
    // Scroll to top to see results
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    document.getElementById('scoreDisplay').textContent = `Your Score: ${finalScoreText}`;
    
    // Disable all inputs
    form.querySelectorAll('input, textarea').forEach(input => {
        input.disabled = true;
    });

    // Highlight correct/incorrect answers visually
    document.querySelectorAll('.question-block').forEach(block => {
        const correctAns = block.getAttribute('data-correct');
        const inputName = block.getAttribute('data-name');
        
        if (correctAns) {
            const userAns = formData.get(inputName);
            const feedbackP = document.createElement('p');
            feedbackP.className = 'mt-3 pt-3 border-t border-gray-100 font-semibold';
            
            if (userAns === correctAns) {
                feedbackP.classList.add('text-green-600');
                feedbackP.innerHTML = `✅ Correct! (Answer: ${correctAns})`;
                block.classList.add('border-green-300', 'bg-green-50');
            } else {
                feedbackP.classList.add('text-red-600');
                feedbackP.innerHTML = `❌ Incorrect. The correct answer was <strong>${correctAns}</strong>.`;
                block.classList.add('border-red-300', 'bg-red-50');
            }
            
            block.appendChild(feedbackP);
        }
    });

    // --- SUBMIT RESULTS IN BACKGROUND ---
    // Change standard URL to the AJAX endpoint required by FormSubmit
    const ajaxUrl = form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/');
    
    fetch(ajaxUrl, {
        method: "POST",
        headers: {
            'Accept': 'application/json'
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Submission successful:', data);
    })
    .catch(error => {
        console.error('Error submitting form in background:', error);
    });
});
