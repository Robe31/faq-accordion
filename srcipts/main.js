const UI = (() => {
    const dom = {
        list: document.querySelector('.faq__list'),
    }

    return {
        getUiElements: () => {
            return dom;
        }
    }
})();

const App = ((ui) => {
    const el = ui.getUiElements();

    function showAnswer(list) {
        list.addEventListener('click', (e) => {
            if(e.target.parentNode.classList.contains("faq__list__q")){
                e.target.parentNode.parentNode.classList.toggle('active');
            }
        })
    }
    return {
        init: () => {
            showAnswer(el.list)
        }
    }
})(UI);

App.init();
