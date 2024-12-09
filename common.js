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
            <div class="footer-note">
                <p>&copy; 2024 Efstathia Panagopoulou. All rights reserved.</p>
            </div>
        `;
    });
}

document.addEventListener('DOMContentLoaded', loadCommonComponents); 