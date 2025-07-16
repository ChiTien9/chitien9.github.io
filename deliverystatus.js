document.addEventListener('DOMContentLoaded', function () {
    let currentStatus = 20;
    const statuses = [
        { value: 20, text: "Đã tiếp nhận", update: "Đơn hàng của bạn đã được tiếp nhận." },
        { value: 40, text: "Đang xử lý", update: "Đơn hàng đang được xử lý tại kho." },
        { value: 60, text: "Đang giao hàng", update: "Gói hàng đang trên đường giao đến bạn." },
        { value: 80, text: "Đang giao đến", update: "Gói hàng đang được giao đến địa chỉ của bạn." },
        { value: 100, text: "Giao thành công", update: "Đơn hàng đã được giao thành công." }
    ];

    updateStatus(currentStatus);

    document.getElementById('refreshStatus').addEventListener('click', function () {
        currentStatus += 20;
        if (currentStatus > 100) currentStatus = 20;
        updateStatus(currentStatus);
    });

    function updateStatus(statusValue) {
        const status = statuses.find(s => s.value === statusValue);
        if (status) {
            const progressBar = document.querySelector('.progress-bar');
            progressBar.style.width = `${status.value}%`;
            progressBar.setAttribute('aria-valuenow', status.value);
            progressBar.textContent = status.text;
            document.querySelector('.status-update').textContent = `Trạng thái cập nhật: ${status.update}`;
        } else {
            console.error('Status not found for value:', statusValue);
        }
    }
});