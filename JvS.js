document.getElementById('submitFeedback').addEventListener('click', function() {
    const feedbackText = document.getElementById('feedbackText').value;
    if (feedbackText) {
        const testimonialList = document.querySelector('.testimonial-list');
        const newTestimonial = document.createElement('div');
        newTestimonial.classList.add('testimonial');
        newTestimonial.innerHTML = `<p>"${feedbackText}" - Anonymous</p>
                                    <button class="edit-feedback" onclick="editFeedback(this)">Edit Feedback</button>`;
        testimonialList.appendChild(newTestimonial);
        document.getElementById('feedbackText').value = ''; // Clear the textarea
    }
});

function editFeedback(button) {
    const testimonialText = button.previousElementSibling.innerText.replace(/\"(.*)\"/, '$1');
    document.getElementById('feedbackText').value = testimonialText; // Populate textarea with current feedback
    button.parentElement.remove(); // Remove the current testimonial
}
