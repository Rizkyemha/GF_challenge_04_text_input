// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.

// validasi dapat disesuaikan dengan kebutuhan
function validateInput(input, index) {
	const icon = document.getElementsByClassName(`question-mark`)[index];
	const hint = document.getElementsByClassName(`form-hint`)[index];

	if (input.validity.valid) {
		icon.src = "/img/question_mark_icon.svg";
		hint.classList.remove("error");
		input.classList.remove("error");
	} else {
		icon.src = "/img/question_mark_error_icon.svg";
		hint.classList.add("error");
		hint.innerText = "This is an error message.";
		input.classList.add("error");
	}
}

const options = (text, name, type, placeholder) => {
	return {
		text,
		name,
		type,
		placeholder,
	};
};

// bisa ditambahkan image sesuai kebutuhan
// properti harus sama dengan options.name baris 21
const imgSrcHandler = {
	"first-name": "/img/user_svgrepo.com.svg",
	"last-name": "/img/user_svgrepo.com.svg",
	email: "/img/email_icon.svg",
};

const imgRender = (imgSrc, name) => {
	return `
    <img src=${imgSrc} class="icon ${name}"/>
  `;
};

const Text_input = (options) => {
	const { text, name, type, placeholder } = options;
	const imgSrc = imgSrcHandler[name];

	return `
    <div class="form-group">
      <label for="input-${name}">${text}</label>
      <div class="form-input-container">
        ${imgSrc ? imgRender(imgSrc, name) : ""}
        <input id="input-${name}" name="input-${name}" placeholder=${placeholder} type=${type} ${
		!imgSrc ? "class=just-1-icon" : ""
	} />
        <img src="/img/question_mark_icon.svg" class="icon question-mark" />
      </div>
      <p class="form-hint">This is a hint text</p>
    </div>
  `;
};

// lebih bagus menggunakan create html dari pada langsung return text html
// dikarenakan sebelum return, kita dapat menyisipkan event handler seperti validasi, popup hint, dkk, dimasing masing input
// sehingga tidak perlu menggunakan query selectorall seperti pada baris 70

const form = () => {
	return `
  <form class="form">
    ${Text_input(options("First name", "first-name", "text", "Rizky"))}
    ${Text_input(options("Last name", "last-name", "text", "Mahendra"))}
    ${Text_input(options("Phone", "phone", "text", "+62"))}
    ${Text_input(options("Email", "email", "email", "name@email.com"))}
  </form>
  `;
};

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root-container");
	root.innerHTML = form();

	document.querySelectorAll("input").forEach((input, index) => {
		input.addEventListener("input", (e) => validateInput(input, index));
	});
});
