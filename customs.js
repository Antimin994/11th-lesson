var elem = document.getElementById('elem');
function func(surname, name) {
alert(this.value + ', ' + surname + ' ' + name);
}
let bindFunc = func.bind(elem);

bindFunc('Иванов', 'Иван');
bindFunc('Петров', 'Петр');




function func01() {
alert(this.value);
}
func01.call(elem);
