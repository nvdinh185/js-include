console.log("123456");

const ulElement = document.querySelector("#list-danhmuc");

const listDanhMuc = [
    {
        id: 1,
        name: 'Thời sự'
    },
    {
        id: 2,
        name: 'Góc nhìn'
    },
    {
        id: 3,
        name: 'Thế giới'
    },
    {
        id: 4,
        name: 'Kinh doanh'
    }
]

listDanhMuc.forEach(function (news) {
    const liElement = document.createElement('li');
    liElement.innerHTML = `
        <a href="danhmuc.html">${news.name}</a>
    `;

    ulElement.appendChild(liElement);

})