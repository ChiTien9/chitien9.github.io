$(document).ready(function() {
    $('.cart-quantity').each(function() {
        var $quantity = $(this);
        var price = parseFloat($quantity.closest('tr').find('td:nth-child(3)').text().replace('$', ''));
        var quantity = parseInt($quantity.val());
        var total = price * quantity;
        $quantity.closest('tr').find('.cart-item-total').text('$' + total.toFixed(2));
    });

    $('.cart-quantity').on('change', function() {
        var quantity = $(this).val();
        var price = parseFloat($(this).closest('tr').find('td:nth-child(3)').text().replace('$', ''));
        var total = quantity * price;
        $(this).closest('tr').find('.cart-item-total').text('$' + total.toFixed(2));
        updateCartTotal();
    });

    function updateCartTotal() {
        var total = 0;
        $('.cart-table tbody tr').each(function() {
            var rowTotal = parseFloat($(this).find('.cart-item-total').text().replace('$', ''));
            if (!isNaN(rowTotal)) total += rowTotal;
        });
        $('.cart-total').text('$' + total.toFixed(2));
    }

    updateCartTotal();

    $('.cart-remove').on('click', function() {
        $(this).closest('tr').remove();
        updateCartTotal();
    });
});