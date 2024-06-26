$(document).ready(function () {
    // Handle registration form submit
    $('#registration-form').submit(function (e) {
        e.preventDefault();
        // Your form submission logic
        alert('Đăng ký thành công!');
        $('#registerModal').modal('hide');

        // Show login modal after registration
        $('#registerModal').on('hidden.bs.modal', function () {
            $('#loginModal').modal('show');
            $('#registerModal').off('hidden.bs.modal');
        });
    });

    // Handle booking form submit
    $('#booking-form').submit(function (e) {
        e.preventDefault();
        // Get form data
        const name = $('#name').val();
        const phone = $('#phone').val();
        const address = $('#address').val();
        const bikeType = $('#bike-type').val();
        const rentalDays = $('#rental-days').val();
        const pickupDate = $('#pickup-date').val();

        // Store customer data in localStorage
        localStorage.setItem('bookingName', name);
        localStorage.setItem('bookingPhone', phone);
        localStorage.setItem('bookingAddress', address);
        localStorage.setItem('bookingBikeType', bikeType);
        localStorage.setItem('bookingRentalDays', rentalDays);
        localStorage.setItem('bookingPickupDate', pickupDate);

        // Show success alert
        alert('Đặt xe thành công!');

        // Redirect to customer-info.html
        window.location.href = 'ThongTinKH.html';
    });

    // Hiển thị nút "Back to Top" khi cuộn trang xuống 100px
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    // Cuộn lên đầu trang khi nhấp vào nút "Back to Top"
    $('#back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    // Chuyển hướng đến lienhe.html khi click vào nút Liên Hệ
    $('#contact-btn').click(function () {
        window.location.href = 'lienhe.html';
    });
});

// Hien thi icon chon xe may va tay ga
function toggleService() {
    window.location.href = "DichVu.html";
}

// //////
        $(document).ready(function () {
            $('#back-to-top').click(function () {
                $('html, body').animate({ scrollTop: 0 }, 'slow');
            });

            $(window).scroll(function () {
                if ($(window).scrollTop() > 300) {
                    $('#back-to-top').fadeIn();
                } else {
                    $('#back-to-top').fadeOut();
                }
            });

            $('a.nav-link').click(function (event) {
                event.preventDefault();
                var target = $(this).attr('href');
                if (target.startsWith("#")) {
                    $('html, body').animate({
                        scrollTop: $(target).offset().top
                    }, 'slow');
                } else {
                    window.location.href = target;
                }
            });

            // Initialize and add the map
            function initMap() {
                // The location
                const location = { lat: 10.0452, lng: 105.7469 };
                // The map, centered at the location
                const map = new google.maps.Map(document.getElementById("map"), {
                    zoom: 15,
                    center: location,
                });
                // The marker, positioned at the location
                const marker = new google.maps.Marker({
                    position: location,
                    map: map,
                });
            }

            // Load the map after the page has completely loaded
            window.initMap = initMap;
        });
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>