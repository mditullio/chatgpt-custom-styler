// content.js

(function () {

    document.addEventListener('readystatechange', () => {

        /** @type HTMLDivElement */
        const leftColumn = document.querySelector('div.flex-shrink-0.overflow-x-hidden.bg-token-sidebar-surface-primary');

        if (leftColumn) {
            /** @type MutationObserverInit */
            const observerConfig = {
                attributes: true,
                attributeFilter: ['style'],
            };

            const setLeftColumnWidth = () => {
                if (leftColumn.style.width == '260px') {
                    leftColumn.style.width = '400px';

                    /** @type HTMLDivElement */
                    const chatHistory = leftColumn.firstChild;
                    chatHistory.classList.remove('w-[260px]');
                }
            }

            setLeftColumnWidth();
            const observer = new MutationObserver(setLeftColumnWidth);
            observer.observe(leftColumn, observerConfig);
        }

    });

})();
