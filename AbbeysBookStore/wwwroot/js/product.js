//const { data } = require("jquery");

var dataTable;

$(document).ready(function () {
    loadDataTable();
});


function loadDataTable() {
    let tableData;
    $.ajax({
        url: "/Admin/Product/GetAll"
    }).done(function (data) {
        tableData = data.data[0];
        console.log(tableData);
    });
    dataTable = $('#tblData').DataTable({
        "ajax": {
            "url": "/Admin/Product/GetAll"
        },
        "columns": [
            {
                "data": "imageUrl",
                "render": function (data) {
                    return `
                        <img src="${data}" width="100px" />
                    `;
                },
                "width": "14%"
            },
            { "data": "title", "width": "14%" },
            { "data": "isbn", "width": "14%" },
            {
                "data": "listPrice",
                "render": function (data) {
                    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'CAD' }).format(data);
                },
                "width": "14%"
            },
            { "data": "author", "width": "14%" },
            { "data": "category.name", "width": "14%" },
            {
                "data": "id",
                "render": function (data) {
                    return `
                            <div class="text-center">
                                <a href="/Admin/Product/Upsert/${data}" class="btn btn-success text-white" style="cursor:pointer">
                                    <i class="fas fa-edit"></i>&nbsp;
                                </a>
                                <a onclick=Delete("/Admin/Product/Delete/${data}") class="btn btn-danger text-white" style="cursor:pointer">
                                    <i class="fas fa-trash-alt"></i>&nbsp;
                                </a>
                            </div>
                            `;
                }, "width": "16%"
            }
        ]
    });
}

function Delete(url) {
    swal({
        title: "Are you sure you want to delete?",
        text: "You will not be able to restore the data!",
        icon: "warning",
        buttons: true,
        dangerMode: true
    }).then((willDelete) => {
        if (willDelete) {
            $.ajax({
                type: "DELETE",
                url: url,
                success: function (data) {
                    if (data.success) {
                        toastr.success(data.message);
                        dataTable.ajax.reload();
                    }
                    else {
                        toastr.error(data.message);
                    }
                }
            });
        }
    });
}