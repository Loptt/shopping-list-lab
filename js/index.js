function watchForm() {
    $('#form').on('submit', (event) => {
        event.preventDefault();
        let item = $('#item').val();
        if (item === "") {
            console.log("Empty item");
            return;
        }
        $('#list').append(`
            <li class="shoppingItem">
                <p>${item}</p>
                <button class="checkButton btn btn-success">Check</button>
                <button class="deleteButton btn btn-danger">Delete</button>
            </li>
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