const UI = (() => {
    const dom = {
        faqImg: document.querySelector('#img__src'),
    }

    return {
        getUiElements: () => {
            return dom;
        }
    }
})();

const App = ((ui) => {
    const uiEl = ui.getUiElements();

    
    return {
        init: () => {
            
        }
    }
})(UI);

App.init();
