$(document).ready(function () {
    function loadUserData() {
        var userData = JSON.parse(localStorage.getItem('userData') || '{}');
        if (userData.fullName) $('#fullNameDisplay').text(userData.fullName);
        if (userData.email) $('#emailDisplay').text(userData.email);
        if (userData.phone) $('#phoneDisplay').text(userData.phone);
    }

    if (window.location.pathname.includes('accountinfo.html')) {
        loadUserData();
    }

    if (window.location.pathname.includes('accountsettings.html')) {
        var userData = JSON.parse(localStorage.getItem('userData') || '{}');
        if (userData.fullName) $('#fullName').val(userData.fullName);
        if (userData.email) $('#email').val(userData.email);
        if (userData.phone) $('#phone').val(userData.phone);

        $('#accountForm').on('submit', function (e) {
            e.preventDefault();

            var fullName = $('#fullName').val();
            var email = $('#email').val();
            var phone = $('#phone').val();

            var updatedUserData = {
                fullName: fullName,
                email: email,
                phone: phone
            };

            localStorage.setItem('userData', JSON.stringify(updatedUserData));

            alert(
                'Thông tin đã được lưu:\n' +
                'Họ và tên: ' + fullName + '\n' +
                'Email: ' + email + '\n' +
                'Số điện thoại: ' + phone
            );

            window.location.href = 'accountinfo.html';
        });
    }

    window.searchProducts = function () {
        var query = $('#searchInput').val();
        if (query) {
            alert('Tìm kiếm: ' + query);
        }
    };
});
