/*
    © 2025 Red Moon - القمر الاحمر | Moussa Mohammed
    جميع الحقوق محفوظة.
*/
// 
//     © 2025 Red Moon - القمر الاحمر | Moussa Mohammed
//     جميع الحقوق محفوظة.
// // إضافة رقم أو عملية للعرض، مع استبدال * بـ x للعرض فقط
function appendValue(val) {
    if (val === '*') {
        calc.screen.value += 'x'; // للعرض فقط
    } else {
        calc.screen.value += val;
    }
}

// دالة الحساب مع معالجة الأخطاء وتحويل x إلى *
function calculate() {
    try {
        let expression = calc.screen.value;

        // استبدال كل x بـ * عشان الحساب الصح
        expression = expression.replace(/x/g, '*');

        if (expression.trim() === "") {
            calc.screen.value = "خطأ: لم تدخل تعبير";
            return;
        }

        const result = eval(expression);

        if (result === Infinity || result === -Infinity) {
            calc.screen.value = "خطأ: قسمة على صفر";
        }
        else if (isNaN(result)) {
            calc.screen.value = "خطأ: تعبير غير صالح";
        }
        else {
            calc.screen.value = result;
        }
    } catch (e) {
        calc.screen.value = "خطأ: تعبير غير صالح";
    }
}

// دالة تفريغ الشاشة
function clearScreen() {
    calc.screen.value = "";
}

// دالة حذف آخر حرف
function deleteLast() {
    calc.screen.value = calc.screen.value.slice(0, -1);
}
  const calc = document.forms.calc;

    // تضيف القيمة مع عرض "x" بدل "*" في الشاشة
    function appendValue(val) {
      if (val === '*') {
        calc.screen.value += 'x'; // عرض x بدل *
      } else {
        calc.screen.value += val;
      }
    }

    // تفريغ الشاشة
    function clearScreen() {
      calc.screen.value = '';
    }

    // حذف آخر حرف
    function deleteLast() {
      calc.screen.value = calc.screen.value.slice(0, -1);
    }

    // دالة الحساب مع معالجة الأخطاء وتحويل x إلى *
    function calculate() {
      try {
        let expression = calc.screen.value;

        // تحويل كل x لـ * عشان الحساب
        expression = expression.replace(/x/g, '*');

        if (expression.trim() === '') {
          calc.screen.value = 'خطأ: لم تدخل تعبير';
          return;
        }

        const result = eval(expression);

        if (result === Infinity || result === -Infinity) {
          calc.screen.value = 'خطأ: قسمة على صفر';
        } else if (isNaN(result)) {
          calc.screen.value = 'خطأ: تعبير غير صالح';
        } else {
          calc.screen.value = result;
        }
      } catch (e) {
        calc.screen.value = 'خطأ: تعبير غير صالح';
      }
    }
