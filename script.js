class Keyboard {
  constructor(inputFieldId, keyboardId) {
    this.inputField = document.getElementById(inputFieldId);
    this.keyboard = document.getElementById(keyboardId);
    this.capsLockEnabled = false;
    this.keyboardKeys = [
      ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "=", "-", "BackSpace"],
      ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
      ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
      ["z", "x", "c", "v", "b", " ", "n", "m", ",", ".", "/", "Langs"],
    ];
    // ДЛЯ ПОЯВЛЕНИЯ КЛАВИАТУРЫ
    this.inputField.addEventListener("focus", () => {
      this.keyboard.style.display = "block";
    });
    // ДЛЯ СКРЫТИЯ КЛАВИАТУРЫ ПРИ КЛИКЕ НА ЛЮБОЕ СВОБОДНОЕ МЕСТО КРОМЕ ИНПУТА И КЛАВИАТУРЫ
    // document.addEventListener("click", (item) => {
    //   if (
    //     item.target !== this.inputField &&
    //     !this.keyboard.contains(item.target)
    //   ) {
    //     this.keyboard.style.display = "none";
    //   }
    // });

    this.createKeyboard();
  }
  // ОТРИСОВККА КЛАВИАТУРЫ
  createKeyboard() {
    this.keyboard.innerHTML = "";

    this.keyboardKeys.forEach((row) => {
      const keyboardRow = document.createElement("div");
      keyboardRow.classList.add("keyboard-row");

      row.forEach((key) => {
        const keyElement = document.createElement("div");
        keyElement.classList.add("key");

        if (key === "BackSpace" && key === "CapsLock") {
          keyElement.classList.add("key-wide");
        } else if (key === " ") {
          keyElement.classList.add("key-space");
        }
        keyElement.textContent = key;
        keyElement.addEventListener("click", () => this.handleKeyClick(key));

        keyboardRow.appendChild(keyElement);
      });

      this.keyboard.appendChild(keyboardRow);
    });
  }

  handleKeyClick(key) {
    // СТИРАЕМ ПОСЛЕДНИЙ СИМВОЛ В ИНПУТЕ
    if (key === "BackSpace") {
      this.inputField.value = this.inputField.value.slice(0, -1);
    } else if (key === "CapsLock") {
      this.capsLockEnabled = !this.capsLockEnabled;
      this.createKeyboard();
    } else {
      let keyToAdd = key;
      if (key.length === 1) {
        keyToAdd = this.capsLockEnabled ? key.toUpperCase() : key.toLowerCase();
      }
      this.inputField.value += keyToAdd;
    }
  }
}

const keyboard = new Keyboard("openKeyboard", "keyboard");

// [
//   ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "=", "-", "BackSpace"],
//   [
//     "й",
//     "ц",
//     "у",
//     "к",
//     "е",
//     "н",
//     "г",
//     "ш",
//     "щ",
//     "з",
//     "х",
//     "ъ",
//     "[",
//     "]",
//     "\\",
//   ],
//   [
//     "CapsLock",
//     "ф",
//     "ы",
//     "в",
//     "а",
//     "п",
//     "р",
//     "о",
//     "л",
//     "д",
//     "ж",
//     "э",
//     ";",
//     "'",
//   ],
//   ["я", "ч", "с", " ", "м", "и", "т", "ь", "б", "ю", ",", ".", "/","Langs"],
// ],
// [
//   ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "=", "-", "BackSpace"],
//   ["q", "w", "e", "r", "t", "z", "u", "i", "o", "p","ü", "[", "]", "\\"],
//   ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l","ö","ä", ";", "'"],
//   ["y", "x", "c", " ", "v", "b", "n", "m", ",", ".", "/","Langs"],
// ],
