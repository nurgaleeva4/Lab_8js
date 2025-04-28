// humansData.js
export async function getData() {
    const names = ["Иван", "Мария", "Андрей", "Елена", "Олег", "Ольга"];
    const surnames = ["Иванов", "Петрова", "Сидоров", "Кузнецова", "Смирнов"];
    const cities = ["Москва", "Питер", "Казань", "Самара", "Томск"];
    const phones = ["+79991234567", "+79261234567", "+79851234567"];
    const genders = ["муж", "жен"];

    const count = Math.floor(Math.random() * 10) + 5;
    const people = [];

    for (let i = 0; i < count; i++) {
        const gender = genders[Math.floor(Math.random() * genders.length)];
        people.push({
            name: names[Math.floor(Math.random() * names.length)],
            surname: surnames[Math.floor(Math.random() * surnames.length)],
            age: Math.floor(Math.random() * 90) + 1,
            gender,
            address: cities[Math.floor(Math.random() * cities.length)],
            phone: phones[Math.floor(Math.random() * phones.length)],
        });
    }

    return people;
}
