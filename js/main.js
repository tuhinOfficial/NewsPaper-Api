// Step: 1
const categoryFetch = () =>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => showCategory(data.data))
}
// Step: 2
const showCategory = (data) =>{
    const categoryContainer = document.getElementById('category-container');

    data.news_category.forEach(singleData => {
        // console.log(singleData.category_id);
    const linkContainer =document.createElement('p');
    linkContainer.innerHTML=`<a href='#' onclick="showCategoryData('${singleData.category_id}' , '${singleData.category_name}')">${singleData?.category_name}</a>`
    
    
    categoryContainer.appendChild(linkContainer);
    });
}

// Step 3: get AllData Category Wise

const showCategoryData = (categoryId , categoryName) =>{
    // console.log(categoryId);
    const url =`https://openapi.programming-hero.com/api/news/category/${categoryId}`
    fetch(url).then(res => res.json()).then(data => showAllNewsData(data.data , categoryName))

}

const showAllNewsData = (data , categoryName) =>{
    console.log(categoryName);
    const categoryCount = document.getElementById('category-count');
    categoryCount.innerText= data.length;
    const categoryNames = document.getElementById('category-name');
    categoryNames.innerText=categoryName;
}
