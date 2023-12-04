const my_keys_content = document.querySelector(".my-keys-content");
const sign_content = document.querySelector(".sign-content");
const verify_sign_content = document.querySelector(".verify-sign-content");
const encrypt_content = document.querySelector(".encrypt-content");
const decrypt_content = document.querySelector(".decrypt-content");
const settings_content = document.querySelector(".settings-content");

const my_keys_item = document.querySelector(".my-keys-item");
const sign_item = document.querySelector(".sign-item");
const verify_sign_item = document.querySelector(".verify-sign-item");
const encrypt_item = document.querySelector(".encrypt-item");
const decrypt_item = document.querySelector(".decrypt-item");
const settings_item = document.querySelector(".settings-item");

const my_keys = `
<div class="my-sec-keys">
    <h3 class="my-sec-keys-table-title table-title">Мои приватные ключи</h3>
    <table class="my-sec-keys-table">
        <tr>
            <td class="attribute" id="key">Ключ</td>
            <td class="attribute" id="name">Имя</td>
            <td class="attribute" id="expires">Истекает через</td>
        </tr>
        <tr>
            <td id="key">AAAA-BBBB-CCCC</td>
            <td id="name">Алиса1</td>
            <td id="expires">330 дней 18 часов 10 минут</td>
        </tr>
        <tr>
            <td id="key">AAAA-BBBB-CCCC</td>
            <td id="name">Алиса1</td>
            <td id="expires">330 дней 18 часов 10 минут</td>
        </tr>
        <tr>
            <td id="key">AAAA-BBBB-CCCC</td>
            <td id="name">Алиса1</td>
            <td id="expires">330 дней 18 часов 10 минут</td>
        </tr>
    </table>
</div>
<div class="my-pub-keys">
    <h3 class="my-sec-keys-table-title table-title">Мои публичные ключи</h3>
    <table class="my-sec-keys-table">
        <tr>
            <td class="attribute" id="key">Ключ</td>
            <td class="attribute" id="name">Имя</td>
            <td class="attribute" id="expires">Истекает через</td>
        </tr>
        <tr>
            <td id="key">AAAA-BBBB-CCCC</td>
            <td id="name">Алиса1</td>
            <td id="expires">330 дней 18 часов 10 минут</td>
        </tr>
        <tr>
            <td id="key">AAAA-BBBB-CCCC</td>
            <td id="name">Алиса1</td>
            <td id="expires">330 дней 18 часов 10 минут</td>
        </tr>
        <tr>
            <td id="key">AAAA-BBBB-CCCC</td>
            <td id="name">Алиса1</td>
            <td id="expires">330 дней 18 часов 10 минут</td>
        </tr>
    </table>
</div>
`

function unselectAllItems() {
    my_keys_item.classList.remove("selected-item");
    sign_item.classList.remove("selected-item");
    verify_sign_item.classList.remove("selected-item");
    encrypt_item.classList.remove("selected-item");
    decrypt_item.classList.remove("selected-item");
    settings_item.classList.remove("selected-item");
}

function hideAllContent() {
    my_keys_content.style.display = "none";
    sign_content.style.display = "none";
    verify_sign_content.style.display = "none";
    encrypt_content.style.display = "none";
    decrypt_content.style.display = "none";
    settings_content.style.display = "none";

    unselectAllItems();
}

my_keys_item.addEventListener("click", (e) => {
    hideAllContent();
    e.target.classList.add("selected-item");
    my_keys_content.style.display = "block";
})

sign_item.addEventListener("click", (e) => {
    hideAllContent();
    e.target.classList.add("selected-item");
    sign_content.style.display = "block";
})

verify_sign_item.addEventListener("click", (e) => {
    hideAllContent();
    e.target.classList.add("selected-item");
    verify_sign_content.style.display = "block";
})

encrypt_item.addEventListener("click", (e) => {
    hideAllContent();
    e.target.classList.add("selected-item");
    encrypt_content.style.display = "block";
})

decrypt_item.addEventListener("click", (e) => {
    hideAllContent();
    e.target.classList.add("selected-item");
    decrypt_content.style.display = "block";
})

settings_item.addEventListener("click", (e) => {
    hideAllContent();
    e.target.classList.add("selected-item");
    settings_content.style.display = "block";
})

hideAllContent();
settings_item.classList.add("selected-item");
settings_content.style.display = "block";

document.querySelector(".add-my-keys-button").addEventListener("click", (e) => {
    e.target.parentElement.innerHTML = my_keys
})