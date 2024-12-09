function loadCommonComponents() {
    document.querySelectorAll('.footer').forEach(footer => {
        footer.innerHTML = `
            <div class="contact-info">
                <p>Contact</p>
                <a href="https://www.linkedin.com/in/efi-panagopoulou" target="_blank">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://x.com/efipanagopoulo1" target="_blank">
                    <i class="fab fa-twitter-square"></i>
                </a>
            </div>
        `;
    });
}

document.addEventListener('DOMContentLoaded', loadCommonComponents); 