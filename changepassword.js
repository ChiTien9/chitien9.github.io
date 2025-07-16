        $(document).ready(function() {
            $('#accountForm').on('submit', function(e) {
                e.preventDefault();
                alert('Đổi mật khẩu thành công');
                window.location.href = 'accountinfo.html';
            });
        });