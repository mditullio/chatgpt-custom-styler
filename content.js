// content.js

(function () {

    document.addEventListener('readystatechange', () => {

        /** @type HTMLDivElement */
        const sidebar = document.querySelector('div.flex-shrink-0.overflow-x-hidden.bg-token-sidebar-surface-primary');

        if (sidebar) {
            /** @type MutationObserverInit */
            const observerConfig = {
                attributes: true,
                attributeFilter: ['style'],
            };

            const setSidebarWidth = () => {
                if (sidebar.style.width == '260px') {
                    sidebar.style.width = '400px';

                    /** @type HTMLDivElement */
                    const chatHistory = sidebar.firstChild;
                    chatHistory.classList.remove('w-[260px]');
                }
            }

            setSidebarWidth();
            const observer = new MutationObserver(setSidebarWidth);
            observer.observe(sidebar, observerConfig);
        }

    });

})();
