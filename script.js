let answer = prompt("У Львові кожен п’ятий – студент. Станом на 2014 рік у Львові здобувають освіту понад 170 тисяч студенів у 26 львівських університетах.");

if (answer == "Ні" ){
    alert(`Не знаєш ти Львова`)
} else {
    let answer2 = prompt("Львів – місто, яке, збудоване 1256 року і подароване засновником Данилом Галицьким для свого сина Лева, а також – назване в його честь.")
    if (answer2 == "Ні"){
        alert(`Треш ото ти тупанув`)
    } else {
        let answer3 = prompt("Львів – місто, яке за час свого існування перебувало у складі 8 держав: Галицько-Волинського князівства, Австро-Угорської імперії, Речі Посполитої, Російської імперії, у складі ЗУНР, СРСР, під нацистським режимом та належить досі Незалежній Україні.")
        if (answer3 == "Ні"){
            alert(`Неправда, погано ти знаєш Львів `)
        } else {
            let answer4 = prompt ("З 2014 року Львів встановив на площі Коліївщини чергове своє ноу-хау – велогенератор. Ця атракція є безкоштовною. Кожен охочий може залізти на велотрек, покрутити педалі і, тим самим, підзарядити свій гаджет. До слова, площа Коліївщини – є найменшою міською площею Львова.")
            if (answer4 == "Ні"){
                alert(`Я просто промовчу`)
            }
        }
    }
}