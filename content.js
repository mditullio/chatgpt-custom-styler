// content.js

(function () {

    document.addEventListener("readystatechange", () => {
        
        setTimeout(() => {
            /** @type HTMLDivElement */
            const leftColumn = document.querySelector("div.flex-shrink-0.overflow-x-hidden.bg-token-sidebar-surface-primary");

            if (leftColumn) {
                leftColumn.style.width = "400px";

                /** @type HTMLDivElement */
                const chatHistory = leftColumn.firstChild;
                chatHistory.classList.remove("w-[260px]");
            }
        }, 1000);
    });

})();
