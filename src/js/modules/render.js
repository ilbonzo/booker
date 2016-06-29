var bookTemplate = require('../../templates/bookResult.handlebars');

module.exports = {

    renderResult: function (result) {
        var resultEl = document.getElementById('search-result');
        resultEl.innerHTML = '<strong>wait</strong>';
        if (parseInt(result.totalItems) === 1) {
            resultEl.innerHTML = bookTemplate({
                'book': result.items[0].volumeInfo
            });
        } else {
            resultEl.innerHTML = '<strong>found 0 items</strong>';
        }
    }

};
