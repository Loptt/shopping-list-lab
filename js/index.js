function watchForm() {
    $('#form').on('submit', (event) => {
        event.preventDefault();
        let item = $('#item').val();
        $('#list').append(`
            <div class="shoppingItem">
                <p>${item}</p>
                <button class="checkButton">Check</button>
                <button class="deleteButton">Delete</button>
            </div>
        `);
        $('#item').val("");
    });
}

function watchItem() {
    $('#list').on('click', '.checkButton', function(event) {
        let decoration = "";
        if ($(this).parent().find('p').css('text-decoration').split(" ")[0] == 'none') {
            decoration = 'line-through';
        } else {
            decoration = 'none';
        }
        $(this).parent().find('p').css('text-decoration', decoration);
    });

    $('#list').on('click', '.deleteButton', function(event) {
        $(this).parent().remove();
    });
}

function init() {
    watchForm();
    watchItem();
}

init();