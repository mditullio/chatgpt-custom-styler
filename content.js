// content.js

(function () {

    let sidebarSelector = 'div.flex-shrink-0.overflow-x-hidden.bg-token-sidebar-surface-primary';

    /** @type HTMLDivElement */
    let sidebar = null;

    /** @type MutationObserver */
    let bodyObserver = null;

    /** @type MutationObserver */
    let sidebarObserver = null;

    /** Adapts sidebar width */
    const applyCustomStyles = () => {
        if (sidebar?.style.width == '260px') {
            sidebar.style.width = '400px';
            /** @type HTMLDivElement */
            const chatHistory = sidebar.firstChild;
            chatHistory.classList.remove('w-[260px]');
        }
    }

    /** Observe for body changes */
    const observeBody = () => {
        bodyObserver?.disconnect();
        applyCustomStyles();
        bodyObserver = new MutationObserver(observeSidebar);
        bodyObserver.observe(document.body, {
            childList: true
        });
    }

    /** Observe for sidebar changes */
    const observeSidebar = () => {
        sidebarObserver?.disconnect();
        sidebar = document.querySelector(sidebarSelector);
        applyCustomStyles();
        sidebarObserver = new MutationObserver(applyCustomStyles);
        sidebarObserver.observe(sidebar, {
            attributes: true,
            attributeFilter: ['style'],
        });
    }

    /** Initialize */
    document.addEventListener('readystatechange', () => {
        sidebar = document.querySelector(sidebarSelector);
        applyCustomStyles();
        observeBody();
        observeSidebar();
    });

})();
