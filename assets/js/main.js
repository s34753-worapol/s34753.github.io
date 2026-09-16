/* =====================================================
   CARWASH WEBSITE
   MAIN JAVASCRIPT
===================================================== */


document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* ================= MOBILE MENU ================= */

        const menuButton =
            document.querySelector(
                ".menu-btn"
            );


        const navMenu =
            document.querySelector(
                ".nav-menu"
            );


        if (
            menuButton &&
            navMenu
        ) {

            menuButton.addEventListener(
                "click",
                function () {

                    navMenu.classList.toggle(
                        "open"
                    );

                }
            );

        }


        /* ================= CLOSE MENU ================= */

        const navLinks =
            document.querySelectorAll(
                ".nav-menu a"
            );


        navLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        if (navMenu) {

                            navMenu.classList.remove(
                                "open"
                            );

                        }

                    }
                );

            }
        );


        /* ================= CONTACT FORM ================= */

        const forms =
            document.querySelectorAll(
                "form"
            );


        forms.forEach(
            function (form) {

                form.addEventListener(
                    "submit",
                    function (event) {

                        event.preventDefault();


                        alert(
                            "ส่งข้อมูลเรียบร้อยแล้ว!\n\nทีมงานจะติดต่อกลับโดยเร็วที่สุด"
                        );


                        form.reset();

                    }
                );

            }
        );


        /* ================= HEADER SCROLL ================= */

        const header =
            document.querySelector(
                "header"
            );


        window.addEventListener(
            "scroll",
            function () {

                if (!header) return;


                if (
                    window.scrollY > 50
                ) {

                    header.style.boxShadow =
                        "0 5px 25px rgba(0,0,0,.12)";

                } else {

                    header.style.boxShadow =
                        "0 3px 20px rgba(0,0,0,.07)";

                }

            }
        );


    }
);
