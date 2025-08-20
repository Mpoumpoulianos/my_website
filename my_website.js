document.addEventListener("DOMContentLoaded", () => {
    const text = "Welcome to My Coding Themed Site";
    let index = 0;
    
    function type() {
        document.querySelector(".typing-effect").textContent = text.slice(0, index);
        index++;
        if (index <= text.length) {
            setTimeout(type, 100);
        }
    }
    
    type();
});
