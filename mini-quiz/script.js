const session4Questions = [
    {
        type: "mc",
        num: 1,
        question: "According to the Sermon on the Mount in Matthew 6, which of the following is a discipline Jesus expects His followers to practice?",
        options: { a: "Building physical churches", b: "Giving (generosity)", c: "Memorizing scripture" },
        correct: "b"
    },
    {
        type: "mc",
        num: 2,
        question: "Why does the Bible include more verses on money than on prayer and love combined?",
        options: { a: "Because money is an exact index to a person's true character.", b: "Because money is the root of all evil.", c: "Because the early church needed to fund missions." },
        correct: "a"
    },
    {
        type: "mc",
        num: 3,
        question: "What did the rich young ruler's response to Jesus reveal about his heart?",
        options: { a: "He loved God more than his wealth.", b: "He made an idol out of his wealth and violated the greatest commandment.", c: "He was ready to give everything to the poor." },
        correct: "b"
    },
    {
        type: "mc",
        num: 4,
        question: "The principle of tithing was practiced in the Old Testament even before the Law of Moses by whom?",
        options: { a: "David", b: "Paul", c: "Abraham" },
        correct: "c"
    },
    {
        type: "mc",
        num: 5,
        question: "According to 2 Corinthians 9:7, what kind of giver pleases God?",
        options: { a: "A reluctant giver", b: "A cheerful giver", c: "A wealthy giver" },
        correct: "b"
    },
    { type: "tf", num: 6, question: "Salvation must be earned through good works, but rewards in heaven are a free gift.", correct: "False" },
    { type: "tf", num: 7, question: "Jesus abolished the practice of tithing in the New Testament.", correct: "False" },
    { type: "tf", num: 8, question: "Giving is a way to receive God's blessings, as stated in Luke 6:38.", correct: "True" },
    { type: "tf", num: 9, question: "The primary purpose of the tithe is to put God first in our lives.", correct: "True" },
    {
        type: "essay",
        num: 10,
        question: "Life Application: You recently received a bonus at work and have already faithfully set aside your standard 10% tithe. According to the \"My Giving Journey\" section, how can you practice further generous giving, and what should your motivation be?"
    }
];

const session5Questions = [
    {
        type: "mc",
        num: 1,
        question: "What is the Biblical definition of a \"witness\"?",
        options: { a: "A legal expert who knows the entire Bible.", b: "Someone who recounts what they have personally seen and heard.", c: "A designated church leader." },
        correct: "b"
    },
    {
        type: "mc",
        num: 2,
        question: "According to Luke 19:10, what was Jesus' primary priority when He came to earth?",
        options: { a: "To seek those who are lost.", b: "To heal all physical diseases.", c: "To overthrow the government." },
        correct: "a"
    },
    {
        type: "mc",
        num: 3,
        question: "What are the three steps to sharing your faith outlined in the session?",
        options: { a: "Preach, Convert, Save", b: "Pray, Care, Share", c: "Teach, Correct, Rebuke" },
        correct: "b"
    },
    {
        type: "mc",
        num: 4,
        question: "In the \"One-Minute Witness\" tool, what does the \"A.D.\" portion of your story represent?",
        options: { a: "After Death", b: "Anno Domini (the positive change Christ made in your life)", c: "Absolute Devotion" },
        correct: "b"
    },
    {
        type: "mc",
        num: 5,
        question: "According to the \"Best Decision\" booklet, what is the ONLY solution to man's sin problem that separates him from God?",
        options: { a: "Good works", b: "Religion", c: "Jesus Christ" },
        correct: "c"
    },
    { type: "tf", num: 6, question: "To be a witness, you must know enough about the Bible to answer every theological question people might ask.", correct: "False" },
    { type: "tf", num: 7, question: "God’s desire is that no one should perish, but that all should come to repentance.", correct: "True" },
    { type: "tf", num: 8, question: "Good works are the means to salvation, not just the evidence of it.", correct: "False" },
    { type: "tf", num: 9, question: "The first step in sharing the One-Minute Witness is asking for \"Permission.\"", correct: "True" },
    {
        type: "essay",
        num: 10,
        question: "Life Application: You have a friend who is going through a difficult time but isn't very open to spiritual conversations yet. Based on the \"Pray, Care, Share\" approach, how would you practically apply the \"Care\" step this week to eventually open the door for the \"Share\" step?"
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

renderQuestions(session4Questions, 'session4', 's4');
renderQuestions(session5Questions, 'session5', 's5');

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

    // Score Session 4
    session4Questions.filter(q => q.type !== 'essay').forEach(q => {
        const val = formData.get(`s4_q${q.num}`);
        if (val === q.correct) {
            score++;
            details.push(`Session 4 Q${q.num}: Correct (${val})`);
        } else {
            details.push(`Session 4 Q${q.num}: Incorrect (Answered: ${val}, Correct: ${q.correct})`);
        }
    });

    // Score Session 5
    session5Questions.filter(q => q.type !== 'essay').forEach(q => {
        const val = formData.get(`s5_q${q.num}`);
        if (val === q.correct) {
            score++;
            details.push(`Session 5 Q${q.num}: Correct (${val})`);
        } else {
            details.push(`Session 5 Q${q.num}: Incorrect (Answered: ${val}, Correct: ${q.correct})`);
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
