module.exports = {

    renderResult: function(result) {
        var resultEl = document.getElementById('search-result');
        resultEl.innerHTML = '<strong>wait</strong>';
        if (parseInt(result.totalItems) === 1) {
            var html = '<strong>found ' + result.totalItems + ' items</strong>';
            html += '\
            <div>\
                <h3>' + result.items[0].volumeInfo.title + '</h3>\
                \
            </div>';
            resultEl.innerHTML = html;
        } else {
            resultEl.innerHTML = '<strong>found 0 items</strong>';
        }
    }

};
