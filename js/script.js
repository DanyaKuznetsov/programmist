let iframe = document.querySelector("iframe");
let wrapper = document.querySelector(".form-wrapper");
iframe.onload = function(){
    wrapper.classList.add("wrapper_active");
    setTimeout(() => {
        document.forms.order.reset ();
        wrapper.classList.remove("wrapper_active");
    }, 3000);
}
