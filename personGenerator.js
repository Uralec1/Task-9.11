const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Мария",
            "id_3": "Ирина",
            "id_4": "Алевтина",
            "id_5": "Дарья",
            "id_6": "Надежда",
            "id_7": "Марина",
            "id_8": "Олеся",
            "id_9": "Елена",
            "id_10": "Алёна"
        }
    }`,

    maleprofessiaJson: `{
        "count": 8,
        "list": {
            "id_1": "Монтажник",
            "id_2": "Водитель",
            "id_3": "Охранник",
            "id_4": "Грузчик",
            "id_5": "Фрезеровщик",
            "id_6": "Шахтёр",
            "id_7": "Матрос",
            "id_8": "Токарь"
        }
    }`,

    femaleprofessiaJson: `{
        "count": 8,
        "list": {
            "id_1": "Дизайнер",
            "id_2": "Кассир",
            "id_3": "Учительница",
            "id_4": "Закройщица",
            "id_5": "Продавщица",
            "id_6": "Художница",
            "id_7": "Балерина",
            "id_8": "Секретарь"
        }
    }`,

    birthMonthJson: `{
        "count": 12,
        "list": {
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    


    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    //Генерация пола
    randomgender: function () {
        let gender = this.randomIntNumber();
        return gender === this.randomIntNumber() ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    //Генерация имени
    randomfirstName: function() {
        let firstNameMale = this.randomValue(this.firstNameMaleJson);
        let firstNameFemale = this.randomValue(this.firstNameFemaleJson);
        if (this.person.gender === this.GENDER_MALE) {
            console.log(firstNameMale)
            return firstNameMale;
        } else {
            console.log(firstNameFemale);
            return firstNameFemale;
        } 
    },

    //Генерация фамилии
    randomsurname: function() {
        let surnameMale = this.randomValue(this.surnameJson);
        let surnameFemale = (this.randomValue(this.surnameJson) + 'a');
        if (this.person.gender === this.GENDER_MALE) {
            console.log(surnameMale);
            return surnameMale;
        } else {
            console.log(surnameFemale);
            return surnameFemale;
        }
    },

    //Генерация отчества
    randomsecondName: function() {
        const fatherName = this.randomValue(this.firstNameMaleJson); 
        if (this.person.gender === this.GENDER_MALE) {
            if (fatherName === 'Андрей') {
              console.log('Андреевич');
              return 'Андреевич';
            } else if (fatherName === 'Никита') {
              console.log('Никитич');
              return 'Никитич';
            } else if (fatherName === 'Дмитрий') {
              console.log('Дмитриевич');
              return 'Дмитриевич';
            } else {
              console.log(fatherName + 'ович');
              return fatherName + 'ович';
            }
        } else if (this.person.gender === this.GENDER_FEMALE) {
          if (fatherName === 'Андрей') {
              console.log('Андреевна');
              return 'Андреевна';
            } else if (fatherName === 'Никита') {
              console.log('Никитична');
              return 'Никитична';
            } else if (fatherName === 'Дмитрий') {
              console.log('Дмитриевна');
              return 'Дмитриевна';
            } else {
              console.log(fatherName + 'овна');
              return fatherName + 'овна';
            }
        } 
    },

    //Генерация професии
    randomprofessia: function () {
        let maleprofessia = this.randomValue(this.maleprofessiaJson);
        let femaleprofessia = this.randomValue(this.femaleprofessiaJson);
        if (this.person.gender === this.GENDER_MALE) {
            console.log(maleprofessia);
            return maleprofessia;
        } else {
            console.log(femaleprofessia);
            return femaleprofessia;
        }
    },

    //Генерация даты рождения
    randomBirthDate: function () {
        let month = this.randomValue(this.birthMonthJson);
        let day;
        if (month === "февраля") {
            day = this.randomIntNumber(1, 28);
        } else if (month === "апреля" || "июня" || "сентября" || "ноября") { 
            day = this.randomIntNumber(1, 30);
        } else {
            day = this.randomIntNumber(1, 31);
        }
        return day + ' ' + month;
    },

    //Генерация года рождения
    randombirthYear: function () {
        let birthYear = this.randomIntNumber(1970, 2000);
        return birthYear;
    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomgender();
        this.person.firstName = this.randomfirstName();
        this.person.surname = this.randomsurname();
        this.person.secondName = this.randomsecondName();
        this.person.birthDate = this.randomBirthDate();
        this.person.birthYear = this.randombirthYear();
        this.person.professia = this.randomprofessia();
        return this.person;
    },
};