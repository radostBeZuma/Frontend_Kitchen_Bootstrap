document.addEventListener('DOMContentLoaded', () => {


    const headerModule = (function () {

        function _debounce(func, wait, immediate) {
            let timeout;
            return function() {
                let context = this, args = arguments;
                let later = function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                let callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        }

        const _adaptiveHandler = _debounce(function(headerEl, navItemsEl) {
            let header = document.querySelector(headerEl);
            let navItems = document.querySelector(navItemsEl);

            document.body.style.paddingTop = header.clientHeight + 5 + 'px';
            navItems.style.top = header.clientHeight + 'px';
        }, 60);

        const adaptiveMenu = function (el1, el2) {
            _adaptiveHandler(el1, el2);

            window.onresize = function(){
                _adaptiveHandler(el1, el2);
            };
        }

        const showAndCloseMenu = function (element, burger, closeBtn) {
            let elTop = document.querySelector(element);

            elTop.addEventListener('click', function () {
                const toggler = this.querySelector(burger);
                const close = this.querySelector(closeBtn);

                if (close.classList.contains('show')) {
                    close.classList.remove('show');
                    toggler.classList.remove('hide');
                }
                else {
                    close.classList.add('show');
                    toggler.classList.add('hide');
                }
            });
        }

        return  {
            adaptiveMenu: adaptiveMenu,
            showAndCloseMenu: showAndCloseMenu
        }

    })();

    headerModule.adaptiveMenu('.js-header', '.js-header-nav-item');
    headerModule.showAndCloseMenu('.js-header-navbar-toggler', '.navbar-toggler-icon', '.btn-close');
});
